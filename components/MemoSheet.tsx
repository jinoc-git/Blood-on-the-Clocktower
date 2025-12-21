'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { PERIODS } from '../constants/periods';
import { useNoteActions } from '../hooks/useNoteActions';
import { useNoteState } from '../providers/NoteProvider';
import { copyMemo } from '../utils/copyMemo';

const INIT_ROW = 8;
const MAX_ROW = 25;

export default function MemoSheet() {
  const { memoData } = useNoteState();
  const {
    handleMemoUpdate,
    handleJobRemove,
    handleJobClick,
    handleJobCellClick,
    resetSheet,
    handleRemoveOnlyMemo,
  } = useNoteActions();

  const [maxRows, setMaxRows] = useState(INIT_ROW);

  useEffect(() => {
    const item = localStorage.getItem('blood-on-the-clocktower');
    if (item) {
      const memoLen = Object.keys(JSON.parse(item)).length;
      setMaxRows(memoLen > INIT_ROW ? memoLen : INIT_ROW);
    }
  }, []);

  // Create array of rows (some may be empty)
  const selectedJobs = Object.values(memoData).map((j) => j.info);
  const displayJobs = Array.from(
    { length: maxRows },
    (_, index) => selectedJobs[index] || null
  );

  const addRow = () => {
    if (maxRows < MAX_ROW) {
      setMaxRows(maxRows + 1);
    }
  };

  return (
    <div className="p-4 glassContainer">
      <div className="mb-4">
        <div className="flex justify-center space-x-4">
          <button
            onClick={addRow}
            disabled={maxRows >= MAX_ROW}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white rounded">
            행 추가 ({maxRows}/{MAX_ROW})
          </button>
          <button
            onClick={handleRemoveOnlyMemo}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded">
            메모만 지우기
          </button>
          <button
            onClick={resetSheet}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded">
            전체 초기화
          </button>
        </div>
      </div>

      <div className="overflow-x-auto relative">
        <table className="w-full border-collapse border liquid-glass-table">
          <thead>
            <tr>
              <th className="border border-amber-950 p-2  min-w-[40px]"></th>
              {/* <th className="border p-2  min-w-[60px]">토큰</th> */}
              <th className="border border-amber-950 p-2  min-w-[150px]">
                직업
              </th>
              {PERIODS.map((period) => (
                <th
                  key={period}
                  className="border border-amber-950 p-2  min-w-[150px] ">
                  {/* {formatPeriod(period)} */}
                  {period}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayJobs.map((job, index) => (
              <tr key={job?.id || `empty-${index}`}>
                {/* Delete Cell */}
                <td className="border border-amber-950 p-1">
                  {job && (
                    <button
                      onClick={() => handleJobRemove(job.id)}
                      className="w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded text-sm">
                      ×
                    </button>
                  )}
                </td>

                {/* Job Cell */}
                <td className="border border-amber-950 p-2 liquid-glass-job-cell">
                  {job ? (
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-12 h-12 relative cursor-pointer"
                        onClick={() => handleJobClick(job)}>
                        <Image
                          src={
                            typeof job.image === 'string'
                              ? job.image
                              : job.image[0]
                          }
                          alt={job.name}
                          fill
                          className="object-cover rounded"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/assets/jobs/placeholder-job.png';
                          }}
                        />
                      </div>
                      <span
                        className="font-medium cursor-pointer hover:text-blue-600 text-amber-950"
                        onClick={() => handleJobClick(job)}>
                        {job.name}
                      </span>
                      <button
                        className="liquid-glass-copy-button top-[-14px] right-[-4px] hover:bg-gray-300"
                        onClick={() => copyMemo(memoData, job.id)}>
                        <Image
                          src={'/assets/icon/copy.svg'}
                          width={18}
                          height={18}
                          alt="복사 아이콘"
                        />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleJobCellClick()}
                      className="liquid-glass-add-job-button">
                      + 직업 추가
                    </button>
                  )}
                </td>

                {/* Period Cells */}
                {PERIODS.map((period, idx) => {
                  // const isDisable =
                  //   NO_INFO_FIRST_NIGHT.includes(job?.id) && idx === 0;
                  return (
                    <td key={period} className="border border-amber-950 p-1">
                      {job && (
                        <textarea
                          value={memoData[job.id]?.memos[period] || ''}
                          onChange={(e) =>
                            handleMemoUpdate(job.id, period, e.target.value)
                          }
                          // disabled={isDisable}
                          className="w-full h-20 font-semibold p-1 text-sm resize-none border-none outline-none bg-transparent disabled:placeholder-center disabled:cursor-not-allowed"
                          // placeholder={isDisable ? '❌' : '메모...'}
                          placeholder="메모..."
                        />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

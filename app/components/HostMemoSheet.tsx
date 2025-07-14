import React, { useEffect, useState } from 'react';
import { Job, MemoData, Token } from '../types';
import Image from 'next/image';
import { PERIODS } from '../constants/periods';
import toast from 'react-hot-toast';
import { NO_INFO_FIRST_NIGHT } from '../constants/noInfoFirstNight';

interface MemoSheetProps {
  selectedJobs: Job[];
  memoData: MemoData;
  onMemoUpdate: (jobId: string, period: string, value: string) => void;
  // onTokenUpdate: (jobId: string, tokens: Token[]) => void;
  onJobRemove: (jobId: string) => void;
  onJobClick: (job: Job) => void;
  onJobCellClick: (jobId?: string) => void;
  onReset: () => void;
  handleRemoveOnlyMemo: () => void;
}

const INIT_COLUMNS = 8;

export default function MemoSheet({
  selectedJobs,
  memoData,
  onMemoUpdate,
  // onTokenUpdate,
  onJobRemove,
  onJobClick,
  onJobCellClick,
  onReset,
  handleRemoveOnlyMemo,
}: MemoSheetProps) {
  // const [showTokenSelector, setShowTokenSelector] = useState<string | null>(
  //   null
  // );
  const [maxColumns, setMaxColumns] = useState(INIT_COLUMNS);

  useEffect(() => {
    const item = localStorage.getItem('blood-on-the-clocktower');
    if (item) {
      const memoLen = Object.keys(JSON.parse(item)).length;
      setMaxColumns(memoLen > INIT_COLUMNS ? memoLen : INIT_COLUMNS);
    }
  }, []);

  // Create array of columns (some may be empty)
  const displayJobs = Array.from(
    { length: maxColumns },
    (_, index) => selectedJobs[index] || null
  );

  const addColumn = () => {
    if (maxColumns < 15) {
      setMaxColumns(maxColumns + 1);
    }
  };

  const copyMemo = async (jobId: string) => {
    let copyText = '';
    const jobMemos = memoData[jobId]?.memos;
    try {
      if (jobMemos) {
        copyText += `${memoData[jobId].info.name}: `;
        const sortedMemo = Object.entries(jobMemos).sort(
          ([a], [b]) => parseInt(a[0]) - parseInt(b[0])
        );
        for (let [key, value] of sortedMemo) {
          let val = value.trim() === '' ? '없음' : value.trim();
          copyText += `${key}-${val}, `;
        }
      }
    } catch (error) {
      toast.error('복사 실패..');
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(copyText);
        toast.success('복사 성공!');

        return true;
      } catch (err) {
        toast.error('복사 실패..');

        return false;
      }
    }

    return false;
  };

  const isNoInfoFirstNight = (job: Job) => {};

  // const addPeriod = () => {
  //   const lastPeriod = periods[periods.length - 1];
  //   const match = lastPeriod.match(/^(day|night)(\d+)$/);
  //   if (match) {
  //     const [, type, num] = match;
  //     const nextNum = parseInt(num);
  //     const newPeriod =
  //       type === 'night' ? `day${nextNum + 1}` : `night${nextNum + 1}`;
  //     setPeriods([...periods, newPeriod]);
  //   }
  // };

  // const formatPeriod = (period: string) => {
  //   if (period === 'night0') return '0번째 밤';
  //   const match = period.match(/^(day|night)(\d+)$/);
  //   if (match) {
  //     const [, type, num] = match;
  //     return type === 'day' ? `${num}번째 낮` : `${num}번째 밤`;
  //   }
  //   return period;
  // };

  return (
    <div className="p-4 glassContainer">
      <div className="mb-4">
        <div className="flex justify-center space-x-4">
          <button
            onClick={addColumn}
            disabled={maxColumns >= 15}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white rounded">
            열 추가 ({maxColumns}/15)
          </button>
          {/* <button
            onClick={addPeriod}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded">
            시간대 추가
          </button> */}
          <button
            onClick={handleRemoveOnlyMemo}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded">
            메모만 지우기
          </button>
          <button
            onClick={onReset}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded">
            전체 초기화
          </button>
        </div>
      </div>

      <div className="overflow-x-scroll relative">
        <table className="w-full border-collapse border liquid-glass-table">
          <thead>
            <tr>
              <th className="border border-amber-950 p-2 w-[80px] text-center">
                시간대
              </th>
              {displayJobs.map((job, index) => (
                <th
                  key={job?.id || `empty-${index}`}
                  className="border border-amber-950 py-1 px-1 w-[100px] liquid-glass-job-cell relative">
                  {job ? (
                    <div className="flex flex-col justify-center space-y-2 w-[80px] h-[74px]">
                      <button
                        onClick={() => onJobRemove(job.id)}
                        className="absolute top-0 left-0 w-6 h-6 bg-red-500/50 hover:bg-red-600 text-white rounded text-xs z-10">
                        ×
                      </button>
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-12 h-12 relative cursor-pointer"
                          onClick={() => onJobClick(job)}>
                          <Image
                            src={
                              job.image || '/assets/jobs/placeholder-job.png'
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
                          onClick={() => onJobClick(job)}>
                          {job.name}
                        </span>
                        {/* <button
                          className="absolute right-1 top-1 h-6 liquid-glass-copy-button z-10"
                          onClick={() => copyMemo(job.id)}>
                          <Image
                            src={'/assets/icon/copy.svg'}
                            width={18}
                            height={18}
                            alt="복사 아이콘"
                          />
                        </button> */}
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => onJobCellClick()}
                      className="liquid-glass-add-job-button">
                      + 직업 추가
                    </button>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PERIODS.map((period, periodIndex) => (
              <tr key={period} className="w-[80px]">
                {/* Period Cell */}
                <td className="border border-amber-950 p-2 w-[80px] text-center">
                  <span className="font-medium text-amber-950">{period}</span>
                </td>

                {/* Job Memo Cells */}
                {displayJobs.map((job, jobIndex) => {
                  // const isDisable =
                  //   NO_INFO_FIRST_NIGHT.includes(job?.id) && periodIndex === 0;
                  return (
                    <td
                      key={job?.id || `empty-${jobIndex}`}
                      className="border border-amber-950 p-1 h-[95px]">
                      {job && (
                        <textarea
                          value={memoData[job.id]?.memos[period] || ''}
                          onChange={(e) =>
                            onMemoUpdate(job.id, period, e.target.value)
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

      {/* {showTokenSelector !== null ? (
        <TokenSelectorModal
          currentTokens={
            showTokenSelector ? memoData[showTokenSelector]?.tokens || [] : []
          }
          onTokensChange={(newTokens) => {
            if (showTokenSelector) {
              onTokenUpdate(showTokenSelector, newTokens);
            }
          }}
          onClose={() => setShowTokenSelector(null)}
        />
      ) : null} */}
    </div>
  );
}

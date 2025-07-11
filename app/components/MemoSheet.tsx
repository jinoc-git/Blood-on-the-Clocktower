import React, { useEffect, useState } from 'react';
import { Job, MemoData, Token } from '../types';
import Image from 'next/image';
import { PERIODS } from '../constants/periods';
import toast from 'react-hot-toast';

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

const INIT_ROW = 8;

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
  const [maxRows, setMaxRows] = useState(INIT_ROW);

  useEffect(() => {
    const item = localStorage.getItem('blood-on-the-clocktower');
    if (item) {
      const memoLen = Object.keys(JSON.parse(item)).length;
      setMaxRows(memoLen > INIT_ROW ? memoLen : INIT_ROW);
    }
  }, []);

  // Create array of rows (some may be empty)
  const displayJobs = Array.from(
    { length: maxRows },
    (_, index) => selectedJobs[index] || null
  );

  const addRow = () => {
    if (maxRows < 15) {
      setMaxRows(maxRows + 1);
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
            onClick={addRow}
            disabled={maxRows >= 15}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white rounded">
            행 추가 ({maxRows}/15)
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
                      onClick={() => onJobRemove(job.id)}
                      className="w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded text-sm">
                      ×
                    </button>
                  )}
                </td>

                {/* Token Cell */}
                {/* <td className="border p-1">
                  {job && (
                    <div className="flex flex-col items-center">
                      <div className="flex flex-wrap gap-1 justify-center mb-2">
                        {(memoData[job.id]?.tokens || []).map((token) => (
                          <div
                            key={`${token.id}-${Date.now()}`}
                            className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center overflow-hidden"
                            title={token.name}>
                            <Image
                              src={`/assets/tokens/${token.type}.png`}
                              alt={token.name}
                              width={20}
                              height={20}
                              className="object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = `<span class="text-xs font-bold">${token.name.charAt(
                                    0
                                  )}</span>`;
                                  parent.className =
                                    'w-6 h-6 rounded-full bg-yellow-400 border border-yellow-600 flex items-center justify-center';
                                }
                              }}
                            />
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => setShowTokenSelector(job.id)}
                        className="w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded text-sm">
                        +
                      </button>
                    </div>
                  )}
                </td> */}

                {/* Job Cell */}
                <td className="border border-amber-950 p-2 liquid-glass-job-cell">
                  {job ? (
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-12 h-12 relative cursor-pointer"
                        onClick={() => onJobClick(job)}>
                        <Image
                          src={job.image || '/assets/jobs/placeholder-job.png'}
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
                      <button
                        className="liquid-glass-copy-button"
                        onClick={() => copyMemo(job.id)}>
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
                      onClick={() => onJobCellClick()}
                      className="liquid-glass-add-job-button">
                      + 직업 추가
                    </button>
                  )}
                </td>

                {/* Period Cells */}
                {PERIODS.map((period) => (
                  <td key={period} className="border border-amber-950 p-1">
                    {job && (
                      <textarea
                        value={memoData[job.id]?.memos[period] || ''}
                        onChange={(e) =>
                          onMemoUpdate(job.id, period, e.target.value)
                        }
                        className="w-full h-20 font-semibold p-1 text-sm resize-none border-none outline-none bg-transparent "
                        placeholder="메모..."
                      />
                    )}
                  </td>
                ))}
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

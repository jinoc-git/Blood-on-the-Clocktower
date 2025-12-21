'use client';

import toast from 'react-hot-toast';
import { MemoData } from '../app/types';

export const copyMemo = async (memoData: MemoData, jobId: string) => {
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

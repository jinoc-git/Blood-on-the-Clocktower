'use client';

import toast from 'react-hot-toast';
import { MemoData, Memos } from '../app/types';

type Args =
  | { type: 'job'; memoData: MemoData; jobId: string }
  | { type: 'peg'; pegData: Memos };

export const copyMemo = async (payload: Args) => {
  let copyText = '';
  let data: [string, string][] = [];

  if (payload.type === 'peg') {
    const { pegData } = payload;
    copyText += `지목: `;
    const sortedMemo = Object.entries(pegData).sort(
      ([a], [b]) => parseInt(a[0]) - parseInt(b[0])
    );

    data = sortedMemo;
  } else {
    const { memoData, jobId } = payload;

    const jobMemos = memoData[jobId]?.memos;
    try {
      if (jobMemos) {
        copyText += `${memoData[jobId].info.name}: `;
        const sortedMemo = Object.entries(jobMemos).sort(
          ([a], [b]) => parseInt(a[0]) - parseInt(b[0])
        );

        data = sortedMemo;
      }
    } catch (error) {
      toast.error('복사 실패..');
    }
  }

  for (let [key, value] of data) {
    let val = value.trim() === '' ? '없음' : value.trim();
    copyText += `${key}-${val}, `;
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

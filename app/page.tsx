'use client';

import React, { useReducer, useEffect } from 'react';
import MemoSheet from './components/MemoSheet';
import JobModal from './components/JobModal';
import JobSelectorModal from './components/JobSelectorModal';
import NavigationBar from './components/NavigationBar';
import { Job, MemoData } from './types';
import Update from './components/Update';
import ErrorBoundary from './components/ErrorBoundary';
import { initNoteState, noteReducer } from './reducer/noteReducer';

export default function Home() {
  const [noteState, dispatch] = useReducer(noteReducer, initNoteState);

  useEffect(() => {
    try {
      const item = localStorage.getItem('blood-on-the-clocktower');
      if (item) {
        const parsedItem = JSON.parse(item) as MemoData;
        const isOldData = Object.values(parsedItem).some(({ memos }) =>
          Object.keys(memos).some((v) => /[가-힣]/.test(v) || '0 Day' === v)
        );

        if (isOldData) {
          localStorage.setItem('blood-on-the-clocktower', JSON.stringify({}));
          dispatch({ type: 'INITIALIZE_STATE', payload: {} });
        } else {
          dispatch({ type: 'INITIALIZE_STATE', payload: parsedItem });
        }
      } else {
        dispatch({ type: 'INITIALIZE_STATE', payload: {} });
      }
    } catch (error) {
      localStorage.setItem('blood-on-the-clocktower', JSON.stringify({}));
      dispatch({ type: 'INITIALIZE_STATE', payload: {} });
    }
  }, []);

  useEffect(() => {
    if (noteState.isInitialized) {
      localStorage.setItem(
        'blood-on-the-clocktower',
        JSON.stringify(noteState.memoData)
      );
    }
  }, [noteState.memoData, noteState.isInitialized]);

  const selectedJobs = Object.values(noteState.memoData).map((j) => j.info);

  const handleJobSelect = (job: Job) =>
    dispatch({ type: 'SELECT_JOB', payload: job });
  const handleJobRemove = (jobId: string) =>
    dispatch({ type: 'REMOVE_JOB', payload: jobId });
  const handleMemoUpdate = (jobId: string, period: string, value: string) =>
    dispatch({ type: 'UPDATE_MEMO', payload: { jobId, period, value } });
  const resetSheet = () => dispatch({ type: 'RESET_SHEET' });
  const handleRemoveOnlyMemo = () => dispatch({ type: 'REMOVE_ONLY_MEMO' });
  const handleJobClick = (job: Job) =>
    dispatch({ type: 'OPEN_JOB_MODAL', payload: job });
  const handleJobCellClick = () => dispatch({ type: 'OPEN_JOB_SELECTOR' });
  const closeJobModal = () => dispatch({ type: 'CLOSE_JOB_MODAL' });
  const closeJobSelector = () => dispatch({ type: 'CLOSE_JOB_SELECTOR' });

  if (!noteState.isInitialized) {
    return null;
  }

  return (
    <ErrorBoundary>
      <>
        <NavigationBar />

        <div className="max-w-full mx-auto p-4">
          <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
            시계탑에 흐른 피 - 메모 시트
            <br />
            <Update />
          </h1>

          <MemoSheet
            selectedJobs={selectedJobs}
            memoData={noteState.memoData}
            onMemoUpdate={handleMemoUpdate}
            // onTokenUpdate={handleTokenUpdate}
            onJobRemove={handleJobRemove}
            onJobClick={handleJobClick}
            onJobCellClick={handleJobCellClick}
            onReset={resetSheet}
            handleRemoveOnlyMemo={handleRemoveOnlyMemo}
          />
        </div>

        <JobModal
          job={noteState.selectedJobForModal}
          isOpen={noteState.isJobModalOpen}
          onClose={closeJobModal}
        />

        <JobSelectorModal
          isOpen={noteState.isJobSelectorOpen}
          onJobSelect={handleJobSelect}
          onClose={closeJobSelector}
        />
      </>
    </ErrorBoundary>
  );
}

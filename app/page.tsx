'use client';

import React, { useReducer, useEffect } from 'react';
import MemoSheet from './components/MemoSheet';
import JobModal from './components/JobModal';
import JobSelectorModal from './components/JobSelectorModal';
import NavigationBar from './components/NavigationBar';
import { Job, MemoData } from './types';
import Update from './components/Update';
import ErrorBoundary from './components/ErrorBoundary';

// 1. Define State and Actions
interface AppState {
  memoData: MemoData;
  selectedJobForModal: Job | null;
  isJobModalOpen: boolean;
  isJobSelectorOpen: boolean;
  isInitialized: boolean; // Flag to check if state is loaded from localStorage
}

type Action =
  | { type: 'INITIALIZE_STATE'; payload: MemoData }
  | { type: 'SELECT_JOB'; payload: Job }
  | { type: 'REMOVE_JOB'; payload: string } // jobId
  | {
      type: 'UPDATE_MEMO';
      payload: { jobId: string; period: string; value: string };
    }
  | { type: 'RESET_SHEET' }
  | { type: 'REMOVE_ONLY_MEMO' }
  | { type: 'OPEN_JOB_MODAL'; payload: Job }
  | { type: 'CLOSE_JOB_MODAL' }
  | { type: 'OPEN_JOB_SELECTOR' }
  | { type: 'CLOSE_JOB_SELECTOR' };

// 2. Create Reducer Function
const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'INITIALIZE_STATE':
      return { ...state, memoData: action.payload, isInitialized: true };

    case 'SELECT_JOB': {
      const job = action.payload;
      const newMemoData = { ...state.memoData };
      if (!newMemoData[job.id]) {
        newMemoData[job.id] = {
          info: job,
          memos: {},
          tokens: [],
        };
      }
      return { ...state, memoData: newMemoData, isJobSelectorOpen: false };
    }

    case 'REMOVE_JOB': {
      const jobId = action.payload;
      const newMemoData = { ...state.memoData };
      delete newMemoData[jobId];
      return { ...state, memoData: newMemoData };
    }

    case 'UPDATE_MEMO': {
      const { jobId, period, value } = action.payload;
      const newMemoData = { ...state.memoData };
      const jobData = newMemoData[jobId];

      if (!jobData) return state; // Should not happen

      const newMemos = { ...jobData.memos };
      if (value.trim() === '') {
        delete newMemos[period];
      } else {
        newMemos[period] = value;
      }

      newMemoData[jobId] = { ...jobData, memos: newMemos };
      return { ...state, memoData: newMemoData };
    }

    case 'RESET_SHEET':
      localStorage.setItem('blood-on-the-clocktower', JSON.stringify({}));
      return { ...initialState, isInitialized: true };

    case 'REMOVE_ONLY_MEMO': {
      const newMemoData = { ...state.memoData };
      Object.keys(newMemoData).forEach((jobId) => {
        newMemoData[jobId] = {
          ...newMemoData[jobId],
          memos: {},
          tokens: [], // Assuming tokens should also be cleared
        };
      });
      return { ...state, memoData: newMemoData };
    }

    case 'OPEN_JOB_MODAL':
      return {
        ...state,
        isJobModalOpen: true,
        selectedJobForModal: action.payload,
      };

    case 'CLOSE_JOB_MODAL':
      return { ...state, isJobModalOpen: false, selectedJobForModal: null };

    case 'OPEN_JOB_SELECTOR':
      return { ...state, isJobSelectorOpen: true };

    case 'CLOSE_JOB_SELECTOR':
      return { ...state, isJobSelectorOpen: false };

    default:
      return state;
  }
};

// 3. Define Initial State
const initialState: AppState = {
  memoData: {},
  selectedJobForModal: null,
  isJobModalOpen: false,
  isJobSelectorOpen: false,
  isInitialized: false,
};

export default function Home() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Effect for client-side initialization from localStorage
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
  }, []); // Empty dependency array ensures this runs only once on mount

  // Effect to sync state with localStorage
  useEffect(() => {
    if (state.isInitialized) {
      localStorage.setItem(
        'blood-on-the-clocktower',
        JSON.stringify(state.memoData)
      );
    }
  }, [state.memoData, state.isInitialized]);

  // Derived state
  const selectedJobs = Object.values(state.memoData).map((j) => j.info);

  // Handler functions now dispatch actions
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

  if (!state.isInitialized) {
    // Render nothing or a loading spinner until the state is initialized
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
            memoData={state.memoData}
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
          job={state.selectedJobForModal}
          isOpen={state.isJobModalOpen}
          onClose={closeJobModal}
        />

        <JobSelectorModal
          isOpen={state.isJobSelectorOpen}
          onJobSelect={handleJobSelect}
          onClose={closeJobSelector}
        />
      </>
    </ErrorBoundary>
  );
}

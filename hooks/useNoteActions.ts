import { Job, Memos } from '../app/types';
import { useNoteDispatch } from '../providers/NoteProvider';

export const useNoteActions = () => {
  const dispatch = useNoteDispatch();

  return {
    handleJobSelect: (job: Job) =>
      dispatch({ type: 'SELECT_JOB', payload: job }),
    handleJobRemove: (jobId: string) =>
      dispatch({ type: 'REMOVE_JOB', payload: jobId }),
    handleMemoUpdate: (jobId: string, period: string, value: string) =>
      dispatch({ type: 'UPDATE_MEMO', payload: { jobId, period, value } }),
    resetSheet: () => dispatch({ type: 'RESET_SHEET' }),
    handleRemoveOnlyMemo: () => dispatch({ type: 'REMOVE_ONLY_MEMO' }),
    handleJobClick: (job: Job) =>
      dispatch({ type: 'OPEN_JOB_MODAL', payload: job }),
    handleJobCellClick: () => dispatch({ type: 'OPEN_JOB_SELECTOR' }),
    closeJobModal: () => dispatch({ type: 'CLOSE_JOB_MODAL' }),
    closeJobSelector: () => dispatch({ type: 'CLOSE_JOB_SELECTOR' }),
    handlePegUpdate: (period: string, value: string) =>
      dispatch({ type: 'UPDATE_PEG', payload: { period, value } }),
  };
};

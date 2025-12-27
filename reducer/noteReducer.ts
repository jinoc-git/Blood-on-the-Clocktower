import { NoteAction, NoteState } from '../app/types';
import { DATA_KEY, PEG_DATA_KEY } from '../providers/NoteProvider';

export const initNoteState: NoteState = {
  memoData: {},
  pegData: {},
  selectedJobForModal: null,
  isJobModalOpen: false,
  isJobSelectorOpen: false,
  isInitialized: false,
  isPegInitialized: false,
};

export const noteReducer = (
  state: NoteState,
  action: NoteAction
): NoteState => {
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
      localStorage.setItem(DATA_KEY, JSON.stringify({}));
      localStorage.setItem(PEG_DATA_KEY, JSON.stringify({}));
      return { ...initNoteState, isInitialized: true };

    case 'REMOVE_ONLY_MEMO': {
      const newMemoData = { ...state.memoData };
      Object.keys(newMemoData).forEach((jobId) => {
        newMemoData[jobId] = {
          ...newMemoData[jobId],
          memos: {},
          tokens: [], // Assuming tokens should also be cleared
        };
      });
      return { ...state, memoData: newMemoData, pegData: {} };
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

    case 'INITIALIZE_PEG':
      return { ...state, pegData: action.payload, isPegInitialized: true };

    case 'UPDATE_PEG':
      const { period, value } = action.payload;
      const newPegData = { ...state.pegData };

      if (value.trim() === '') delete newPegData[period];
      else newPegData[period] = value;

      return { ...state, pegData: newPegData };

    default:
      return state;
  }
};

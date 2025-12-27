import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from 'react';
import { initNoteState, noteReducer } from '../reducer/noteReducer';
import { MemoData, Memos, NoteAction, NoteState } from '../app/types';

const NoteStateContext = createContext<NoteState | undefined>(undefined);
const NoteDispatchContext = createContext<
  React.Dispatch<NoteAction> | undefined
>(undefined);

export const DATA_KEY = 'blood-on-the-clocktower';
export const PEG_DATA_KEY = 'blood-on-the-clocktower-peg';

export function NoteProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(noteReducer, initNoteState);

  useEffect(() => {
    try {
      const item = localStorage.getItem(DATA_KEY);
      if (item) {
        const peg = localStorage.getItem(PEG_DATA_KEY);
        let parsedPeg: Memos = {};
        if (peg) parsedPeg = JSON.parse(peg);

        const parsedItem = JSON.parse(item) as MemoData;
        const isOldData = Object.values(parsedItem).some(({ memos }) =>
          Object.keys(memos).some((v) => /[가-힣]/.test(v) || '0 Day' === v)
        );

        if (isOldData) {
          localStorage.setItem(DATA_KEY, JSON.stringify({}));
          dispatch({ type: 'INITIALIZE_STATE', payload: {} });
        } else {
          dispatch({ type: 'INITIALIZE_PEG', payload: parsedPeg });
          dispatch({ type: 'INITIALIZE_STATE', payload: parsedItem });
        }
      } else {
        dispatch({ type: 'INITIALIZE_PEG', payload: {} });
        dispatch({ type: 'INITIALIZE_STATE', payload: {} });
      }
    } catch (error) {
      localStorage.setItem(DATA_KEY, JSON.stringify({}));
      localStorage.setItem(PEG_DATA_KEY, JSON.stringify({}));
      dispatch({ type: 'INITIALIZE_STATE', payload: {} });
      dispatch({ type: 'INITIALIZE_PEG', payload: {} });
    }
  }, []);

  // 로컬스토리지 저장
  useEffect(() => {
    if (state.isInitialized) {
      localStorage.setItem(DATA_KEY, JSON.stringify(state.memoData));
    }
  }, [state.memoData, state.isInitialized]);

  useEffect(() => {
    if (state.isPegInitialized) {
      localStorage.setItem(PEG_DATA_KEY, JSON.stringify(state.pegData));
    }
  }, [state.pegData, state.isPegInitialized]);

  return (
    <NoteStateContext.Provider value={state}>
      <NoteDispatchContext.Provider value={dispatch}>
        {children}
      </NoteDispatchContext.Provider>
    </NoteStateContext.Provider>
  );
}

// 편의를 위한 Custom Hook
export const useNoteState = () => {
  const context = useContext(NoteStateContext);
  if (!context)
    throw new Error('useNoteState must be used within a NoteProvider');
  return context;
};

export const useNoteDispatch = () => {
  const context = useContext(NoteDispatchContext);
  if (!context)
    throw new Error('useNoteDispatch must be used within a NoteProvider');
  return context;
};

import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from 'react';
import { initNoteState, noteReducer } from '../reducer/noteReducer';
import { MemoData, NoteAction, NoteState } from '../app/types';

const NoteStateContext = createContext<NoteState | undefined>(undefined);
const NoteDispatchContext = createContext<
  React.Dispatch<NoteAction> | undefined
>(undefined);

export function NoteProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(noteReducer, initNoteState);

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

  // 로컬스토리지 저장
  useEffect(() => {
    if (state.isInitialized) {
      localStorage.setItem(
        'blood-on-the-clocktower',
        JSON.stringify(state.memoData)
      );
    }
  }, [state.memoData, state.isInitialized]);

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

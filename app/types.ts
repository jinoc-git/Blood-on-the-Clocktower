type Memos = {
  [period: string]: string;
};

export interface MemoData {
  [jobId: string]: {
    info: Job;
    memos: Memos;
    tokens?: Token[];
  };
}

type JobBaseType = {
  id: string;
  name: string;
  image: string | string[];
  ability: string;
  team: 'townsfolk' | 'outsider' | 'minion' | 'demon';
};

export type Job = JobBaseType & {
  firstNight?: number;
  firstNightReminder?: string;
  otherNight?: number;
  otherNightReminder?: string;
  reminders?: string[];
  remindersGlobal?: string[];
  jinxes?: Record<string, string>[];
  special?: Record<string, string>[];
  setup?: boolean;
  edition?: string;
  flavor?: string;
};

export interface Token {
  type:
    | 'vigo_poison'
    | 'poison'
    | 'drunk'
    | 'grandmother'
    | 'witch_curse'
    | 'scholar'
    | 'charm'
    | 'red_herring';
  id: string;
  name: string;
}

export interface NoteState {
  memoData: MemoData;
  selectedJobForModal: Job | null;
  isJobModalOpen: boolean;
  isJobSelectorOpen: boolean;
  isInitialized: boolean;
}

export type NoteAction =
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

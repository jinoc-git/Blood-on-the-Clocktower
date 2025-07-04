// type TimeOfDay = 'day' | 'night';
// type Date = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
// export type Period = `${TimeOfDay}${Date}`;

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
  image: string;
  ability: string;
  team: 'townsfolk' | 'outsider' | 'minion' | 'demon';
};

export type Job = JobBaseType & {
  firstNight?: number;
  firstNightReminder?: string;
  otherNight?: number;
  otherNightReminder?: string;
  reminders?: string[];
};

export interface Token {
  type:
    | 'vigo_poison'
    | 'poison'
    | 'drunk'
    | 'grandmother'
    // | 'grandchild'
    | 'witch_curse'
    | 'scholar'
    | 'charm'
    | 'red_herring';
  id: string;
  name: string;
}

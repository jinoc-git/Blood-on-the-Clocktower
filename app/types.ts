
export interface Job {
  id: string;
  name: string;
  category: 'villager' | 'outsider' | 'minion' | 'demon';
  description: string;
  abilities: {
    timing: 'night0' | 'night' | 'day' | 'once_night' | 'once_day' | 'death' | 'passive';
    frequency: 'once' | 'nightly' | 'daily' | 'special';
  };
  image?: string;
}

export interface MemoData {
  [jobId: string]: {
    [period: string]: string;
    tokens?: Token[];
  };
}

export interface Token {
  type: 'vigo_poison' | 'poison' | 'drunk' | 'grandmother' | 'grandchild' | 'witch_curse' | 'scholar' | 'charm' | 'red_herring';
  id: string;
  name: string;
}

export const PERIODS = [
  'night0',
  'day1', 'night1',
  'day2', 'night2',
  'day3', 'night3',
  'day4', 'night4',
  'day5', 'night5'
];

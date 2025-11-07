import { Job } from '../types';
// 실제 사용하는 직업, JSON 파일의 내용 복붙
export const JOBS: Job[] = [
  {
    id: '21',
    name: '할머니',
    image: 'https://www.bloodstar.xyz/p/mate234/1/2_1.png',
    team: 'townsfolk',
    ability:
      '당신은 시민 플레이어(손주) 1명과 그의 직업을 알고 시작합니다. 밤에 악마가 손주를 죽이면 당신도 함께 죽습니다.',
    firstNight: 12,
    otherNight: 0,
    firstNightReminder: '할머니를 깨워 손주와 그의 직업을 알려주세요.',
    reminders: ['손주'],
  },
  {
    id: '31',
    name: '요리사',
    image: 'https://www.bloodstar.xyz/p/mate234/1/3_1.png',
    team: 'townsfolk',
    ability: '얼마나 많은 악팀 플레이어가 나란히 앉아있는지 알고 시작합니다.',
    firstNight: 13,
    otherNight: 0,
    firstNightReminder:
      '요리사를 깨워 나란히 앉아있는 악팀 플레이어가 몇 쌍인지 알려주세요',
  },
  {
    id: '41',
    name: '슈겐자',
    image: 'https://www.bloodstar.xyz/p/mate234/1/4_1.png',
    team: 'townsfolk',
    ability:
      '본인과 가장 가까운 악팀이 시계 방향인지 반시계 방향인지 알고 시작합니다. 동일하게 앉아있을시 사회자 재량입니다.',
    firstNight: 14,
    otherNight: 0,
    firstNightReminder: '슈겐자를 깨워 가장 가까운 악팀의 방향을 알려주세요.',
  },
  {
    id: '321',
    name: '웨이크',
    image: 'https://www.bloodstar.xyz/p/mate234/1/32_1.png',
    team: 'townsfolk',
    ability:
      '2명의 플레이어를 선택하세요. 그들 중 오늘 밤 깨어난 플레이어가 몇명인지 알고 시작합니다. ( 깨어난 플레이어 = 오늘 밤 스토리텔러의 전화를 받은 악팀 혹은 시민 플레이어 )',
    firstNight: 0,
    otherNight: 0,
  },
  {
    id: '311',
    name: '가위바위보',
    image: 'https://www.bloodstar.xyz/p/mate234/1/31_1.png',
    team: 'townsfolk',
    ability:
      '딱 한번 낮에, 공개토론 시작과 동시에 스토리텔러에게 가위바위보를 요청하세요. 이긴다면 2가지의 조언을 받게 되고 지더라도 1가지의 조언을 받습니다. 당신의 능력은 게임 초반에 사용해도 되지만 최대한 뒤늦게 사용할수록 스토리텔러의 조언은 강력해집니다',
    firstNight: 0,
    otherNight: 0,
    reminders: ['짐', '이김'],
  },
  {
    id: '291',
    name: '재봉사',
    image: 'https://www.bloodstar.xyz/p/mate234/1/29_1.png',
    team: 'townsfolk',
    ability:
      '게임 중 딱 한번 밤에(본인 제외), 2명의 플레이어를 선택하세요. 그들이 같은 진영인지 알 수 있지만 선한진영인지 악한진영인지는 단정 짓지 마세요.',
    firstNight: 0,
    otherNight: 0,
    reminders: ['사용했음'],
  },
  {
    id: '51',
    name: '예술가',
    image: 'https://www.bloodstar.xyz/p/mate234/1/5_1.png',
    team: 'townsfolk',
    ability:
      '게임 중 딱 한번 낮에, 스토리텔러에게 밀담을 걸어 예/아니오 질문을 할 수 있습니다.',
    firstNight: 0,
    otherNight: 0,
  },
  {
    id: '61',
    name: '교수',
    image: 'https://www.bloodstar.xyz/p/mate234/1/6_1.png',
    team: 'townsfolk',
    ability:
      '게임 중 딱 한번 밤에, 죽은 플레이어중 한명을 선택하세요. 그가 마을 시민이라면 부활하며 그의 능력도 함께 부활합니다. (가위바위보 첫 번째 게임은 제외)',
    firstNight: 0,
    otherNight: 3,
    otherNightReminder:
      '죽어있는 플레이어가 있을시 교수를 깨워 능력을 사용할지 물어보세요.',
  },
  {
    id: '71',
    name: '슬레이어',
    image: 'https://www.bloodstar.xyz/p/mate234/1/7_1.png',
    team: 'townsfolk',
    ability:
      '게임 중 딱 한번 낮에, 공개적으로 플레이어를 선택해 화살을 쏘세요. 그가 악마라면 그는 죽습니다.',
    firstNight: 0,
    otherNight: 0,
    reminders: ['사용했음'],
  },
  {
    id: '81',
    name: '까마귀사육사',
    image: 'https://www.bloodstar.xyz/p/mate234/1/8_1.png',
    team: 'townsfolk',
    ability:
      '밤에 죽고 난 뒤 1명의 플레이어를 선택하세요. 그의 직업을 알 수 있습니다.',
    firstNight: 0,
    otherNight: 0,
  },
  {
    id: '91',
    name: '점쟁이',
    image: 'https://www.bloodstar.xyz/p/mate234/1/9_1.png',
    team: 'townsfolk',
    ability:
      '매일 밤, 2명의 플레이어를 선택 후 악마가 있는지 알게 됩니다. 당신에게 악마로 보이는 시민이(붉은청어) 있습니다.',
    firstNight: 15,
    otherNight: 4,
    firstNightReminder:
      '점쟁이를 깨워 2명의 플레이어를 선택하게 하세요. 악마 혹은 붉은청어를 봅니다',
    otherNightReminder:
      '점쟁이를 깨워 2명의 플레이어를 선택하게 하세요. 악마 혹은 붉은청어를 봅니다',
    reminders: ['붉은청어'],
  },
  {
    id: '101',
    name: '공감능력자',
    image: 'https://www.bloodstar.xyz/p/mate234/1/10_1.png',
    team: 'townsfolk',
    ability:
      '매일 밤, 살아있는 두 이웃 중 얼마나 많은 사람이 악팀인지 알게 됩니다.',
    firstNight: 16,
    otherNight: 5,
    firstNightReminder:
      '공감능력자를 깨워 양 옆의 이웃 중 악팀이 있을 시 숫자로 알려주세요.',
    otherNightReminder:
      '공감능력자를 깨워 양 옆의 이웃 중 악팀이 있을 시 숫자로 알려주세요.',
  },
  {
    id: '111',
    name: '장의사',
    image: 'https://www.bloodstar.xyz/p/mate234/1/11_1.png',
    team: 'townsfolk',
    ability:
      '오늘 낮에 처형으로 사망한 플레이어가 있을시 그의 직업을 알 수 있습니다. 마녀로 사망한 경우는 장의에 해당되지 않습니다. ( 세레노부스 처형, 공주님 처형은 장의값에 해당 )',
    firstNight: 0,
    otherNight: 0,
  },
  {
    id: '121',
    name: '오라클',
    image: 'https://www.bloodstar.xyz/p/mate234/1/12_1.png',
    team: 'townsfolk',
    ability:
      '죽은 플레이어 중 얼마나 많은 악팀이 있는지 알 수 있습니다. 오늘 밤 죽은 플레이어까지 포함 된 값입니다.',
    firstNight: 0,
    otherNight: 6,
    otherNightReminder:
      '같은 날 밤 죽은 플레이어까지 합산 된 악팀을 숫자로 알려주세요',
  },
  {
    id: '131',
    name: '타운크라이어',
    image: 'https://www.bloodstar.xyz/p/mate234/1/13_1.png',
    team: 'townsfolk',
    ability: '매일 밤, 낮에 하수인이 지목 당했는지 알 수 있습니다.',
    firstNight: 0,
    otherNight: 7,
    otherNightReminder: '타운크라이어를 깨워 있습니다,없습니다 로 알려주세요',
  },
  {
    id: '1',
    name: '지니어스',
    image: 'https://www.bloodstar.xyz/p/mate234/1/_1.png',
    team: 'townsfolk',
    ability:
      '매일 밤, 당신은 악팀의 종류를 하나씩 배웁니다. 악마는 지니어스 후보 5명을 알고 있습니다',
    firstNight: 11,
    otherNight: 2,
    firstNightReminder: '지니어스를 깨워 악팀의 종류를 알려주세요.',
    otherNightReminder: '지니어스를 깨워 악팀의 종류를 알려주세요.',
  },
  {
    id: '11',
    name: '각성한 병아리',
    image: 'https://www.bloodstar.xyz/p/mate234/1/1_1.png',
    team: 'townsfolk',
    ability:
      '각성한 병아리는 독을 맞아도 밤에 악마로부터 딱 한번 죽음을 피합니다. 최후의 3인에 당신이 포함돼있고 아무도 처형되지 않으면 시민의 승리이지만 그때는 독을 맞지 않아야 발동됩니다.',
    firstNight: 0,
    otherNight: 0,
    reminders: ['능력없음'],
  },
  {
    id: '251',
    name: '공주님',
    image: 'https://www.bloodstar.xyz/p/mate234/1/25_1.png',
    team: 'townsfolk',
    ability:
      '첫날 밤, 호위무사를 고르세요. 당신이 처형되면 그가 대신 죽습니다. 당신이 독을 맞거나 호위무사가 악팀일시 당신이 죽습니다. 호위무사가 이 마을에 꼭 필요한 직업을 가진 플레이어라면 당신의 능력을 쓰는게 과연 시민에게 좋은것일지 고민하세요.',
    firstNight: 0,
    otherNight: 0,
    reminders: ['호위무사'],
  },
  {
    id: '271',
    name: '힐러',
    image: 'https://www.bloodstar.xyz/p/mate234/1/27_1.png',
    team: 'townsfolk',
    ability:
      '( 첫 날 제외 ) 게임 중 딱 한번 밤에, 3명의 플레이어(본인 가능)를 선택하세요. 오늘 밤 하수인들이 그들에게 걸어놓은 모든 나쁜 증상이 치유되고 스토리텔러는 낮이 되면 치유된 시민과 힐러를 공개적으로 밝힙니다. 당신은 교수와 함께 플레이 중일 수 없습니다.',
    firstNight: 0,
    otherNight: 0,
    reminders: ['치유', '치유'],
  },
  {
    id: '141',
    name: '주정뱅이',
    image: 'https://www.bloodstar.xyz/p/mate234/1/14_1.png',
    team: 'outsider',
    ability:
      '당신은 당신이 주정뱅이라는 사실을 모릅니다. 자신이 마을 주민 캐릭터라고 생각하지만 아닙니다.',
    firstNight: 0,
    otherNight: 0,
    reminders: ['주정뱅이'],
  },
  {
    id: '151',
    name: '성자',
    image: 'https://www.bloodstar.xyz/p/mate234/1/15_1.png',
    team: 'outsider',
    ability: '당신이 낮에 처형으로 사망하면 팀이 패배합니다.',
    firstNight: 0,
    otherNight: 0,
  },
  {
    id: '261',
    name: '역병 의사',
    image: 'https://www.bloodstar.xyz/p/mate234/1/26_1.png',
    team: 'outsider',
    ability:
      '역병 의사가 처형되면 스토리텔러는 오늘 밤부터 이 판의 하수인 능력 중 하나를 얻게 되고 그 능력은 악팀에게 유리하게 사용되도록 합니다.',
    firstNight: 0,
    otherNight: 0,
    reminders: ['독 살', '선 비', '마 녀'],
  },
  {
    id: '171',
    name: '선의의 비판자',
    image: 'https://www.bloodstar.xyz/p/mate234/1/17_1.png',
    team: 'minion',
    ability:
      '매일 밤, 어제밤과 다른 플레이어를 선택하세요. 그 플레이어는 다음날 낮에 투표로 처형돼도 죽지 않습니다. ( 본인, 시민에게도 가능 )',
    firstNight: 17,
    otherNight: 8,
    firstNightReminder:
      '선비를 깨워 본인의 팀과 누구에게 능력을 사용할지 물어보세요.',
    otherNightReminder: '선비를 깨워 누구에게 능력을 사용할지 물어보세요.',
    reminders: ['선 비'],
  },
  {
    id: '181',
    name: '독살범',
    image: 'https://www.bloodstar.xyz/p/mate234/1/18_1.png',
    team: 'minion',
    ability:
      '매일 밤, 플레이어를 선택하세요. 그는 하루동안 능력이 반대로 작동됩니다. (이방인 포함)',
    firstNight: 18,
    otherNight: 9,
    firstNightReminder:
      '독살범을 깨워 본인의 팀과 독을 묻힐 플레이어를 고르게 하세요.',
    otherNightReminder: '독살범을 깨워 독을 묻힐 플레이어를 고르게 하세요.',
    reminders: ['독 살'],
  },
  {
    id: '191',
    name: '마녀',
    image: 'https://www.bloodstar.xyz/p/mate234/1/19_1.png',
    team: 'minion',
    ability:
      '매일 밤, 플레이어를 선택하세요. 그는 내일 지명하면 죽습니다. 플레이어가 3명만 살아있으면 능력을 잃습니다.',
    firstNight: 19,
    otherNight: 10,
    firstNightReminder: '마녀를 깨워 본인의 팀과 플레이어를 고르게 하세요.',
    otherNightReminder: '마녀를 깨워 플레이어를 고르게 하세요.',
    reminders: ['마 녀'],
  },
  {
    id: '201',
    name: '스칼렛 우먼',
    image: 'https://www.bloodstar.xyz/p/mate234/1/20_1.png',
    team: 'minion',
    ability:
      '5명 이상의 플레이어가 살아있고 악마가 죽으면 당신이 악마가 됩니다.',
    firstNight: 20,
    otherNight: 0,
    firstNightReminder: '스칼렛우먼을 깨워 본인의 팀을 알려주세요',
  },
  {
    id: '211',
    name: '스파이',
    image: 'https://www.bloodstar.xyz/p/mate234/1/21_1.png',
    team: 'minion',
    ability:
      '당신은 마을 시민들의 직업 몇가지를 알고 시작합니다. 당신은 살아있거나 죽었어도 조사직에 시민으로 정보가 들어갑니다. ( 사회자 재량이기 때문에 병아리사회 한정으로는 무조건 시민으로 정보줍니다 )',
    firstNight: 21,
    otherNight: 0,
    firstNightReminder:
      '스파이를 깨워 본인의 팀과 시민 직업 절반을 알려주세요.',
  },
  {
    id: '281',
    name: '폭탄마',
    image: 'https://www.bloodstar.xyz/p/mate234/1/28_1.png',
    team: 'minion',
    ability:
      '당신은 첫 번째 밤부터 총 3번의 폭탄을 설치합니다. 4번째 밤이 찾아올때까지 당신이 살아있다면 폭탄이 설치 된 모든 플레이어가 그 날 죽습니다.',
    firstNight: 0,
    otherNight: 0,
    reminders: ['설 치', '설 치', '설 치'],
  },
  {
    id: '161',
    name: '세레노부스',
    image: 'https://www.bloodstar.xyz/p/mate234/1/16_1.png',
    team: 'minion',
    ability:
      '매일 밤, 플레이어와 선한 캐릭터를 고르세요. 본인과 악팀에게도 가능하며 그 플레이어는 내일 밀담+공개토론 시간에 그 캐릭터를 연기해야 합니다. 그가 발설하거나 성의없는 앵무새 연기를 할 경우, 혹은 소극적인 플레이를 할 경우 즉시 처형되며 밤이 찾아옵니다.',
    firstNight: 0,
    otherNight: 0,
    reminders: ['연 기'],
  },
  {
    id: '301',
    name: '고스트',
    image: 'https://www.bloodstar.xyz/p/mate234/1/30_1.png',
    team: 'minion',
    ability:
      '고스트는 첫 날밤 자신의 팀과 1:1로 만나게 되고 두 번째 밤부터는 모든 약팀을 함께 깨웁니다. 악마와 하수인들은 각자 수집한 정보와 자신들의 능력을 누구에게 사용할 것인지 그리고 누구를 죽일 것인지 이 자리에서 다 함께 회의하세요.',
    firstNight: 0,
    otherNight: 0,
  },
  {
    id: '231',
    name: '비고모르티스',
    image: 'https://www.bloodstar.xyz/p/mate234/1/23_1.png',
    team: 'demon',
    ability:
      '매일 밤, 플레이어를 선택하세요. 그는 죽습니다. 당신이 죽인 하수인은 매일 밤 능력을 유지하고 그 하수인의 양 옆에 앉아있는 마을 시민 중 1명은 중독 상태가 됩니다. ( 이미 죽어있는 시민이어도 무조건 양 옆에 앉아있는 시민 중 1명이 중독 ) -1 이방인',
    firstNight: 22,
    otherNight: 11,
    firstNightReminder:
      '비고모르티스를 깨워 하수인 위치와 블러핑 직업을 알려주세요.',
    otherNightReminder: '비고모르티스를 깨워 킬할 플레이어를 고르게 하세요.',
    reminders: ['중 독', '중 독'],
  },
  {
    id: '241',
    name: '포',
    image: 'https://www.bloodstar.xyz/p/mate234/1/24_1.png',
    team: 'demon',
    ability:
      '매일 밤, 플레이어를 선택하세요. 그는 죽습니다. 어젯 밤 아무도 죽이지 않았다면 오늘 밤 3명의 플레이어를 죽일 수 있습니다. 딱 한번.',
    firstNight: 23,
    otherNight: 12,
    firstNightReminder: '포를 깨워 하수인 위치와 블러핑 직업을 알려주세요.',
    otherNightReminder: '포를 깨워 킬할 플레이어를 고르게 하세요.',
  },
  {
    id: '221',
    name: '팡 키',
    image: 'https://www.bloodstar.xyz/p/mate234/1/22_1.png',
    team: 'demon',
    ability:
      '매일 밤, 플레이어를 선택하세요. 그는 죽습니다. 팡키는 제일 먼저 전화를 받아 하수인의 종류를 직접 고르며 스토리텔러에게 받은 블러핑 직업을 특정 하수인에게 모두 지정 할 수 있습니다.',
    firstNight: 0,
    otherNight: 0,
  },
  {
    id: '331',
    name: '노다시',
    image: 'https://www.bloodstar.xyz/p/mate234/1/33_1.png',
    team: 'demon',
    ability:
      '매일 밤, 플레이어를 선택하세요. 그는 죽습니다. 당신과 가장 가까운 양 옆 마을주민은 중독상태가 됩니다. 이 중독은 옮겨가지 않으며 하수인과 이방인은 건너뜁니다.',
    firstNight: 0,
    otherNight: 0,
    reminders: ['중독', '중독'],
  },
];

import { Job } from '../types';

export const JOBS: Job[] = [
  {
    id: '21',
    name: '할머니',
    image: 'https://www.bloodstar.xyz/p/mate234/1/2_1.png',
    ability:
      '당신은 시민 플레이어(손주) 1명과 그의 직업을 알고 시작합니다. 밤에 악마가 손주를 죽이면 당신도 함께 죽습니다.',
    firstNight: 12,
    firstNightReminder: '할머니를 깨워 손주와 그의 직업을 알려주세요.',
    reminders: ['손주'],
    team: 'townsfolk',
  },
  {
    id: '31',
    name: '요리사',
    image: 'https://www.bloodstar.xyz/p/mate234/1/3_1.png',
    ability: '얼마나 많은 악팀 플레이어가 나란히 앉아있는지 알고 시작합니다.',
    firstNight: 13,
    firstNightReminder:
      '요리사를 깨워 나란히 앉아있는 악팀 플레이어가 몇 쌍인지 알려주세요',
    team: 'townsfolk',
  },
  {
    id: '41',
    name: '슈겐자',
    image: 'https://www.bloodstar.xyz/p/mate234/1/4_1.png',
    ability:
      '본인과 가장 가까운 악팀이 시계 방향인지 반시계 방향인지 알고 시작합니다. 동일하게 앉아있을시 사회자 재량입니다.',
    firstNight: 14,
    firstNightReminder: '슈겐자를 깨워 가장 가까운 악팀의 방향을 알려주세요.',
    team: 'townsfolk',
  },
  {
    id: '321',
    name: '웨이크',
    image: 'https://www.bloodstar.xyz/p/mate234/1/32_1.png',
    ability:
      '2명의 플레이어를 선택하세요. 그들 중 오늘 밤 깨어난 플레이어가 몇명인지 알고 시작합니다. ( 깨어난 플레이어 = 오늘 밤 스토리텔러의 전화를 받은 악팀 혹은 시민 플레이어 )',
    team: 'townsfolk',
  },
  {
    id: '311',
    name: '가위바위보',
    image: 'https://www.bloodstar.xyz/p/mate234/1/31_1.png',
    ability:
      '첫날 밤, 스토리텔러와 가장 먼저 소통해 가위바위보를 합니다. 당신이 지면 하수인들은 특정 블러핑 직업을 받게 되며 악마도 그 사실을 압니다. 당신 포함 6명 이하의 플레이어가 남았을때 공개적으로 두번째 가위바위보를 요청해 이기면 오늘 밤 원하는 플레이어 1명의 직업을 알게 되며 악마는 오늘 밤 당신을 죽일 수 없습니다.',
    reminders: ['짐', '이김'],
    team: 'townsfolk',
  },
  {
    id: '291',
    name: '재봉사',
    image: 'https://www.bloodstar.xyz/p/mate234/1/29_1.png',
    ability:
      '게임 중 딱 한번 밤에(본인 제외), 2명의 플레이어를 선택하세요. 그들이 같은 진영인지 알 수 있지만 시민진영인지 악한진영인지는 단정 짓지 마세요.',
    reminders: ['사용했음'],
    team: 'townsfolk',
  },
  {
    id: '51',
    name: '예술가',
    image: 'https://www.bloodstar.xyz/p/mate234/1/5_1.png',
    ability:
      '게임 중 딱 한번 낮에, 스토리텔러에게 밀담을 걸어 예/아니오 질문을 할 수 있습니다.',
    team: 'townsfolk',
  },
  {
    id: '61',
    name: '교수',
    image: 'https://www.bloodstar.xyz/p/mate234/1/6_1.png',
    ability:
      '게임 중 딱 한번 밤에, 죽은 플레이어중 한명을 선택하세요. 그가 마을 시민이라면 부활하며 그의 능력도 함께 부활합니다. (가위바위보 첫 번째 게임은 제외)',
    otherNight: 3,
    otherNightReminder:
      '죽어있는 플레이어가 있을시 교수를 깨워 능력을 사용할지 물어보세요.',
    team: 'townsfolk',
  },
  {
    id: '71',
    name: '슬레이어',
    image: 'https://www.bloodstar.xyz/p/mate234/1/7_1.png',
    ability:
      '게임 중 딱 한번 낮에, 공개적으로 플레이어를 선택해 화살을 쏘세요. 그가 악마라면 그는 죽습니다.',
    reminders: ['사용했음'],
    team: 'townsfolk',
  },
  {
    id: '81',
    name: '까마귀사육사',
    image: 'https://www.bloodstar.xyz/p/mate234/1/8_1.png',
    ability:
      '밤에 죽고 난 뒤 1명의 플레이어를 선택하세요. 그의 직업을 알 수 있습니다.',
    team: 'townsfolk',
  },
  {
    id: '91',
    name: '점쟁이',
    image: 'https://www.bloodstar.xyz/p/mate234/1/9_1.png',
    ability:
      '매일 밤, 2명의 플레이어를 선택 후 악마가 있는지 알게 됩니다. 당신에게 악마로 보이는 시민이(붉은청어) 있습니다.',
    firstNight: 15,
    firstNightReminder:
      '점쟁이를 깨워 2명의 플레이어를 선택하게 하세요. 악마 혹은 붉은청어를 봅니다',
    otherNight: 4,
    otherNightReminder:
      '점쟁이를 깨워 2명의 플레이어를 선택하게 하세요. 악마 혹은 붉은청어를 봅니다',
    reminders: ['붉은청어'],
    team: 'townsfolk',
  },
  {
    id: '101',
    name: '공감능력자',
    image: 'https://www.bloodstar.xyz/p/mate234/1/10_1.png',
    ability:
      '매일 밤, 살아있는 두 이웃 중 얼마나 많은 사람이 악팀인지 알게 됩니다.',
    firstNight: 16,
    firstNightReminder:
      '공감능력자를 깨워 양 옆의 이웃 중 악팀이 있을 시 숫자로 알려주세요.',
    otherNight: 5,
    otherNightReminder:
      '공감능력자를 깨워 양 옆의 이웃 중 악팀이 있을 시 숫자로 알려주세요.',
    team: 'townsfolk',
  },
  {
    id: '111',
    name: '장의사',
    image: 'https://www.bloodstar.xyz/p/mate234/1/11_1.png',
    ability:
      '오늘 낮에 처형으로 사망한 플레이어가 있을시 그의 직업을 알 수 있습니다. 마녀로 사망한 경우는 장의에 해당되지 않습니다.',
    team: 'townsfolk',
  },
  {
    id: '121',
    name: '오라클',
    image: 'https://www.bloodstar.xyz/p/mate234/1/12_1.png',
    ability:
      '죽은 플레이어 중(오늘 밤 죽은 사람 포함) 얼마나 많은 악팀이 있는지 알 수 있습니다.',
    otherNight: 6,
    otherNightReminder:
      '같은 날 밤 죽은 플레이어까지 합산 된 악팀을 숫자로 알려주세요',
    team: 'townsfolk',
  },
  {
    id: '131',
    name: '타운크라이어',
    image: 'https://www.bloodstar.xyz/p/mate234/1/13_1.png',
    ability: '매일 밤, 낮에 하수인이 지목 당했는지 알 수 있습니다.',
    otherNight: 7,
    otherNightReminder: '타운크라이어를 깨워 있습니다,없습니다 로 알려주세요',
    team: 'townsfolk',
  },
  {
    id: '1',
    name: '지니어스',
    image: 'https://www.bloodstar.xyz/p/mate234/1/_1.png',
    ability:
      '매일 밤, 당신은 악팀의 종류를 하나씩 배웁니다. 악마는 지니어스 후보 5명을 알고 있습니다',
    firstNight: 11,
    firstNightReminder: '지니어스를 깨워 악팀의 종류를 알려주세요.',
    otherNight: 2,
    otherNightReminder: '지니어스를 깨워 악팀의 종류를 알려주세요.',
    team: 'townsfolk',
  },
  {
    id: '11',
    name: '각성한 병아리',
    image: 'https://www.bloodstar.xyz/p/mate234/1/1_1.png',
    ability:
      '각성한 병아리는 독을 맞아도 밤에 악마로부터 딱 한번 죽음을 피합니다. 최후의 3인에 당신이 포함돼있고 아무도 처형되지 않으면 시민의 승리이지만 그때는 독을 맞지 않아야 발동됩니다.',
    reminders: ['능력없음'],
    team: 'townsfolk',
  },
  {
    id: '251',
    name: '공주님',
    image: 'https://www.bloodstar.xyz/p/mate234/1/25_1.png',
    ability:
      '공주님은 처형 대상이 되면 딱 한번, 본인 대신 죽어줄 호위무사를 지목합니다. 그는 거절 할 수 있으나 공주님은 다른 호위무사를 다시 지목해야하며 그는 즉시 처형됩니다.',
    reminders: ['사용했음'],
    team: 'townsfolk',
  },
  {
    id: '271',
    name: '힐러',
    image: 'https://www.bloodstar.xyz/p/mate234/1/27_1.png',
    ability:
      '(첫 날 제외) 게임 중 딱 한번 밤에, 3명의 플레이어(본인 가능)를 선택하세요. 오늘 밤 하수인들이 그들에게 걸어놓은 모든 나쁜 증상이 치유되고 스토리텔러는 낮이 되면 치유된 시민과 힐러를 공개적으로 밝힙니다. 당신은 교수와 함께 플레이 중일 수 없습니다.',
    reminders: ['치유', '치유'],
    team: 'townsfolk',
  },
  {
    id: '141',
    name: '주정뱅이',
    image: 'https://www.bloodstar.xyz/p/mate234/1/14_1.png',
    ability:
      '당신은 당신이 주정뱅이라는 사실을 모릅니다. 자신이 마을 주민 캐릭터라고 생각하지만 아닙니다.',
    reminders: ['주정뱅이'],
    team: 'outsider',
  },
  {
    id: '151',
    name: '성자',
    image: 'https://www.bloodstar.xyz/p/mate234/1/15_1.png',
    ability: '당신이 낮에 처형으로 사망하면 팀이 패배합니다.',
    team: 'outsider',
  },
  {
    id: '261',
    name: '역병 의사',
    image: 'https://www.bloodstar.xyz/p/mate234/1/26_1.png',
    ability:
      '역병 의사가 처형되면 스토리텔러는 오늘 밤부터 이 판의 하수인 능력 중 하나를 얻게 되고 그 능력은 악팀에게 유리하게 사용되도록 합니다.',
    reminders: ['독 살', '선 비', '마 녀'],
    team: 'outsider',
  },
  {
    id: '171',
    name: '선의의 비판자',
    image: 'https://www.bloodstar.xyz/p/mate234/1/17_1.png',
    ability:
      '매일 밤, 어제밤과 다른 플레이어를 선택하세요. 그 플레이어는 다음날 낮에 투표로 처형돼도 죽지 않습니다. (본인,시민에게도 가능)',
    firstNight: 17,
    firstNightReminder:
      '선비를 깨워 본인의 팀과 누구에게 능력을 사용할지 물어보세요.',
    otherNight: 8,
    otherNightReminder: '선비를 깨워 누구에게 능력을 사용할지 물어보세요.',
    reminders: ['선 비'],
    team: 'minion',
  },
  {
    id: '181',
    name: '독살범',
    image: 'https://www.bloodstar.xyz/p/mate234/1/18_1.png',
    ability:
      '매일 밤, 플레이어를 선택하세요. 그는 하루동안 능력이 반대로 작동됩니다. (이방인 포함)',
    firstNight: 18,
    firstNightReminder:
      '독살범을 깨워 본인의 팀과 독을 묻힐 플레이어를 고르게 하세요.',
    otherNight: 9,
    otherNightReminder: '독살범을 깨워 독을 묻힐 플레이어를 고르게 하세요.',
    reminders: ['독 살'],
    team: 'minion',
  },
  {
    id: '191',
    name: '마녀',
    image: 'https://www.bloodstar.xyz/p/mate234/1/19_1.png',
    ability:
      '매일 밤, 플레이어를 선택하세요. 그는 내일 지명하면 죽습니다. 플레이어가 3명만 살아있으면 능력을 잃습니다.',
    firstNight: 19,
    firstNightReminder: '마녀를 깨워 본인의 팀과 플레이어를 고르게 하세요.',
    otherNight: 10,
    otherNightReminder: '마녀를 깨워 플레이어를 고르게 하세요.',
    reminders: ['마 녀'],
    team: 'minion',
  },
  {
    id: '201',
    name: '스칼렛 우먼',
    image: 'https://www.bloodstar.xyz/p/mate234/1/20_1.png',
    ability:
      '5명 이상의 플레이어가 살아있고 악마가 죽으면 당신이 악마가 됩니다.',
    firstNight: 20,
    firstNightReminder: '스칼렛우먼을 깨워 본인의 팀을 알려주세요',
    team: 'minion',
  },
  {
    id: '211',
    name: '스파이',
    image: 'https://www.bloodstar.xyz/p/mate234/1/21_1.png',
    ability:
      '당신은 마을 시민들의 직업 몇가지를 알고 시작합니다. 당신은 살아있거나 죽었어도 조사직에 시민으로 정보가 들어갑니다.',
    firstNight: 21,
    firstNightReminder:
      '스파이를 깨워 본인의 팀과 시민 직업 절반을 알려주세요.',
    team: 'minion',
  },
  {
    id: '281',
    name: '폭탄마',
    image: 'https://www.bloodstar.xyz/p/mate234/1/28_1.png',
    ability:
      '당신은 첫 번째 밤부터 총 3번의 폭탄을 설치합니다. 4번째 밤이 찾아올때까지 당신이 살아있다면 폭탄이 설치 된 모든 플레이어가 그 날 죽습니다.',
    reminders: ['설 치', '설 치', '설 치'],
    team: 'minion',
  },
  {
    id: '161',
    name: '세레노부스',
    image: 'https://www.bloodstar.xyz/p/mate234/1/16_1.png',
    ability:
      '매일 밤, (본인 제외)플레이어와 선한 캐릭터를 고르세요. 그 플레이어는 내일 밀담+공개토론 시간에 그 캐릭터를 연기해야 합니다. 그가 거부하고 발설하거나 성의없는 앵무새 연기를 할 경우 즉시 처형되며 밤이 찾아옵니다. (장의사값 들어감)',
    reminders: ['연 기'],
    team: 'minion',
  },
  {
    id: '231',
    name: '비고모르티스',
    image: 'https://www.bloodstar.xyz/p/mate234/1/23_1.png',
    ability:
      '매일 밤, 플레이어를 선택하세요. 그는 죽습니다. 당신이 죽인 하수인은 능력을 유지하고 그 하수인의 양 옆에 앉아있는 마을 주민 중 1명은 중독 상태가 됩니다.(죽은 시민이어도 상관없이 중독) (-1 이방인)',
    firstNight: 22,
    firstNightReminder:
      '비고모르티스를 깨워 하수인 위치와 블러핑 직업을 알려주세요.',
    otherNight: 11,
    otherNightReminder: '비고모르티스를 깨워 킬할 플레이어를 고르게 하세요.',
    reminders: ['중 독', '중 독'],
    team: 'demon',
  },
  {
    id: '241',
    name: '포',
    image: 'https://www.bloodstar.xyz/p/mate234/1/24_1.png',
    ability:
      '매일 밤, 플레이어를 선택하세요. 그는 죽습니다. 어젯 밤 아무도 죽이지 않았다면 오늘 밤 3명의 플레이어를 죽일 수 있습니다. 딱 한번.',
    firstNight: 23,
    firstNightReminder: '포를 깨워 하수인 위치와 블러핑 직업을 알려주세요.',
    otherNight: 12,
    otherNightReminder: '포를 깨워 킬할 플레이어를 고르게 하세요.',
    team: 'demon',
  },
  {
    id: '221',
    name: '팡 키',
    image: 'https://www.bloodstar.xyz/p/mate234/1/22_1.png',
    ability:
      '매일 밤, 플레이어를 선택하세요. 그는 죽습니다. 당신 포함 5명의 플레이어가 살아있고 당신이 처형되면 그날 밤부터 모든 하수인이 능력을 잃는 대신 당신은 새 팡키를 고릅니다. 하수인은 새팡키를 알게 되며 당신이 새 팡키로 성자를 고를 경우 악팀의 패배입니다.',
    reminders: ['매 혹', '새 팡 키'],
    team: 'demon',
  },
];

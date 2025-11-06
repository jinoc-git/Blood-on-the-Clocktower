// 사용하지 않음
const JOBS = [
  // 마을 주민 (Villagers)
  {
    id: 'grandmother',
    name: '할머니',
    category: 'villager',
    description:
      '당신은 시민 플레이어(손주) 1명과 그의 직업을 알고 시작합니다. 밤에 악마가 손주를 죽이면 당신도 함께 죽습니다.',
    abilities: { timing: 'night0', frequency: 'once' },
    image: '/jobs/grandmother.png',
  },
  {
    id: 'chef',
    name: '요리사',
    category: 'villager',
    description:
      '얼마나 많은 악팀 플레이어가 나란히 앉아있는지 알고 시작합니다.',
    abilities: { timing: 'night0', frequency: 'once' },
    image: '/jobs/chef.png',
  },
  {
    id: 'investigator',
    name: '슈겐자',
    category: 'villager',
    description:
      '본인과 가장 가까운 악팀이 시계 방향인지 반시계 방향인지 알고 시작합니다. 동일하게 앉아있을시 사회자 재량입니다.',
    abilities: { timing: 'night0', frequency: 'once' },
    image: '/jobs/investigator.png',
  },
  {
    id: 'seamstress',
    name: '재봉사',
    category: 'villager',
    description:
      '게임 중 딱 한번 밤에(본인 제외), 2명의 플레이어를 선택하세요. 그들이 같은 진영인지 알 수 있지만 시민진영인지 악한진영인지는 단정 짓지 마세요.',
    abilities: { timing: 'once_night', frequency: 'once' },
    image: '/jobs/seamstress.png',
  },
  {
    id: 'artist',
    name: '예술가',
    category: 'villager',
    description:
      '게임 중 딱 한번 낮에, 스토리텔러에게 밀담을 걸어 예/아니오 질문을 할 수 있습니다.',
    abilities: { timing: 'once_day', frequency: 'once' },
    image: '/jobs/artist.png',
  },
  {
    id: 'professor',
    name: '교수',
    category: 'villager',
    description:
      '게임 중 딱 한번 밤에, 죽은 플레이어중 한명을 선택하세요. 그가 마을 시민이라면 부활합니다.',
    abilities: { timing: 'once_night', frequency: 'once' },
    image: '/jobs/professor.png',
  },
  {
    id: 'slayer',
    name: '슬레이어',
    category: 'villager',
    description:
      '게임 중 딱 한번 낮에, 공개적으로 플레이어를 선택해 화살을 쏘세요. 그가 악마라면 그는 죽습니다.',
    abilities: { timing: 'once_day', frequency: 'once' },
    image: '/jobs/slayer.png',
  },
  {
    id: 'ravenkeeper',
    name: '까마귀사육사',
    category: 'villager',
    description:
      '밤에 죽고 난 뒤 1명의 플레이어를 선택하세요. 그의 직업을 알 수 있습니다.',
    abilities: { timing: 'death', frequency: 'once' },
    image: '/jobs/ravenkeeper.png',
  },
  {
    id: 'fortune_teller',
    name: '점쟁이',
    category: 'villager',
    description:
      '매일 밤, 2명의 플레이어를 선택 후 악마가 있는지 알게 됩니다. 당신에게 악마로 보이는 시민이(붉은청어) 있습니다.',
    abilities: { timing: 'night', frequency: 'nightly' },
    image: '/jobs/fortune_teller.png',
  },
  {
    id: 'empath',
    name: '공감능력자',
    category: 'villager',
    description:
      '매일 밤, 살아있는 두 이웃 중 얼마나 많은 사람이 악팀인지 알게 됩니다.',
    abilities: { timing: 'night', frequency: 'nightly' },
    image: '/jobs/empath.png',
  },
  {
    id: 'undertaker',
    name: '장의사',
    category: 'villager',
    description:
      '오늘 낮에 처형으로 사망한 플레이어가 있을 시 그의 직업을 알 수 있습니다. 마녀로 사망한 경우는 장의에 해당되지 않습니다.',
    abilities: { timing: 'night', frequency: 'nightly' },
    image: '/jobs/undertaker.png',
  },
  {
    id: 'oracle',
    name: '오라클',
    category: 'villager',
    description:
      '죽은 플레이어 중(낮에 처형 + 오늘 밤 죽은 사람 포함) 얼마나 많은 악팀이 있는지 알 수 있습니다.',
    abilities: { timing: 'night', frequency: 'nightly' },
    image: '/jobs/oracle.png',
  },
  {
    id: 'town_crier',
    name: '타운크라이어',
    category: 'villager',
    description: '매일 밤, 낮에 하수인이 지목 당했는지 알 수 있습니다.',
    abilities: { timing: 'night', frequency: 'nightly' },
    image: '/jobs/town_crier.png',
  },
  {
    id: 'genius',
    name: '지니어스',
    category: 'villager',
    description:
      '매일 밤, 당신은 악팀의 종류를 하나씩 배웁니다. 악마는 지니어스 후보 5명을 알고 있습니다',
    abilities: { timing: 'night', frequency: 'nightly' },
    image: '/jobs/genius.png',
  },
  {
    id: 'washerwoman',
    name: '각성한 병아리',
    category: 'villager',
    description:
      '각성한 병아리는 독을 맞아도 밤에 악마로부터 딱 한번 죽음을 피합니다. 최후의 3인에 당신이 포함돼있고 아무도 처형되지 않으면 시민의 승리이지만 그때는 독을 맞지 않아야 발동됩니다.',
    abilities: { timing: 'passive', frequency: 'special' },
    image: '/jobs/washerwoman.png',
  },
  {
    id: 'princess',
    name: '공주님',
    category: 'villager',
    description:
      '공주님은 처형 대상이 되면 딱 한번, 본인 대신 죽어줄 호위무사를 지목합니다. 그는 거절 할 수 있으나 공주님은 다른 호위무사를 다시 지목해야하며 그는 즉시 처형됩니다.',
    abilities: { timing: 'day', frequency: 'special' },
    image: '/jobs/princess.png',
  },
  {
    id: 'healer',
    name: '힐러',
    category: 'villager',
    description:
      '게임 중 딱 한번 밤에, 본인을 제외한 두 명의 플레이어를 선택하세요(첫 날 제외) 오늘 밤 하수인들이 그들에게 걸어놓은 모든 나쁜 증상이 치유되고 스토리텔러는 낮이 되면 공개적으로 힐러와 치유 된 시민을 밝힙니다. 당신은 교수와 함께 플레이 중일 수 없습니다.',
    abilities: { timing: 'once_night', frequency: 'once' },
    image: '/jobs/healer.png',
  },

  // 이방인 (Outsiders)
  {
    id: 'drunk',
    name: '주정뱅이',
    category: 'outsider',
    description:
      '당신은 당신이 주정뱅이라는 사실을 모릅니다. 자신이 마을 주민 캐릭터라고 생각하지만 아닙니다.',
    abilities: { timing: 'passive', frequency: 'special' },
    image: '/jobs/drunk.png',
  },
  {
    id: 'saint',
    name: '성자',
    category: 'outsider',
    description: '당신이 낮에 처형으로 사망하면 팀이 패배합니다.',
    abilities: { timing: 'passive', frequency: 'special' },
    image: '/jobs/saint.png',
  },
  {
    id: 'plague_doctor',
    name: '역병 의사',
    category: 'outsider',
    description:
      '역병 의사가 처형되면 스토리텔러는 오늘 밤부터 이 판의 하수인 능력 중 하나를 얻게 되고 그 능력은 악팀에게 유리하게 사용되도록 합니다.',
    abilities: { timing: 'passive', frequency: 'special' },
    image: '/jobs/plague_doctor.png',
  },

  // 하수인 (Minions)
  {
    id: 'devils_advocate',
    name: '선의의 비판자',
    category: 'minion',
    description:
      '매일 밤, 어제밤과 다른 플레이어를 선택하세요. 그 플레이어는 다음날 낮에 투표로 처형돼도 죽지 않습니다. (본인,시민에게도 가능)',
    abilities: { timing: 'night', frequency: 'nightly' },
    image: '/jobs/devils_advocate.png',
  },
  {
    id: 'poisoner',
    name: '독살범',
    category: 'minion',
    description:
      '매일 밤, 플레이어를 선택하세요. 그는 하루동안 능력이 반대로 작동됩니다. (이방인 포함)',
    abilities: { timing: 'night', frequency: 'nightly' },
    image: '/jobs/poisoner.png',
  },
  {
    id: 'witch',
    name: '마녀',
    category: 'minion',
    description:
      '매일 밤, 플레이어를 선택하세요. 그는 내일 지명하면 죽습니다. 플레이어가 3명만 살아있으면 능력을 잃습니다.',
    abilities: { timing: 'night', frequency: 'nightly' },
    image: '/jobs/witch.png',
  },
  {
    id: 'scarlet_woman',
    name: '스칼렛 우먼',
    category: 'minion',
    description:
      '5명 이상의 플레이어가 살아있고 악마가 죽으면 당신이 악마가 됩니다.',
    abilities: { timing: 'passive', frequency: 'special' },
    image: '/jobs/scarlet_woman.png',
  },
  {
    id: 'spy',
    name: '스파이',
    category: 'minion',
    description:
      '당신은 마을 시민들의 직업 몇가지를 알고 시작합니다. 당신은 살아있거나 죽었어도 조사직에 시민으로 정보가 들어갑니다.',
    abilities: { timing: 'night0', frequency: 'special' },
    image: '/jobs/spy.png',
  },
  {
    id: 'bomber',
    name: '폭탄마',
    category: 'minion',
    description:
      '당신은 첫 번째 밤부터 총 3번의 폭탄을 설치합니다. 4번째 밤이 찾아올때까지 당신이 살아있다면 폭탄이 설치 된 모든 플레이어가 그 날 죽습니다.',
    abilities: { timing: 'night', frequency: 'special' },
    image: '/jobs/bomber.png',
  },
  {
    id: 'cerenovus',
    name: '세레노부스',
    category: 'minion',
    description:
      '매일 밤, (본인 제외)플레이어와 선한 캐릭터를 고르세요. 그 플레이어는 내일 밀담+공개토론 시간에 그 캐릭터를 연기해야 합니다. 그가 거부하고 발설하거나 성의없는 앵무새 연기를 할 경우 즉시 처형되며 밤이 찾아옵니다. (장의사값 들어감)',
    abilities: { timing: 'night', frequency: 'nightly' },
    image: '/jobs/cerenovus.png',
  },

  // 악마 (Demons)
  {
    id: 'vigormortis',
    name: '비고모르티스',
    category: 'demon',
    description:
      '매일 밤, 플레이어를 선택하세요. 그는 죽습니다. 당신이 죽인 하수인은 능력을 유지하고 그 하수인의 양 옆에 앉아있는 마을 주민 중 1명은 중독 상태가 됩니다.(죽은 시민이어도 상관없이 중독) (-1 이방인)',
    abilities: { timing: 'night', frequency: 'nightly' },
    image: '/jobs/vigormortis.png',
  },
  {
    id: 'po',
    name: '포',
    category: 'demon',
    description:
      '매일 밤, 플레이어를 선택하세요. 그는 죽습니다. 어젯 밤 아무도 죽이지 않았다면 오늘 밤 3명의 플레이어를 죽일 수 있습니다. 딱 한번.',
    abilities: { timing: 'night', frequency: 'nightly' },
    image: '/jobs/po.png',
  },
  {
    id: 'fang_gu',
    name: '팡키',
    category: 'demon',
    description:
      '매일 밤, 플레이어를 선택하세요. 그는 죽습니다. 당신 포함 5명의 플레이어가 살아있고 당신이 처형되면 그날 밤부터 모든 하수인이 능력을 잃는 대신 당신은 새 팡키를 고릅니다. 하수인은 새팡키를 알게 되며 당신이 새 팡키로 성자를 고를 경우 악팀의 패배입니다.',
    abilities: { timing: 'night', frequency: 'nightly' },
    image: '/jobs/fang_gu.png',
  },
];

import { Job } from '../types';
// 실제 사용하는 직업, JSON 파일의 내용 복붙
export const JOBS: Job[] = [
  {
    id: 'chef1',
    name: '요리사',
    image: [
      'https://botc.app/assets/chef_g-C3a3cGeP.webp',
      'https://botc.app/assets/chef_e-B3RO5GXN.webp',
    ],
    team: 'townsfolk',
    ability:
      '얼마나 많은 악한 플레이어의 쌍이 있는지 알고 시작합니다. (3명이 붙어있으면 2쌍, 4명이 붙어있으면 3쌍입니다.)',
    firstNight: 11,
    otherNight: 0,
    firstNightReminder:
      '악한 참가자가 총 몇 쌍으로 인접했는지 숫자로 알려주세요.',
  },
  {
    id: 'grandmother1',
    name: '할머니',
    image: [
      'https://botc.app/assets/grandmother_g-CjEyeFLi.webp',
      'https://botc.app/assets/grandmother_e-BLCIA5TL.webp',
    ],
    team: 'townsfolk',
    ability:
      '선한 플레이어(손주) 1명과 그 캐릭터를 알고 시작합니다. 악마가 해당 플레이어를 죽이면 당신도 죽습니다.',
    firstNight: 15,
    otherNight: 16,
    firstNightReminder: '선한 플레이어 1명과 그 캐릭터를 알려주세요.',
    otherNightReminder: '손주 플레이어가 죽으면, 할머니도 죽습니다.',
    reminders: ['죽음', '손주'],
  },
  {
    id: 'shugenja1',
    name: '슈겐자',
    image: [
      'https://botc.app/assets/shugenja_g-DAlTPOOn.webp',
      'https://botc.app/assets/shugenja_e-DQCYsHfD.webp',
    ],
    team: 'townsfolk',
    ability:
      '가장 가까운 악한 플레이어가 시계 방향인지 반시계 방향인지 알고 시작합니다. 거리가 같다면 이 정보는 임의적입니다.',
    firstNight: 17,
    otherNight: 0,
    firstNightReminder:
      '가장 가까운 악한 플레이어가 시계 방향인지 반시계 방향인지 알려줍니다.',
  },
  {
    id: 'wake1',
    name: '웨이크',
    image: 'https://www.bloodstar.xyz/p/mate234/1/32_1.png',
    team: 'townsfolk',
    ability:
      '2명의 플레이어를 선택하세요. 그들 중 오늘 밤 깨어난 플레이어가 몇명인지 알고 시작합니다. ( 깨어난 플레이어 = 오늘 밤 스토리텔러에게 밤편지를 받은 악팀 혹은 시민 플레이어 )',
    firstNight: 0,
    otherNight: 0,
  },
  {
    id: 'fortuneteller1',
    name: '점쟁이',
    image: [
      'https://botc.app/assets/fortuneteller_g-lQQzYvkg.webp',
      'https://botc.app/assets/fortuneteller_e-BWljoXp7.webp',
    ],
    team: 'townsfolk',
    ability:
      '매일 밤, 플레이어 2명을 선택합니다. 그중 악마가 있는지 알게 됩니다. 당신에게 악마로 보이는 선한 플레이어(붉은청어)가 1명 있습니다.',
    firstNight: 14,
    otherNight: 20,
    firstNightReminder:
      '플레이어 2명을 선택하게 합니다. 그중 악마나 붉은 청어가 있다면 이를 알려줍니다.',
    otherNightReminder:
      '플레이어 2명을 선택하게 합니다. 그중 악마나 붉은 청어가 있다면 이를 알려줍니다.',
    reminders: ['붉은 청어'],
  },
  {
    id: 'empath1',
    name: '공감능력자',
    image: [
      'https://botc.app/assets/empath_g-vVEkU0cf.webp',
      'https://botc.app/assets/empath_e-CWeYvCJ9.webp',
    ],
    team: 'townsfolk',
    ability:
      '매일 밤, 살아있는 양 옆의 플레이어 중 몇 명이 악한 진영인지 알게 됩니다.',
    firstNight: 12,
    otherNight: 18,
    firstNightReminder:
      '초공감자의 살아있는 이웃 2명 중 몇 명이 악한지 알려주세요.',
    otherNightReminder:
      '초공감자의 살아있는 이웃 2명 중 몇 명이 악한지 알려주세요.',
  },
  {
    id: 'genius2',
    name: '지니어스',
    image: 'https://www.bloodstar.xyz/p/mate234/1/_1.png',
    team: 'townsfolk',
    ability:
      '매일 밤, 당신은 악팀의 종류를 하나씩 배웁니다. 악마는 지니어스가 플레이중인 사실을 알고 있습니다',
    firstNight: 13,
    otherNight: 19,
    firstNightReminder: '지니어스를 깨워 악팀의 종류를 알려주세요.',
    otherNightReminder: '지니어스를 깨워 악팀의 종류를 알려주세요.',
  },
  {
    id: 'towncrier1',
    name: '타운크라이어',
    image: [
      'https://botc.app/assets/towncrier_g-D9dERfO2.webp',
      'https://botc.app/assets/towncrier_e-BzUGp1JT.webp',
    ],
    team: 'townsfolk',
    ability: '매일 밤*, 오늘 낮에 하수인이 지목 당했는지 알게 됩니다.',
    firstNight: 0,
    otherNight: 22,
    otherNightReminder: '오늘 낮에 하수인이 지목 당했는지 알려줍니다.',
    reminders: ['하수인 지명 O', '하수인 지명 X'],
  },
  {
    id: 'oracle1',
    name: '오라클',
    image: [
      'https://botc.app/assets/oracle_g-HZdhcJUJ.webp',
      'https://botc.app/assets/oracle_e-BgNZAuGG.webp',
    ],
    team: 'townsfolk',
    ability:
      '매일 밤*, 당신은 죽은 플레이어 중 악한 진영이 얼마나 있는지 알게 됩니다.',
    firstNight: 0,
    otherNight: 23,
    otherNightReminder:
      '죽은 플레이어 중 악한 진영이 얼마나 있는지 알려줍니다.',
  },
  {
    id: 'undertaker1',
    name: '장의사',
    image: [
      'https://botc.app/assets/undertaker_g-sXYI7VS3.webp',
      'https://botc.app/assets/undertaker_e-DVB8aMO4.webp',
    ],
    team: 'townsfolk',
    ability: '매일 밤*, 오늘 어떤 캐릭터가 처형되었는지 알게 됩니다.',
    firstNight: 0,
    otherNight: 21,
    otherNightReminder: '오늘 처형된 플레이어의 캐릭터를 알려줍니다.',
    reminders: ['오늘 처형'],
  },
  {
    id: 'princess2',
    name: '공주님',
    image: 'https://www.bloodstar.xyz/p/mate234/1/25_1.png',
    team: 'townsfolk',
    ability:
      '두 번째 밤부터 총 3번 호위무사를 고르세요. 당신이 고른 3명의 호위무사가 모두 선한 플레이어고 4번째 낮까지 당신이 살아있다면 즉시 시민의 승리입니다.',
    firstNight: 0,
    otherNight: 0,
    reminders: ['호위무사'],
  },
  {
    id: 'seamstress1',
    name: '재봉사',
    image: [
      'https://botc.app/assets/seamstress_g-B4RHsroR.webp',
      'https://botc.app/assets/seamstress_e-BfBRBNhv.webp',
    ],
    team: 'townsfolk',
    ability:
      '게임당 한 번, 밤에 플레이어 2명을 선택할 수 있습니다. 해당 플레이어들이 같은 진영인지 알게 됩니다.(본인 지목 X)',
    firstNight: 16,
    otherNight: 24,
    firstNightReminder:
      '플레이어 2명을 선택했다면, 해당 플레이어들이 같은 진영인지 알려줍니다.',
    otherNightReminder:
      '플레이어 2명을 선택했다면, 해당 플레이어들이 같은 진영인지 알려줍니다.',
    reminders: ['무능력'],
  },
  {
    id: 'professor1',
    name: '교수',
    image: [
      'https://botc.app/assets/professor_g-h2X7rvhv.webp',
      'https://botc.app/assets/professor_e-BpuIeGol.webp',
    ],
    team: 'townsfolk',
    ability:
      '게임당 한 번, 밤*에 죽은 플레이어를 선택할 수 있습니다. 해당 플레이어가 마을 주민이라면 부활하며 부활 한 플레이어의 능력도 같은 밤에 함께 부활합니다. 당신은 힐러와 함께 플레이 중일 수 없습니다.',
    firstNight: 0,
    otherNight: 14,
    otherNightReminder:
      '플레이어를 선택할 수 있습니다. 해당 플레이어가 주민이라면 부활합니다.',
    reminders: ['무능력', '부활'],
  },
  {
    id: 'healer1',
    name: '힐러',
    image: 'https://www.bloodstar.xyz/p/mate234/1/27_1.png',
    team: 'townsfolk',
    ability:
      '게임당 한 번, 밤에 3명의 플레이어(본인 가능)를 선택하세요. 오늘 밤 하수인들이 그들에게 걸어놓은 모든 나쁜 증상이 치유되고 스토리텔러는 낮이 되면 치유된 시민과 힐러를 공개적으로 밝힙니다. 당신은 교수와 함께 플레이 중일 수 없습니다.',
    firstNight: 0,
    otherNight: 0,
    reminders: ['치유', '치유'],
    jinxes: [
      {
        id: 'professor1',
        reason: '두 캐릭터가 동시에 참가 중일 수 없습니다.',
      },
    ],
  },
  {
    id: 'artist1',
    name: '예술가',
    image: [
      'https://botc.app/assets/artist_g-CyRrA7cN.webp',
      'https://botc.app/assets/artist_e-CpwoIhpV.webp',
    ],
    team: 'townsfolk',
    ability:
      '게임당 한 번, 낮에 스토리텔러에게 찾아가 예/아니오로 대답할 수 있는 질문을 물어볼 수 있습니다.',
    firstNight: 0,
    otherNight: 0,
    reminders: ['무능력'],
  },
  {
    id: 'roshambo1',
    name: '가위바위보',
    image: 'https://www.bloodstar.xyz/p/mate234/1/31_1.png',
    team: 'townsfolk',
    ability:
      "게임당 한 번, '공개토론 시작 알림과 동시에' 스토리텔러에게 가위바위보 게임을 요청하세요. 이긴다면 2가지의 조언을 받게 되고 지더라도 1가지의 조언을 받습니다. 당신의 능력은 게임 초반에 사용해도 되지만 최대한 뒤늦게 사용할수록 스토리텔러의 조언은 강력해집니다",
    firstNight: 0,
    otherNight: 0,
    reminders: ['짐', '이김'],
  },
  {
    id: 'slayer1',
    name: '슬레이어',
    image: [
      'https://botc.app/assets/slayer_g-BO_75tK_.webp',
      'https://botc.app/assets/slayer_e-4pQk5kJR.webp',
    ],
    team: 'townsfolk',
    ability:
      '게임당 한 번, 낮에 공개적으로 플레이어를 1명 선택해 화살을 쏘세요. 해당 플레이어가 악마라면, 죽습니다.',
    firstNight: 0,
    otherNight: 0,
    reminders: ['무능력'],
  },
  {
    id: 'ravenkeeper1',
    name: '레이븐키퍼',
    image: [
      'https://botc.app/assets/ravenkeeper_g-Bg-yrUxj.webp',
      'https://botc.app/assets/ravenkeeper_e-Yrx6NFvE.webp',
    ],
    team: 'townsfolk',
    ability:
      '만약 당신이 밤에 죽으면, 깨어나 플레이어를 1명 선택합니다. 해당 플레이어의 캐릭터를 알게 됩니다.',
    firstNight: 0,
    otherNight: 17,
    otherNightReminder:
      '밤에 죽으면, 깨어나 플레이어를 1명 선택합니다. 해당 플레이어의 캐릭터를 알려줍니다.',
  },
  {
    id: 'awakenchick1',
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
    id: 'drunk1',
    name: '주정뱅이',
    image: [
      'https://botc.app/assets/drunk_g--QNmv0ZY.webp',
      'https://botc.app/assets/drunk_e-bRjLB9FX.webp',
    ],
    team: 'outsider',
    ability:
      '당신은 자신이 주정뱅이인 것을 모릅니다. 자신이 주민 캐릭터라고 생각하지만, 그렇지 않습니다.',
    firstNight: 0,
    otherNight: 0,
    remindersGlobal: ['주정뱅이'],
    special: [
      {
        name: 'bag-disabled',
        type: 'selection',
      },
      {
        name: 'replace-character',
        type: 'reveal',
      },
    ],
  },
  {
    id: 'saint1',
    name: '성자',
    image: [
      'https://botc.app/assets/saint_g-BU0hab0E.webp',
      'https://botc.app/assets/saint_e-CnQBC4rO.webp',
    ],
    team: 'outsider',
    ability: '만약 당신이 처형으로 죽으면, 즉시 시민의 패배입니다.',
    firstNight: 0,
    otherNight: 0,
  },
  {
    id: '341',
    name: ' 소녀',
    image: 'https://www.bloodstar.xyz/p/mate234/1/34_1.png',
    team: 'outsider',
    ability:
      '살아있다면 숨으세요. 모든 하수인들은 소녀가 참여하고 있다는 것을 알고 있습니다. 하수인이 딱 1번 공개적으로 당신을 추측하면 시민의 패배입니다.',
    firstNight: 0,
    otherNight: 0,
  },
  {
    id: 'plaguedoctor1',
    name: '역병 의사',
    image: [
      'https://botc.app/assets/plaguedoctor_g-DUqDeP9l.webp',
      'https://botc.app/assets/plaguedoctor_e-DdVqxJ_g.webp',
    ],
    team: 'outsider',
    ability:
      '만약 당신이 처형으로 죽으면, 그 날 밤부터 스토리텔러는 하수인 능력을 1가지 얻으며 그 능력은 시민에게 불리하게 사용됩니다.',
    firstNight: 0,
    otherNight: 13,
    otherNightReminder:
      '역병 의사가 죽을 때, 이야기꾼은 하수인 능력을 얻습니다. 까먹었다면, 지금부터라도 하세요.',
    reminders: ['이야기꾼 능력'],
    jinxes: [
      {
        id: 'baron1',
        reason:
          '이야기꾼이 남작의 능력을 얻게되면, 최대 2명의 플레이어가 외지인이 됩니다.',
      },
      {
        id: 'boomdandy1',
        reason:
          '이야기꾼이 폭탄광 능력을 얻게되면, 플레이어 1명이 폭탄광이 됩니다.',
      },
      {
        id: 'eviltwin1',
        reason:
          '이야기꾼이 사악한 쌍둥이 능력을 얻게되면, 플레이어 1명이 사악한 쌍둥이가 됩니다.',
      },
      {
        id: 'fearmonger1',
        reason:
          '이야기꾼이 공포조장가 능력을 얻게되면, 하수인이 그 능력을 추가로 얻고, 이 사실을 알게 됩니다.',
      },
      {
        id: 'goblin1',
        reason:
          '이야기꾼이 고블린 능력을 얻게되면, 하수인이 그 능력을 추가로 얻고, 이 사실을 알게 됩니다.',
      },
      {
        id: 'marionette1',
        reason:
          '이야기꾼이 꼭두각시 능력을 얻게되면, 악마의 살아있는 선한 이웃 중 하나가 꼭두각시가 됩니다.',
      },
      {
        id: 'scarletwoman1',
        reason:
          '이야기꾼이 부정한 여인 능력을 얻게되면, 하수인이 그 능력을 추가로 얻고, 이 사실을 알게 됩니다.',
      },
      {
        id: 'spy1',
        reason:
          '이야기꾼이 스파이 능력을 얻게되면, 하수인이 그 능력을 추가로 얻고, 이 사실을 알게 됩니다.',
      },
      {
        id: 'wraith1',
        reason:
          '이야기꾼이 레이스 능력을 얻게되면, 하수인이 그 능력을 추가로 얻고, 이 사실을 알게 됩니다.',
      },
    ],
  },
  {
    id: 'poisoner1',
    name: '독살범',
    image: [
      'https://botc.app/assets/poisoner_e-Usf7TcoY.webp',
      'https://botc.app/assets/poisoner_g-DHNIHhxZ.webp',
    ],
    team: 'minion',
    ability:
      '매일 밤, 플레이어를 1명 선택하세요. 해당 플레이어는 하루동안 능력이 거꾸로 작동합니다.',
    firstNight: 6,
    otherNight: 3,
    firstNightReminder:
      '플레이어를 1명 선택합니다. 해당 플레이어는 다음 날 저녁까지 중독됩니다.',
    otherNightReminder:
      '플레이어를 1명 선택합니다. 해당 플레이어는 다음 날 저녁까지 중독됩니다.',
    reminders: ['중독'],
  },
  {
    id: 'devilsadvocate1',
    name: '선의의 비판자',
    image: [
      'https://botc.app/assets/devilsadvocate_e-6olcm7Cx.webp',
      'https://botc.app/assets/devilsadvocate_g-DeyJHzxG.webp',
    ],
    team: 'minion',
    ability:
      '매일 밤, 어제와 다른 살아있는 플레이어를 1명 선택합니다. 해당 플레이어는 내일 처형되더라도 죽지 않습니다.',
    firstNight: 7,
    otherNight: 4,
    firstNightReminder:
      '살아있는 플레이어를 1명 선택합니다. 해당 플레이어는 내일 처형되더라도 죽지 않습니다.',
    otherNightReminder:
      '어제와 다른 살아있는 플레이어를 1명 선택합니다. 해당 플레이어는 내일 처형되더라도 죽지 않습니다.',
    reminders: ['처형 불가'],
  },
  {
    id: 'spy1',
    name: '스파이',
    image: [
      'https://botc.app/assets/spy_e-DU0tdGGe.webp',
      'https://botc.app/assets/spy_g-7hnV_AFT.webp',
    ],
    team: 'minion',
    ability:
      '당신은 모든 플레이어의 마도서(직업)를 봅니다. 당신은 죽어서도 조사직에게 시민이나 이방인으로 보일 수 있습니다.',
    firstNight: 19,
    otherNight: 25,
    firstNightReminder: '스파이에게 마도서를 보여주세요.',
    otherNightReminder: '스파이에게 마도서를 보여주세요.',
    jinxes: [
      {
        id: 'poppygrower1',
        reason:
          '양귀비 재배자가 능력이 있다면, 스파이는 마도서를 볼 수 없습니다.',
      },
      {
        id: 'damsel1',
        reason:
          '스파이가 참가 중이거나 이전에 참가 했었다면, 아가씨는 중독됩니다.',
      },
      {
        id: 'ogre1',
        reason: '스파이는 오우거에게 악한 진영으로 취급됩니다.',
      },
    ],
    special: [
      {
        name: 'grimoire',
        time: 'night',
        type: 'signal',
      },
    ],
  },
  {
    id: 'witch1',
    name: '마녀',
    image: [
      'https://botc.app/assets/witch_e-D4AS1R1Q.webp',
      'https://botc.app/assets/witch_g-CI6rg-Tb.webp',
    ],
    team: 'minion',
    ability:
      '매일 밤, 플레이어를 1명 선택합니다. 해당 플레이어는 다음 낮에 누군가를 지목하면 죽습니다. 플레이어 3명만 살아남으면 이 능력을 잃습니다.',
    firstNight: 8,
    otherNight: 5,
    firstNightReminder: '플레이어를 1명 선택하게 하세요.',
    otherNightReminder: '플레이어를 1명 선택하게 하세요.',
    reminders: ['저주'],
  },
  {
    id: 'scarletwoman1',
    name: '스칼렛우먼',
    image: [
      'https://botc.app/assets/scarletwoman_e-BP5Fv_Ne.webp',
      'https://botc.app/assets/scarletwoman_g-CM50XIwn.webp',
    ],
    team: 'minion',
    ability:
      '만약 살아있는 플레이어가 5명 이상이라면, 악마가 죽으면 당신은 악마가 됩니다.',
    firstNight: 0,
    otherNight: 8,
    otherNightReminder:
      '살아있는 플레이어가 5명 이상일 때 악마가 죽으면면, 부정한 여인에게 악마가 되었음을 알려줍니다.',
    reminders: ['악마'],
    jinxes: [
      {
        id: 'alhadikhia1',
        reason:
          '부정한 여인이었던 악마를 포함하여 2명의 악마가 있게 된다면, 부정한 여인은 다시 부정한 여인이 됩니다.',
      },
      {
        id: 'fanggu1',
        reason:
          '부정한 여인이었던 악마를 포함하여 2명의 악마가 있게 된다면, 부정한 여인은 부정한 여인으로 남습니다.',
      },
    ],
  },
  {
    id: 'bomber1',
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
    id: 'fankky1',
    name: '팡 키',
    image: 'https://www.bloodstar.xyz/p/mate234/1/22_1.png',
    team: 'demon',
    ability:
      "매일 밤, 플레이어를 선택하세요. 그는 죽습니다. 팡키는 모든 하수인의 '종류'를 직접 고르며 스토리텔러에게 받은 블러핑 직업을 특정 하수인에게 모두 지정 할 수 있습니다.",
    firstNight: 0,
    otherNight: 0,
    setup: true,
  },
  {
    id: 'nodashii1',
    name: '노다시',
    image: [
      'https://botc.app/assets/nodashii_e-Dt8UO6rj.webp',
      'https://botc.app/assets/nodashii_g-jI2LJQhL.webp',
    ],
    team: 'demon',
    ability:
      '매일 밤*, 플레이어를 1명 선택합니다. 해당 플레이어는 죽습니다. 당신의 가장 가까운 양 옆 시민 플레이어들은 중독됩니다. (하수인과 이방인을 건너 뛰고)',
    firstNight: 0,
    otherNight: 11,
    otherNightReminder: '플레이어를 1명 선택합니다. 해당 플레이어는 죽습니다.',
    reminders: ['죽음', '중독', '중독'],
  },
  {
    id: 'po1',
    name: '포',
    image: [
      'https://botc.app/assets/po_e-BkxsM_xT.webp',
      'https://botc.app/assets/po_g-blqsHHpB.webp',
    ],
    team: 'demon',
    ability:
      '매일 밤*, 플레이어를 1명 선택할 수도 있습니다. 해당 플레이어는 죽습니다. 만약 오늘 밤 죽이지 않기로 했다면, 다음 밤에 3명의 플레이어를 선택해서 죽일 수 있습니다.',
    firstNight: 0,
    otherNight: 10,
    otherNightReminder:
      "플레이어를 1명 선택할 수도 있습니다. 해당 플레이어는 죽습니다. 만약 죽이지 않기로 했다면, '3번 공격' 알림 토큰으로 표시합니다.",
    reminders: ['죽음', '죽음', '죽음', '3번 공격'],
  },
  {
    id: 'vigormortis1',
    name: '비고모르티스',
    image: [
      'https://botc.app/assets/vigormortis_e-0VJIslwJ.webp',
      'https://botc.app/assets/vigormortis_g-DP1UY2Jk.webp',
    ],
    team: 'demon',
    ability:
      '매일 밤*, 플레이어를 1명 선택합니다. 해당 플레이어는 죽습니다. 당신이 죽인 하수인은 매일 밤 능력을 유지하고 이웃 플레이어가 주민이라면 그중 1명을 중독시킵니다. [-1 외지인]',
    firstNight: 0,
    otherNight: 12,
    otherNightReminder:
      '플레이어를 1명 선택합니다. 해당 플레이어는 죽습니다. 하수인을 죽이면 해당 하수인의 능력은 유지됩니다. 그리고 이웃 플레이어가 주민이라면 그중 1명을 중독시킵니다.',
    reminders: [
      '죽음',
      '능력있음',
      '능력있음',
      '능력있음',
      '중독',
      '중독',
      '중독',
    ],
    setup: true,
  },
];

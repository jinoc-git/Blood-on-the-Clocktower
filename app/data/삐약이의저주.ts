import { Job } from '../types';
// 실제 사용하는 직업, JSON 파일의 내용 복붙
export const JOBS_BA: Job[] = [
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
    firstNight: 7,
    otherNight: 0,
    firstNightReminder:
      '악한 참가자가 총 몇 쌍으로 인접했는지 숫자로 알려주세요.',
  },
  {
    id: 'pursuer',
    name: '추적자',
    image: [
      'https://www.bloodstar.xyz/p/mate234/2/2_2.png',
      'https://www.bloodstar.xyz/p/mate234/2/2_2.png',
    ],
    team: 'townsfolk',
    ability:
      '당신과 가장 가까운 이방인과 본인 사이에 몇 명의 악팀이 있는지 알고 시작합니다.',
    firstNight: 12,
    otherNight: 0,
    firstNightReminder:
      '가장 가까운 이방인과 본인 사이에 몇 명의 악팀이 있는지 알려줍니다.',
  },
  {
    id: 'wake1',
    name: '웨이크',
    image: [
      'https://i.imgur.com/v0VawGH.png',
      'https://i.imgur.com/TWZGwvi.png',
    ],
    team: 'townsfolk',
    ability:
      '첫날 밤, 플레이어를 2명 선택하세요. 그들 중 오늘 밤 깨어난 플레이어가 몇명인지 알게 됩니다. ( 깨어난 플레이어 = 오늘 밤 스토리텔러에게 밤편지를 받은 악팀 혹은 선한 플레이어 )',
    firstNight: 0,
    otherNight: 0,
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
    firstNight: 11,
    otherNight: 11,
    firstNightReminder: '선한 플레이어 1명과 그 캐릭터를 알려주세요.',
    otherNightReminder: '손주 플레이어가 죽으면, 할머니도 죽습니다.',
    reminders: ['죽음', '손주'],
  },
  {
    id: 'marksman',
    name: '명사수',
    image: [
      'https://www.bloodstar.xyz/p/mate234/3/_3.png',
      'https://www.bloodstar.xyz/p/mate234/3/_3.png',
    ],
    team: 'townsfolk',
    ability:
      '게임당 한 번, 밤에 플레이어 1명을 선택하세요. 그가 하수인이라면 죽습니다.',
    firstNight: 0,
    otherNight: 0,
    reminders: ['능력없음'],
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
      '매일 밤, 플레이어 2명을 선택합니다. 그중 악마가 있는지 알게 됩니다. 당신에게 악마로 보이는 선한 플레이어(붉은 청어)가 1명 있습니다.',
    firstNight: 10,
    otherNight: 16,
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
    firstNight: 8,
    otherNight: 14,
    firstNightReminder:
      '초공감자의 살아있는 이웃 2명 중 몇 명이 악한지 알려주세요.',
    otherNightReminder:
      '초공감자의 살아있는 이웃 2명 중 몇 명이 악한지 알려주세요.',
  },
  {
    id: 'genius2',
    name: '지니어스',
    image: [
      'https://i.imgur.com/kkJm9M0.png',
      'https://i.imgur.com/kuschTi.png',
    ],
    team: 'townsfolk',
    ability:
      '매일 밤, 당신은 참가 중인 악한 캐릭터를 하나씩 알게 됩니다. 악마는 지니어스가 참가 중임을 알고 있습니다.',
    firstNight: 9,
    otherNight: 15,
    firstNightReminder: '지니어스를 깨워 악팀의 종류를 알려주세요.',
    otherNightReminder: '지니어스를 깨워 악팀의 종류를 알려주세요.',
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
      '매일 밤, 당신은 죽은 플레이어 중 악한 진영이 얼마나 있는지 알게 됩니다. (마지막 밤에 죽은 플레이어 포함)',
    firstNight: 0,
    otherNight: 18,
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
    ability: '매일 밤, 오늘 낮에 처형 된 플레이어의 캐릭터를 알게 됩니다',
    firstNight: 0,
    otherNight: 17,
    otherNightReminder: '오늘 처형된 플레이어의 캐릭터를 알려줍니다.',
    reminders: ['오늘 처형'],
  },
  {
    id: 'princess2',
    name: '공주님',
    image: [
      'https://i.imgur.com/jkgCcA6.png',
      'https://i.imgur.com/L3hqBwL.png',
    ],
    team: 'townsfolk',
    ability:
      '두 번째 밤부터 총 3번 호위무사를 고르세요. 당신이 고른 3명의 호위무사가 모두 선한 플레이어고 4번째 낮까지 당신이 살아있다면 즉시 시민의 승리입니다.',
    firstNight: 0,
    otherNight: 0,
    reminders: ['호위무사1', '호위무사2', '호위무사3'],
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
      '게임당 한 번, 밤*에 죽은 플레이어를 선택하세요. 해당 플레이어가 마을 주민이라면 부활하며 부활 한 플레이어의 능력도 같은 밤에 함께 부활합니다.',
    firstNight: 0,
    otherNight: 10,
    otherNightReminder:
      '플레이어를 선택할 수 있습니다. 해당 플레이어가 주민이라면 부활합니다.',
    reminders: ['무능력', '부활'],
  },
  {
    id: 'healer1',
    name: '힐러',
    image: [
      'https://i.imgur.com/O41XW9S.png',
      'https://i.imgur.com/QULgDgG.png',
    ],
    team: 'townsfolk',
    ability:
      '게임당 한 번, 밤*에 3명의 플레이어를 선택하세요. 오늘 밤 하수인들이 그들에게 걸어놓은 모든 나쁜 증상이 치유되고 스토리텔러는 낮이 되면 치유된 시민과 힐러를 공개적으로 밝힙니다.',
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
    image: [
      'https://i.imgur.com/dCBbAJT.png',
      'https://i.imgur.com/jH6A0Zq.png',
    ],
    team: 'townsfolk',
    ability:
      "게임당 한 번, '공개토론 시작과 동시에' 스토리텔러에게 가위바위보 게임을 요청하세요. 이긴다면 2가지의 조언을 받게 되고 지더라도 1가지의 조언을 받습니다. 당신의 능력은 게임 초반에 사용해도 되지만 최대한 뒤늦게 사용할수록 스토리텔러의 조언은 강력해집니다",
    firstNight: 0,
    otherNight: 0,
    reminders: ['짐', '이김'],
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
      '당신은 밤에 죽으면 깨어나 플레이어를 1명 선택합니다. 해당 플레이어의 캐릭터를 알게 됩니다.',
    firstNight: 0,
    otherNight: 12,
    otherNightReminder:
      '밤에 죽으면, 깨어나 플레이어를 1명 선택합니다. 해당 플레이어의 캐릭터를 알려줍니다.',
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
    id: 'puzzlemaster1',
    name: '퍼즐마스터',
    image: [
      'https://www.bloodstar.xyz/p/mate234/2/3_2.png',
      'https://www.bloodstar.xyz/p/mate234/2/3_2.png',
    ],
    team: 'outsider',
    ability:
      '한 명은 취한 상태입니다. 당신이 죽어도 마찬가지입니다. 게임당 한 번 퍼즐마스터는 언제든지 취한 플레이어를 추측합니다. 맞다면 진짜 악마를 알게 되지만 틀리다면 선한 플레이어를 악마로 알게 됩니다.',
    firstNight: 0,
    otherNight: 0,
    reminders: ['능력없음'],
  },
  {
    id: 'tinker1',
    name: '땜장이',
    image: [
      'https://botc.app/assets/tinker_g-CS4VFqeN.webp',
      'https://botc.app/assets/tinker_e-dpPUDqmq.webp',
    ],
    team: 'outsider',
    ability: '당신은 언제든지 죽을 수도 있습니다.',
    firstNight: 0,
    otherNight: 9,
    otherNightReminder: '땜장이는 언제든지 죽을 수도 있습니다.',
    reminders: ['죽음'],
  },
  {
    id: 'damsel1',
    name: '소녀',
    image: [
      'https://botc.app/assets/damsel_g-NwMWC09c.webp',
      'https://botc.app/assets/damsel_e-fpsIFV1Z.webp',
    ],
    team: 'outsider',
    ability:
      '살아있다면 숨으세요. 모든 하수인들은 소녀가 참여하고 있다는 것을 알고 있습니다. 딱 1번 하수인이 당신을 추측하면 시민의 패배입니다.',
    firstNight: 4,
    otherNight: 13,
    firstNightReminder:
      "모든 하수인을 깨워, '이 캐릭터가 당신을 선택했습니다.' 카드와 아가씨의 캐릭터 토큰을 보여줍니다.",
    otherNightReminder:
      "사냥꾼이 아가씨를 선택했다면, 아가씨를 깨우고 '당신은' 카드와 참가하지 않은 주민 캐릭터 토큰을 보여줍니다.",
    reminders: ['추측', '중독'],
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
    firstNight: 5,
    otherNight: 2,
    firstNightReminder:
      '플레이어를 1명 선택합니다. 해당 플레이어는 다음 날 저녁까지 중독됩니다.',
    otherNightReminder:
      '플레이어를 1명 선택합니다. 해당 플레이어는 다음 날 저녁까지 중독됩니다.',
    reminders: ['중독'],
  },
  {
    id: 'godfather1',
    name: '대부',
    image: [
      'https://www.bloodstar.xyz/p/mate234/3/1_3.png',
      'https://www.bloodstar.xyz/p/mate234/3/1_3.png',
    ],
    team: 'minion',
    ability:
      '이 판에 어떤 이방인이 참여중인지 알고 시작합니다. 낮에 이방인이 처형되면 그날 밤 1명의 플레이어를 선택하세요. 그는 죽습니다. [+1 이방인 혹은 -1 이방인]',
    firstNight: 15,
    otherNight: 0,
    firstNightReminder:
      '대부를 깨워 이 판에 어떤 이방인이 참여중인지 모두 알려주세요',
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
      '매일 밤, 플레이어를 1명 선택합니다. 해당 플레이어는 다음 낮에 누군가를 지목하면 죽습니다. 플레이어 3명만 살아있으면 이 능력을 잃습니다.',
    firstNight: 6,
    otherNight: 3,
    firstNightReminder: '플레이어를 1명 선택하게 하세요.',
    otherNightReminder: '플레이어를 1명 선택하게 하세요.',
    reminders: ['저주'],
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
      '매일 밤, 당신은 마도서(모든 플레이어의 직업)를 봅니다. 당신은 죽어서도 조사직에게 시민이나 이방인으로 보일 수 있습니다.',
    firstNight: 13,
    otherNight: 19,
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
          '스파이가 참가 중이거나 이전에 참가 했었다면, 소녀는 중독됩니다.',
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
    otherNight: 4,
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
    image: [
      'https://i.imgur.com/9Y2ObPS.png',
      'https://i.imgur.com/gAjWZyS.png',
    ],
    team: 'minion',
    ability:
      '매일 밤, 플레이어를 1명 선택합니다. 해당 플레이어에게 폭탄이 설치됩니다. 4번째 밤에 폭탄이 설치된 모든 플레이어가 죽습니다.',
    firstNight: 0,
    otherNight: 0,
    reminders: ['설 치', '설 치', '설 치'],
  },
  {
    id: 'fankky1',
    name: '팡키',
    image: [
      'https://i.imgur.com/iwOww4l.png',
      'https://i.imgur.com/5AvDtd2.png',
    ],
    team: 'demon',
    ability:
      '매일 밤*, 플레이어를 선택하세요. 해당 플레이어는 죽습니다. [+1 하수인]',
    firstNight: 0,
    otherNight: 5,
    otherNightReminder: '플레이어를 1명 선택합니다. 해당 플레이어는 죽습니다.',
    reminders: ['죽음'],
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
    otherNight: 7,
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
    otherNight: 6,
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
      '매일 밤*, 플레이어를 1명 선택합니다. 해당 플레이어는 죽습니다. 당신이 죽인 하수인은 매일 밤 능력을 유지하고, 그 하수인의 가장 가까운 주민 플레이어 중 1명이 중독됩니다. (하수인과 이방인을 건너 뛰고) [-1 이방인]',
    firstNight: 0,
    otherNight: 8,
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
  },
];

// 맹삼님 시트
export const JOBS_MS: Job[] = [
  {
    id: 'noble1',
    name: '귀족',
    image: [
      'https://botc.app/assets/noble_g-B0vksP8B.webp',
      'https://botc.app/assets/noble_e-BFJBeujm.webp',
    ],
    team: 'townsfolk',
    ability: '플레이어 3명을 알고 시작합니다. 그중 1명은 악한 진영입니다.',
    firstNight: 64,
    otherNight: 0,
    firstNightReminder: '악한 플레이어 1명 포함, 플레이어 3명을 알려줍니다.',
    reminders: ['알고있음', '알고있음', '알고있음'],
  },
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
    firstNight: 54,
    otherNight: 0,
    firstNightReminder:
      '악한 참가자가 총 몇 쌍으로 인접했는지 숫자로 알려주세요.',
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
    firstNight: 66,
    otherNight: 0,
    firstNightReminder:
      '가장 가까운 악한 플레이어가 시계 방향인지 반시계 방향인지 알려줍니다.',
  },
  {
    id: 'pixie1',
    name: '픽시',
    image: [
      'https://botc.app/assets/pixie_g-B1xIo6Bx.webp',
      'https://botc.app/assets/pixie_e-Dknojw1x.webp',
    ],
    team: 'townsfolk',
    ability:
      '게임에 참가 중인 주민 캐릭터 1개를 알고 시작합니다. 만약 당신이 그 캐릭터라고 "광기"했다면, 해당 캐릭터의 플레이어가 죽고 나서 그 캐릭터의 능력을 얻을 수도 있습니다.',
    firstNight: 47,
    otherNight: 0,
    firstNightReminder: '게임에 참가 중인 주민 캐릭터 1개를 알려줍니다.',
    reminders: ['광기', '능력 있음'],
  },
  {
    id: 'balloonist1',
    name: '열기구 조종사',
    image: [
      'https://botc.app/assets/balloonist_g-Dlfqy_E5.webp',
      'https://botc.app/assets/balloonist_e-D2ByQ9TA.webp',
    ],
    team: 'townsfolk',
    ability:
      '매일 밤, 전날 밤과 다른 캐릭터 유형인 플레이어를 1명 알게 됩니다. [+0 ~ +1 외지인]',
    firstNight: 65,
    otherNight: 84,
    firstNightReminder: '플레이어를 1명 알려줍니다.',
    otherNightReminder:
      '전날 알려준 플레이어와 다른 유형의 캐릭터인 플레이어를 1명 알려줍니다.',
    reminders: ['주민', '외지인', '하수인', '악마'],
    setup: true,
  },
  {
    id: 'mathematician1',
    name: '수학자',
    image: [
      'https://botc.app/assets/mathematician_g-CYQ5a9XP.webp',
      'https://botc.app/assets/mathematician_e-DOTUnrYp.webp',
    ],
    team: 'townsfolk',
    ability:
      '매일 밤, 다른 캐릭터의 능력으로 인해 능력이 비정상적으로 작동한 플레이어의 수를 알게 됩니다.',
    firstNight: 76,
    otherNight: 95,
    firstNightReminder:
      '다른 캐릭터의 능력으로 인해 능력이 비정상적으로 작동한 플레이어의 수를 알려줍니다.',
    otherNightReminder:
      '다른 캐릭터의 능력으로 인해 능력이 비정상적으로 작동한 플레이어의 수를 알려줍니다.',
    reminders: ['비정상', '비정상', '비정상', '비정상', '비정상'],
    jinxes: [
      {
        id: 'chambermaid1',
        reason:
          '하녀가 먼저 깨어나더라도 하녀는 수학자가 오늘 밤 깨어나는지 여부를 알 수 있습니다.',
      },
      {
        id: 'drunk1',
        reason:
          '수학자는 주정뱅이의 능력이 잘못 작동하거나 거짓 정보를 받았을 때, 이를 감지할 수도 있습니다.',
      },
      {
        id: 'lunatic1',
        reason:
          '수학자는 미치광이가 선택한 사람이 악마가 실제로 공격한 사람과 다를 경우 이를 감지할 수도 있습니다.',
      },
      {
        id: 'marionette1',
        reason:
          '수학자는 꼭두각시의 능력이 잘못 작동하거나 거짓 정보를 받았을 때, 이를 감지할 수도 있습니다.',
      },
    ],
  },
  {
    id: 'oracle1',
    name: '신관',
    image: [
      'https://botc.app/assets/oracle_g-HZdhcJUJ.webp',
      'https://botc.app/assets/oracle_e-BgNZAuGG.webp',
    ],
    team: 'townsfolk',
    ability:
      '매일 밤*, 죽은 플레이어 중 악한 진영이 얼마나 있는지 알게 됩니다.',
    firstNight: 0,
    otherNight: 81,
    otherNightReminder:
      '죽은 플레이어 중 악한 진영이 얼마나 있는지 알려줍니다.',
    reminders: ['1', '2', '3'],
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
      '매일 밤, 플레이어 2명을 선택합니다. 그중 악마가 있는지 알게 됩니다. 당신에게 악마로 보이는 선한 플레이어가 1명 있습니다.',
    firstNight: 56,
    otherNight: 76,
    firstNightReminder:
      '플레이어 2명을 선택하게 합니다. 그중 악마나 붉은 청어가 있다면 이를 알려줍니다.',
    otherNightReminder:
      '플레이어 2명을 선택하게 합니다. 그중 악마나 붉은 청어가 있다면 이를 알려줍니다.',
    reminders: ['붉은 청어'],
  },
  {
    id: 'huntsman1',
    name: '사냥꾼',
    image: [
      'https://botc.app/assets/huntsman_g-1Nv97uqA.webp',
      'https://botc.app/assets/huntsman_e-CN9kkQNR.webp',
    ],
    team: 'townsfolk',
    ability:
      '게임당 한 번, 밤에 살아있는 플레이어를 1명 선택합니다. 아가씨를 선택하면 아가씨는 참가하지 않은 주민 캐릭터가 됩니다. [+ 아가씨]',
    firstNight: 48,
    otherNight: 66,
    firstNightReminder:
      '사냥꾼이 아가씨를 선택했다면, 아가씨를 깨우고 참가하지 않은 주민 캐릭터 토큰을 보여줍니다.',
    otherNightReminder:
      '사냥꾼이 아가씨를 선택했다면, 아가씨를 깨우고 참가하지 않은 주민 캐릭터 토큰을 보여줍니다.',
    reminders: ['무능력'],
    setup: true,
  },
  {
    id: 'slayer1',
    name: '처단자',
    image: [
      'https://botc.app/assets/slayer_g-BO_75tK_.webp',
      'https://botc.app/assets/slayer_e-4pQk5kJR.webp',
    ],
    team: 'townsfolk',
    ability:
      '게임당 한 번, 낮에 공개적으로 플레이어를 1명 선택할 수 있습니다. 해당 플레이어가 악마라면, 죽습니다.',
    firstNight: 0,
    otherNight: 0,
    reminders: ['무능력'],
  },
  {
    id: 'fisherman1',
    name: '어부',
    image: [
      'https://botc.app/assets/fisherman_g-D4SVpSql.webp',
      'https://botc.app/assets/fisherman_e-Da2Y5IG7.webp',
    ],
    team: 'townsfolk',
    ability:
      '게임당 한 번, 낮에 이야기꾼을 방문해 당신의 진영의 승리에 도움이 되는 조언을 들을 수 있습니다.',
    firstNight: 0,
    otherNight: 0,
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
      '게임당 한 번, 낮에 비밀리에 이야기꾼에게 예/아니오로 대답할 수 있는 질문을 물어볼 수 있습니다.',
    firstNight: 0,
    otherNight: 0,
  },
  {
    id: 'savant1',
    name: '서번트',
    image: [
      'https://botc.app/assets/savant_g-n6x1YgAZ.webp',
      'https://botc.app/assets/savant_e-5neUO4oK.webp',
    ],
    team: 'townsfolk',
    ability:
      '매일 낮, 이야기꾼을 방문하여 비밀리에 2가지 명제를 들을 수 있습니다. 그중 하나는 사실이고 하나는 거짓입니다.',
    firstNight: 0,
    otherNight: 0,
  },
  {
    id: 'amnesiac1',
    name: '기억상실자',
    image: [
      'https://botc.app/assets/amnesiac_g-1rV8CyUl.webp',
      'https://botc.app/assets/amnesiac_e-CEaf8TX1.webp',
    ],
    team: 'townsfolk',
    ability:
      '당신은 자신의 능력을 모릅니다. 매일 낮, 이야기꾼을 방문하여 비밀리에 본인의 능력을 추측할 수 있습니다. (이야기꾼은 차가움/시원함/따뜻함/뜨거움/정답으로 단계별 답변을 줍니다.)',
    firstNight: 50,
    otherNight: 68,
    firstNightReminder: '기억상실자가 밤에 능력을 쓴다면 깨우세요.',
    otherNightReminder: '기억상실자가 밤에 능력을 쓴다면 깨우세요.',
    reminders: ['?', '?', '?'],
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
    otherNight: 74,
    otherNightReminder:
      '밤에 죽으면, 깨어나 플레이어를 1명 선택합니다. 해당 플레이어의 캐릭터를 알려줍니다.',
  },
  {
    id: 'mayor1',
    name: '시장',
    image: [
      'https://botc.app/assets/mayor_g-BQeJ8Z2E.webp',
      'https://botc.app/assets/mayor_e-Bc2mKeJ3.webp',
    ],
    team: 'townsfolk',
    ability:
      '만약 플레이어가 3명만 살아있고, 그날 낮에 처형이 발생하지 않으면, 당신의 진영이 승리합니다. 만약 당신이 밤에 죽으면, 다른 플레이어가 대신 죽을 수도 있습니다.',
    firstNight: 0,
    otherNight: 0,
  },
  {
    id: 'puzzlemaster1',
    name: '퍼즐마스터',
    image: [
      'https://botc.app/assets/puzzlemaster_g-C7roEIMq.webp',
      'https://botc.app/assets/puzzlemaster_e-BeIjkcep.webp',
    ],
    team: 'outsider',
    ability:
      '1명의 플레이어는 취해 있습니다. 이는 당신이 죽어도 유지됩니다. 당신은 해당 플레이어가 누구인지 한 번 추측할 수 있습니다. 맞다면 악마가 누구인지 알게 되지만, 틀리면 거짓 정보를 얻습니다.',
    firstNight: 0,
    otherNight: 0,
    reminders: ['만취', '추측'],
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
    id: 'mutant1',
    name: '돌연변이',
    image: [
      'https://botc.app/assets/mutant_g-CUe36x-i.webp',
      'https://botc.app/assets/mutant_e-COP-pfTP.webp',
    ],
    team: 'outsider',
    ability: '자신이 외지인이라고 "광기"한다면, 처형될 수도 있습니다.',
    firstNight: 0,
    otherNight: 0,
  },
  {
    id: 'damsel1',
    name: '아가씨',
    image: [
      'https://botc.app/assets/damsel_g-NwMWC09c.webp',
      'https://botc.app/assets/damsel_e-fpsIFV1Z.webp',
    ],
    team: 'outsider',
    ability:
      '하수인들은 당신이 참가 중임을 알고 있습니다. 게임당 한 번, 하수인은 공개적으로 당신이 누구인지 추측할 수 있습니다. 맞다면, 당신의 진영이 패배합니다.',
    firstNight: 49,
    otherNight: 67,
    firstNightReminder:
      "모든 하수인을 깨워, '이 캐릭터가 당신을 선택했습니다.' 카드와 아가씨의 캐릭터 토큰을 보여줍니다.",
    otherNightReminder:
      "사냥꾼이 아가씨를 선택했다면, 아가씨를 깨우고 '당신은' 카드와 참가하지 않은 주민 캐릭터 토큰을 보여줍니다.",
    reminders: ['추측'],
  },
  {
    id: 'recluse1',
    name: '은둔자',
    image: [
      'https://botc.app/assets/recluse_g-DxMFqO0r.webp',
      'https://botc.app/assets/recluse_e-BUtHsTp3.webp',
    ],
    team: 'outsider',
    ability:
      '당신은 하수인이나 악마로 보일 수도 있습니다. 이 능력은 당신이 죽어도 유지됩니다.',
    firstNight: 0,
    otherNight: 0,
    jinxes: [
      {
        id: 'sage1',
        reason: '은둔자는 현자에게 악마로 보일 수도 있습니다.',
      },
      {
        id: 'ogre1',
        reason:
          '은둔자가 오우거에게 악하게 보인다면, 오우거는 자신이 악한 진영이라는 사실을 알게 됩니다.',
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
    ability: '만약 당신이 처형으로 죽으면, 당신의 진영이 패배합니다.',
    firstNight: 0,
    otherNight: 0,
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
      '매일 밤, 플레이어를 1명 선택합니다. 해당 플레이어는 다음 날 황혼까지 중독됩니다.',
    firstNight: 32,
    otherNight: 16,
    firstNightReminder:
      '플레이어를 1명 선택합니다. 해당 플레이어는 다음 날 황혼까지 중독됩니다.',
    otherNightReminder:
      '플레이어를 1명 선택합니다. 해당 플레이어는 다음 날 황혼까지 중독됩니다.',
    reminders: ['중독'],
  },
  {
    id: 'scarletwoman1',
    name: '부정한 여인',
    image: [
      'https://botc.app/assets/scarletwoman_e-BP5Fv_Ne.webp',
      'https://botc.app/assets/scarletwoman_g-CM50XIwn.webp',
    ],
    team: 'minion',
    ability:
      '만약 살아있는 플레이어가 5명 이상이라면, 악마가 죽으면 당신은 악마가 됩니다. 여행자는 세지 않습니다.',
    firstNight: 0,
    otherNight: 32,
    otherNightReminder:
      '살아있는 플레이어가 5명 이상일 때 악마가 죽으면, 부정한 여인에게 악마가 되었음을 알려줍니다.',
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
    id: 'godfather1',
    name: '대부',
    image: [
      'https://botc.app/assets/godfather_e-CszxqtFl.webp',
      'https://botc.app/assets/godfather_g-BHOpUHNN.webp',
    ],
    team: 'minion',
    ability:
      '참가 중인 모든 외지인의 캐릭터를 알고 시작합니다. 외지인이 낮에 죽었다면, 그날 밤에 플레이어 1명을 선택합니다. 해당 플레이어는 죽습니다. [-1 또는 +1 외지인]',
    firstNight: 37,
    otherNight: 56,
    firstNightReminder: '대부에게 참가 중인 모든 외지인 캐릭터를 알려줍니다.',
    otherNightReminder:
      '오늘 외지인이 죽었다면 플레이어를 1명 선택합니다. 해당 플레이어는 죽습니다.',
    reminders: ['죽음', '오늘 죽음'],
    setup: true,
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
      '매일 밤, 플레이어를 1명 선택합니다. 해당 플레이어는 다음 낮에 다른 플레이어를 지명하면 죽습니다. 플레이어 3명만 살아남으면 이 능력을 잃습니다.',
    firstNight: 41,
    otherNight: 26,
    firstNightReminder: '플레이어를 1명 선택하게 하세요.',
    otherNightReminder: '플레이어를 1명 선택하게 하세요.',
    reminders: ['저주'],
  },
  {
    id: 'cerenovus1',
    name: '세레노부스',
    image: [
      'https://botc.app/assets/cerenovus_e-ARmVZpWA.webp',
      'https://botc.app/assets/cerenovus_g-Dks6rbpA.webp',
    ],
    team: 'minion',
    ability:
      '매일 밤, 플레이어 1명과 선한 캐릭터 1개를 선택합니다. 그 플레이어는 그 캐릭터에 대해 "광기"해야 합니다. 그렇지 않으면 처형될 수 있습니다.',
    firstNight: 42,
    otherNight: 27,
    firstNightReminder:
      '세레노부스에게 플레이어 1명과 선한 캐릭터 1개를 선택하게 합니다. 해당 플레이어를 깨워 "이 캐릭터가 당신을 선택했습니다" 토큰과 세레노부스 캐릭터, 그리고 광기해야하는 캐릭터를 알려줍니다.',
    otherNightReminder:
      '세레노부스에게 플레이어 1명과 선한 캐릭터 1개를 선택하게 합니다. 해당 플레이어를 깨워 "이 캐릭터가 당신을 선택했습니다" 토큰과 세레노부스 캐릭터, 그리고 광기해야하는 캐릭터를 알려줍니다.',
    reminders: ['광기'],
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
      '매일 밤*, 플레이어를 1명 선택할 수도 있습니다. 해당 플레이어는 죽습니다. 만약 죽이지 않기로 했다면, 다음 밤에 3명의 플레이어를 선택해서 죽여야 합니다.',
    firstNight: 0,
    otherNight: 43,
    otherNightReminder:
      "플레이어를 1명 선택할 수도 있습니다. 해당 플레이어는 죽습니다. 만약 죽이지 않기로 했다면, '3번 공격' 알림 토큰으로 표시합니다.",
    reminders: ['죽음', '죽음', '죽음', '3번 공격'],
  },
  {
    id: 'imp1',
    name: '임프',
    image: [
      'https://botc.app/assets/imp_e-DNpveOPY.webp',
      'https://botc.app/assets/imp_g-D-G7pJEY.webp',
    ],
    team: 'demon',
    ability:
      '매일 밤*, 플레이어를 1명 선택합니다. 해당 플레이어는 죽습니다. 만약 자살하면 하수인이 임프가 됩니다.',
    firstNight: 15.5,
    otherNight: 48.3,
    firstNightReminder: '플레이어를 1명 선택하게 하세요.',
    otherNightReminder: '플레이어를 1명 선택합니다. 해당 플레이어는 죽습니다.',
    reminders: ['죽음'],
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
      '매일 밤*, 플레이어를 1명 선택합니다. 해당 플레이어는 죽습니다. 당신의 가장 가까운 주민 플레이어들은 중독됩니다.',
    firstNight: 0,
    otherNight: 45,
    otherNightReminder: '플레이어를 1명 선택합니다. 해당 플레이어는 죽습니다.',
    reminders: ['죽음', '중독', '중독'],
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
      '매일 밤*, 플레이어를 1명 선택합니다. 해당 플레이어는 죽습니다. 당신이 죽인 하수인은 능력을 유지하고 이웃 플레이어가 주민이라면 그중 1명을 중독시킵니다. [-1 외지인]',
    firstNight: 0,
    otherNight: 48,
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

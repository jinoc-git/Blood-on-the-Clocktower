import { Job } from '../app/types';
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

export const JOBS_SPARTA: Job[] = [
  {
    id: 'kokrsculptorfallofrome',
    name: '조각가',
    image:
      'https://github.com/wonhyo-e/botc-translations/blob/main/assets/icons/Icon_sculptor_fall_of_rome.png?raw=true',
    team: 'townsfolk',
    edition: 'rome',
    ability:
      '참가자 1명을 조각상으로 알고 시작합니다. 매일 밤*, 그가 가장 최근에 지명한 참가자의 진영을 알게 됩니다.',
    flavor:
      '조각가의 손은 오직 돌 속에 잠자는 형상들을 해방시키기 위해 주문을 깨뜨릴 수 있을 뿐이다. - 미켈란젤로 (1501)',
    firstNight: 18,
    otherNight: 19,
    firstNightReminder:
      "한 참가자를 지목하세요. 해당 참가자 옆에 '조각상' 토큰을 놓으세요.",
    otherNightReminder:
      "'조각상' 토큰을 가진 참가자가 오늘 지목했다면, 지목된 참가자가 악이면 조각가에게 엄지 아래(악)를, 그렇지 않다면 엄지 위(선)를 보여주세요. '지목됨' 토큰이 있다면 제거하세요.",
    reminders: ['조각상', '지목됨'],
  },
  {
    id: 'kokrvestalvirginfallofrome',
    name: '베스타의 무녀',
    image:
      'https://github.com/wonhyo-e/botc-translations/blob/main/assets/icons/Icon_vestalvirgin_fall_of_rome.png?raw=true',
    team: 'townsfolk',
    edition: 'rome',
    ability:
      '선과 악 캐릭터를 1개씩 알고 시작합니다. 둘 중 하나는 게임에 참여 중입니다. 참여 중인 캐릭터가 죽으면, 그날 밤 새로운 선과 악 캐릭터를 1개씩 알게 됩니다. 둘 중 하나는 게임에 참여 중입니다.',
    flavor:
      "어떤 이들은 이 베스타 신전의 처녀들이 신성한 불을 지키는 일 외에는 다른 일이 없다고 생각한다. 하지만 다른 이들은 그들이 자신들만 알고 있는 신성한 비밀들을 간직하고 있다고 여긴다. - 루키우스 메스트리우스 '플루타르코스' 플루타르쿠스 (약 49년 - 119년)",
    firstNight: 19,
    otherNight: 20,
    firstNightReminder:
      "선과 악 각각의 캐릭터 토큰을 1개씩 보여주세요: 이 중 하나가 게임에 참여 중입니다. 게임 중인 캐릭터 옆에 '깨달음' 토큰을 놓으세요.",
    otherNightReminder:
      "'깨달음' 토큰을 가진 참가자가 오늘 죽었다면, 토큰을 제거하세요. 선과 악 각각의 캐릭터 토큰을 1개씩 보여주세요: 이 중 하나가 게임에 참여 중입니다. 게임 중인 캐릭터 옆에 '깨달음' 토큰을 놓으세요.",
    reminders: ['깨달음'],
  },
  {
    id: 'kokrphysicianfallofrome',
    name: '의사',
    image:
      'https://github.com/wonhyo-e/botc-translations/blob/main/assets/icons/Icon_physician_fall_of_rome.png?raw=true',
    team: 'townsfolk',
    edition: 'rome',
    ability:
      '매일 밤, 자신을 제외한 2명을 선택합니다. 그들은 술에서 깨고, 건강해지며, 올바른 정보를 받습니다. 처음으로 악마가 그들 중 1명을 죽이면, 당신은 악마의 종류를 알게 됩니다.',
    flavor:
      '의사를 믿기 때문에 회복되는 환자들도 있다. - 히포크라테스 (기원전 약 460년 - 기원전 약 370년)',
    firstNight: 17,
    otherNight: 11,
    firstNightReminder:
      "의사는 자신을 제외한 두 참가자를 지목합니다. 두 참가자 모두에게 '환자' 토큰을 표시하세요.",
    otherNightReminder:
      "모든 '환자' 토큰을 제거하세요. 의사는 자신을 제외한 두 참가자를 지목합니다. 두 참가자 모두에게 '환자' 토큰을 표시하세요. '환자' 토큰이 있는 참가자가 악마에게 살해당했다면, 의사 옆에 '첫 악마' 토큰을 놓고 의사를 깨워 악마 토큰을 보여주세요.",
    reminders: ['환자', '첫 악마'],
  },
  {
    id: 'kokrlegionaryfallofrome',
    name: '군단병',
    image:
      'https://github.com/wonhyo-e/botc-translations/blob/main/assets/icons/Icon_legionary_fall_of_rome.png?raw=true',
    team: 'townsfolk',
    edition: 'rome',
    ability:
      '매일 밤, 자신과 시계방향으로 앉아있는 살아있는 군단병 사이에, 살아있는 악한 참가자의 수를 알게 됩니다. [+0 ~ +2 군단병]',
    flavor:
      '로마인들이 세계 정복을 이룬 것은 끊임없는 군사 훈련, 엄격한 야영 규율 준수, 그리고 전쟁의 다른 기술들을 꾸준히 연마한 덕분이라는 것을 우리는 알고 있다. - 푸블리우스 플라비우스 베게티우스 레나투스 (약 385년 - 약 450년)',
    firstNight: 20,
    otherNight: 21,
    firstNightReminder:
      '군단병과 시계방향으로 다음 군단병 사이에 있는 살아있는 악의 참가자 수(0, 1, 2 등)를 수신호로 보여주세요(양끝은 제외).',
    otherNightReminder:
      '군단병과 시계방향으로 다음 군단병 사이에 있는 살아있는 악의 참가자 수(0, 1, 2 등)를 수신호로 보여주세요(양끝은 제외).',
    setup: true,
  },
  {
    id: 'kokrtrumpeterfallofrome',
    name: '나팔수',
    image:
      'https://github.com/wonhyo-e/botc-translations/blob/main/assets/icons/Icon_trumpeter_fall_of_rome.png?raw=true',
    team: 'townsfolk',
    edition: 'rome',
    ability:
      "매일 밤*, 오늘 낮에 공개적으로 '스파르타쿠스' 라고 주장한 악한 참가자의 수를 알게 됩니다.",
    flavor:
      '내가 해야 할 모든 일을 했지만, 결과는 운명의 손에 달렸다. - 네로 클라우디우스 카이사르 (37년 - 68년)',
    firstNight: 0,
    otherNight: 22,
    otherNightReminder:
      '오늘 공개적으로 스파르타쿠스라고 주장한 악 참가자의 수(0, 1, 2 등)를 수신호로 보여주세요.',
    reminders: ['악 주장'],
  },
  {
    id: 'kokrmorticianfallofrome',
    name: '장의사',
    image:
      'https://github.com/wonhyo-e/botc-translations/blob/main/assets/icons/Icon_mortician_fall_of_rome.png?raw=true',
    team: 'townsfolk',
    edition: 'rome',
    ability:
      '매일 밤*, 오늘 낮에 처형으로 죽은 참가자의 살아있는 이웃 중 악이 있는지 알게 됩니다.',
    flavor:
      '누구도 나를 위해 울지 말고, 애도의 장례식으로 나를 기리지 말라. 나는 여전히 살아있어, 사람들의 입을 통해 오가며. - 퀸투스 엔니우스 (기원전 239년 - 기원전 169년)',
    firstNight: 0,
    otherNight: 23,
    otherNightReminder:
      "오늘 처형된 참가자가 있다면: 이웃 중 한 명이 악인지 여부를 머리 신호로 보여주세요(끄덕임 '예', 좌우 흔듦 '아니오').",
    reminders: ['최근에 처형됨'],
  },
  {
    id: 'kokrstandardbearerfallofrome',
    name: '군단기수',
    image:
      'https://github.com/wonhyo-e/botc-translations/blob/main/assets/icons/Icon_standardbearer_fall_of_rome.png?raw=true',
    team: 'townsfolk',
    edition: 'rome',
    ability:
      '당신은 지명 당했을 때, 지명한 참가자(본인 제외)에 대해 공개적으로 유일무이한 발언 1개를 할 수 있습니다. 오늘 밤, 그 발언이 사실이었는지 알게 됩니다.',
    flavor:
      '당신이 아는 것을 항상 말하지 말라. 하지만 당신이 말하는 것은 항상 알고 있어라. - 티베리우스 클라우디우스 카이사르 아우구스투스 게르마니쿠스 (기원전 10년 - 54년)',
    firstNight: 0,
    otherNight: 24,
    otherNightReminder:
      "깃발수의 공개 발언이 사실 여부를 머리 신호로 보여주세요(끄덕임 '사실', 좌우 흔듦 '거짓').",
    reminders: ['참', '거짓'],
  },
  {
    id: 'kokrcenturion1fallofrome',
    name: '백인대장',
    image:
      'https://github.com/wonhyo-e/botc-translations/blob/main/assets/icons/Icon_centurion1_fall_of_rome.png?raw=true',
    team: 'townsfolk',
    edition: 'rome',
    ability:
      "당신이 살아있는 참가자를 지명하고, 그가 처형당하면 그의 팀이 패배합니다. 당신은 악마로부터 안전합니다. 오늘 낮에 공개적으로 '스파르타쿠스' 라고 주장했다면 새벽까지 술에 취합니다.",
    flavor:
      '죽음을 자원하는 사람을 찾는 것이 인내심을 가지고 고통을 견디려는 사람을 찾는 것보다 쉽다. - 가이우스 율리우스 카이사르 (기원전 100년 - 기원전 44년)',
    firstNight: 0,
    otherNight: 0,
    reminders: ['취함'],
  },
  {
    id: 'kokrmerchantfallofrome',
    name: '상인',
    image:
      'https://github.com/wonhyo-e/botc-translations/blob/main/assets/icons/Icon_merchant_fall_of_rome.png?raw=true',
    team: 'townsfolk',
    edition: 'rome',
    ability:
      '게임당 한 번 밤에* 당신을 지명했었던 참가자들의 캐릭터를 랜덤한 순서로 알 수 있습니다.',
    flavor:
      '탐욕은 질투하는 자들이 야심찬 자들에게 씌우는 단어일 뿐이다. - 마르쿠스 리키니우스 크라수스 (기원전 115년 - 기원전 53년)',
    firstNight: 0,
    otherNight: 26,
    otherNightReminder:
      "상인이 아직 능력을 사용하지 않았다면: 상인은 좌우 흔듦 '아니오' 또는 끄덕임 '예' 머리 신호 중 하나를 보여줍니다. 상인이 '예'를 선택했다면, '지명함' 토큰이 있는 참가자들의 캐릭터 토큰을 보여주세요(순서 무관). '능력 없음' 토큰을 놓으세요.",
    reminders: ['지명함', '능력 없음'],
  },
  {
    id: 'kokrgladiatorfallofrome',
    name: '검투사',
    image:
      'https://github.com/wonhyo-e/botc-translations/blob/main/assets/icons/Icon_gladiator_fall_of_rome.png?raw=true',
    team: 'townsfolk',
    edition: 'rome',
    ability:
      "게임당 한 번 낮에 공개적으로 살아있는 1명을 선택합니다. 오늘 밤, 그와 당신은 조용히 일어나서 누군가 이길 때까지 '가위바위보'를 합니다. 진 사람은 죽습니다.",
    flavor:
      '용서하시오. 나는 검으로 훈련받았지, 말로 훈련받지 않았소! - 크릭수스 (기원전 72년)',
    firstNight: 0,
    otherNight: 18,
    otherNightReminder:
      '검투사가 오늘 능력을 사용했다면 검투사와 그가 선택한 참가자를 깨우세요: 두 참가자는 조용히 가위바위보를 합니다. 둘 다 같은 것을 냈다면, 다시 합니다. 누군가 이길 때까지 합니다. 진 사람이 죽습니다.',
    reminders: ['결투', '사망', '능력 없음'],
  },
  {
    id: 'kokractorfallofrome',
    name: '배우',
    image:
      'https://github.com/wonhyo-e/botc-translations/blob/main/assets/icons/Icon_actor_fall_of_rome.png?raw=true',
    team: 'townsfolk',
    edition: 'rome',
    ability:
      '게임당 한 번 낮에 공개적으로 참가자 3명의 캐릭터 유형을 추측합니다.(본인 제외, 유형 당 1개) 그날 밤, 그 중 몇 개가 맞았는지 알게 됩니다.',
    flavor:
      '내가 역할을 잘 해냈는가? 그렇다면 내가 퇴장할 때 박수를 쳐 주시오! - 카이사르 아우구스투스 (기원전 63년 - 14년)',
    firstNight: 0,
    otherNight: 25,
    otherNightReminder:
      "배우가 오늘 능력을 사용했다면: '맞힘' 표시의 개수(0, 1, 2, 또는 3)를 수신호로 보여주세요. '능력 없음' 표시를 놓으세요.",
    reminders: ['맞힘', '능력 없음'],
  },
  {
    id: 'kokrblacksmithfallofrome',
    name: '대장장이',
    image:
      'https://github.com/wonhyo-e/botc-translations/blob/main/assets/icons/Icon_blacksmith_fall_of_rome.png?raw=true',
    team: 'townsfolk',
    edition: 'rome',
    ability:
      '당신이 악마에게 처음 죽으면, 당신은 죽지 않고 플레이 중이 아닌 마을 주민 능력 1개를 갖습니다.',
    flavor:
      '모든 새로운 시작은 다른 어떤 시작의 끝에서 온다. - 루키우스 안나이우스 세네카 (기원전 4년 - 65년)',
    firstNight: 0,
    otherNight: 17,
    otherNightReminder:
      '대장장이가 악마에게 살해당했다면. 대장장이에게 게임에 참여하지 않은 마을 주민 캐릭터 토큰을 보여주세요. 게임에 참여하지 않은 캐릭터 토큰과 대장장이 토큰을 교체하세요. 대장장이임 토큰을 제거하세요. 대장장이를 깨워, 새로운 캐릭터 능력을 보여주세요.',
    reminders: ['대장장이임'],
  },
  {
    id: 'kokrscholarfallofrome',
    name: '학자',
    image:
      'https://github.com/wonhyo-e/botc-translations/blob/main/assets/icons/Icon_scholar_fall_of_rome.png?raw=true',
    team: 'townsfolk',
    edition: 'rome',
    ability:
      '당신이 처음으로 살아있는 외부인을 지명하면, 그는 즉시 플레이 중이 아닌 마을 주민이 됩니다. [+1 외부인]',
    flavor:
      '아침에 일어날 때, 살아있다는 것이 얼마나 귀중한 특권인지 생각하라 - 숨 쉬고, 생각하고, 즐기고, 사랑할 수 있다는 것을. - 마르쿠스 아우렐리우스 (121년 - 180년)',
    firstNight: 0,
    otherNight: 2,
    otherNightReminder:
      "학자가 오늘 이방인을 지목했다면, '능력 없음' 토큰을 놓으세요. 지목된 참가자를 깨우고, 새로운 캐릭터 토큰을 보여주세요.",
    reminders: ['전수', '능력 없음'],
    setup: true,
  },
  {
    id: 'kokrthetwinsfallofrome',
    name: '쌍둥이',
    image:
      'https://github.com/wonhyo-e/botc-translations/blob/main/assets/icons/Icon_thetwins_fall_of_rome.png?raw=true',
    team: 'outsider',
    edition: 'rome',
    ability:
      '참가자 1명을 알고 시작합니다. 당신이나 그가 처형 당하면, 모든 마을 주민은 내일 해가 질 때까지 술에 취합니다.',
    flavor:
      '레무스와 로물루스 사이에 일어난 다툼은 지상의 도시가 스스로를 향해 분열되었음을 보여주었다... - 히포의 아우구스티누스 (354년 - 430년)',
    firstNight: 16,
    otherNight: 10,
    firstNightReminder:
      "한 참가자를 지목하세요. 해당 참가자 옆에 '레무스' 토큰을 놓으세요.",
    otherNightReminder:
      "낮에 쌍둥이 중 하나가 처형되어 '마을 주민 취함' 토큰이 놓인 경우, 모든 마을 주민은 해가 질 때까지 술에 취합니다.",
    reminders: ['레무스', '마을 주민 취함'],
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
    id: 'kokrwinemakerfallofrome',
    name: '와인 제조자',
    image:
      'https://github.com/wonhyo-e/botc-translations/blob/main/assets/icons/Icon_winemaker_fall_of_rome.png?raw=true',
    team: 'outsider',
    edition: 'rome',
    ability:
      '당신과 이웃한 2명의 마을 주민은 술에 취합니다. 그러나 격일 밤마다(홀수 또는 짝수 밤), 당신은 해가 질 때까지 술에 취합니다. 당신이 죽더라도 동일합니다.',
    flavor: '와인 속에 진실이 있다. - 대 플리니우스 (23년 - 79년)',
    firstNight: 15,
    otherNight: 9,
    firstNightReminder:
      "'홀수' 또는 '짝수' 토큰을 놓으세요. 홀수라면, 와인제조자는 첫째 밤과 그 후 격일 밤마다 술에 취합니다. 짝수라면, 와인제조자는 둘째 밤과 그 후 격일 밤마다 술에 취합니다.",
    otherNightReminder:
      "어떤 '홀수' 또는 '짝수' 토큰이 놓여있는지 확인하세요. 홀수 밤이고 '홀수' 토큰이 놓여있다면, 와인제조자는 해가 질 때까지 술에 취합니다. 짝수 밤이고 '짝수' 토큰이 놓여있다면, 와인제조자는 해가 질 때까지 술에 취합니다. 그렇지 않다면 그들의 마을 주민 이웃들이 해가 질 때까지 술에 취합니다.",
    reminders: ['짝수', '홀수', '취함'],
  },
  {
    id: 'kokrspartacusfallofrome',
    name: '스파르타쿠스',
    image:
      'https://github.com/wonhyo-e/botc-translations/blob/main/assets/icons/Icon_spartacus_fall_of_rome.png?raw=true',
    team: 'outsider',
    edition: 'rome',
    ability:
      '악한 참가자가 당신이 스파르타쿠스임을 공개적으로 추측하면(게임 당 한 번), 당신의 팀은 패배합니다. 당신은 마을주민으로 보일 수 있습니다. 매일 낮, 스파르타쿠스라고 공개 선언하지 않는다면, 마을주민으로 보일 수 없습니다.',
    flavor:
      '사람은 자신의 운명을 받아들여서는 안 된다. 그렇지 않으면 그것에 의해 파멸될 것이다. - 스파르타쿠스 (기원전 약 103년 - 기원전 71년)',
    firstNight: 0,
    otherNight: 0,
    reminders: ['추측함'],
  },
  {
    id: 'kokrbadomenfallofrome',
    name: '불길한 징조',
    image:
      'https://github.com/wonhyo-e/botc-translations/blob/main/assets/icons/Icon_badomen_fall_of_rome.png?raw=true',
    team: 'outsider',
    edition: 'rome',
    ability:
      '자신이 마을 주민이라고 생각하지만 그렇지 않고, 잘못된 정보를 받습니다. 당신은 악으로 보일 수 있고, 죽더라도 동일합니다.',
    flavor:
      '3월의 이드를 조심하라. - 가이우스 율리우스 카이사르 (기원전 100년 - 기원전 44년)',
    firstNight: 0,
    otherNight: 0,
    reminders: ['불길한 징조임'],
    remindersGlobal: ['Is a Bad Omen'],
    setup: true,
  },
  {
    id: 'kokrtemptressfallofrome',
    name: '요부',
    image:
      'https://github.com/wonhyo-e/botc-translations/blob/main/assets/icons/Icon_temptress_fall_of_rome.png?raw=true',
    team: 'minion',
    edition: 'rome',
    ability:
      '첫날 밤, 두 참가자를 선택합니다. 그들은 자신이 선택된 것을 알게 됩니다. 처음으로 그들 중 1명이 처형으로 죽을 때, 나머지 1명은 악이 됩니다.',
    flavor:
      '삶에서는 아무것도 우리를 갈라놓을 수 없었지만, 이제 죽음에서 우리는 아마도 자리를 바꾸게 될 것이다... - 클레오파트라 7세 테아 필로파토르 (기원전 69년 - 기원전 30년)',
    firstNight: 12,
    otherNight: 3,
    firstNightReminder:
      "유혹자는 두 참가자를 지목합니다. 두 참가자 옆에 '매혹' 토큰을 놓으세요. 두 참가자를 각각 따로 깨우세요. '이 캐릭터가 당신을 선택했습니다' 카드를 보여준 후, 유혹자 토큰을 보여주세요",
    otherNightReminder:
      "'매혹' 토큰이 있는 참가자가 처형되어 죽으면, 그들의 '매혹' 토큰을 제거하세요. 남은 '매혹' 토큰이 있는 참가자는 악이 됩니다. 그들의 '매혹' 토큰을 제거하고 '악' 토큰으로 교체하세요. 악이 된 참가자를 깨워 '캐릭터' 토큰과 엄지 아래 악 신호를 보여주세요.",
    reminders: ['매혹', '악'],
  },
  {
    id: 'kokrharuspexfallofrome',
    name: '내장 점술가',
    image:
      'https://github.com/wonhyo-e/botc-translations/blob/main/assets/icons/Icon_haruspex_fall_of_rome.png?raw=true',
    team: 'minion',
    edition: 'rome',
    ability:
      '매일 밤, 1명을 선택합니다. 그 참가자의 캐릭터를 알게 됩니다. 이 방법으로, 당신이 처음으로 2번 선택하는 참가자는 죽습니다. [+1 스파르타쿠스]',
    flavor:
      '...하지만 경건함과 종교, 그리고 모든 것이 불멸의 신들의 신성한 힘에 의해 통치되고 관리된다는 것을 인식하는 이 특별한 지혜를 통해 우리는 다른 모든 나라와 민족보다 우월했고 지금도 우월하다. - 마르쿠스 툴리우스 키케로 (기원전 106년 - 기원전 46년)',
    firstNight: 14,
    otherNight: 16,
    firstNightReminder:
      "내장 점술가는 한 참가자를 지목합니다. 해당 참가자의 캐릭터 토큰을 보여주세요. 그 참가자 옆에 '예언됨' 토큰을 놓으세요",
    otherNightReminder:
      "내장 점술가는 한 참가자를 지목합니다. 해당 참가자의 캐릭터 토큰을 보여주세요. 그 참가자 옆에 '예언됨' 토큰을 놓으세요: 해당 참가자가 이미 '예언됨' 토큰을 가지고 있다면, 그 참가자는 죽고 점장이 옆에 '살해 불가' 토큰도 놓으세요.",
    reminders: ['예언됨', '사망', '살해 불가'],
    setup: true,
  },
  {
    id: 'kokrglykon1fallofrome',
    name: '글리콘',
    image:
      'https://github.com/wonhyo-e/botc-translations/blob/main/assets/icons/Icon_glykon1_fall_of_rome.png?raw=true',
    team: 'minion',
    edition: 'rome',
    ability:
      '당신은 선으로 보일 수 있습니다. 당신이 지명하는 참가자는 새벽까지 반대 진영으로 보이며, 그가 마을 주민일 경우 중독됩니다.',
    flavor:
      "그들이 들어갔을 때, 물론 그것은 그들에게 기적처럼 보였다. 이전에 작았던 뱀이 며칠 만에 그렇게 큰 뱀이 되었고, 게다가 인간의 얼굴을 하고 있으며 온순했다는 것이! - 루키아노스 (기원전 125년 - 약 180년), 알렉산드로스 '거짓 예언자'에 대해",
    firstNight: 0,
    otherNight: 0,
    reminders: ['뱀에 물림', '중독'],
  },
  {
    id: 'kokraugurfallofrome',
    name: '조점관',
    image:
      'https://github.com/wonhyo-e/botc-translations/blob/main/assets/icons/Icon_augur_fall_of_rome.png?raw=true',
    team: 'minion',
    edition: 'rome',
    ability: "마을 주민이 당신을 지명하면 그는 즉시 '불길한 징조'가 됩니다.",
    flavor:
      "전쟁과 평화 시에, 국내외에서 모든 일이 점을 친 후에만 이루어졌다는 것을? - 티투스 '리비우스' 리비우스 (기원전 59년 - 17년)",
    firstNight: 0,
    otherNight: 0,
  },
  {
    id: 'kokrcleopatrafallofrome',
    name: '클레오파트라',
    image:
      'https://github.com/wonhyo-e/botc-translations/blob/main/assets/icons/Icon_cleopatra_fall_of_rome.png?raw=true',
    team: 'demon',
    edition: 'rome',
    ability:
      '매일 밤, 두 명의 참가자를 선택합니다. 선택된 참가자들이 다음날 지명을 하면, 그날 밤에 사망합니다. 매일, 여행자를 제외한 선한 참가자가 한 명이라도 지명을 하지 않으면, 악한 진영이 승리합니다.',
    flavor:
      '바보! 당신 없이 살 수만 있었다면 난 벌써 백 번도 넘게 당신을 독살했을 거예요! - 클레오파트라 7세 테아 필로파토르 (기원전 69년 - 기원전 30년)',
    firstNight: 13,
    otherNight: 12,
    firstNightReminder: '클레오파트라는 두 참가자를 지목합니다.',
    otherNightReminder:
      "이전에 선택된 참가자가 오늘 지목했다면 그들은 죽습니다. 모든 '선택됨' 토큰을 제거하세요. 클레오파트라는 두 참가자를 지목합니다. 두 참가자 옆에 '선택됨' 토큰을 놓으세요.",
    reminders: ['선택됨', '사망'],
  },
  {
    id: 'kokrcrassusfallofrome',
    name: '크라수스',
    image:
      'https://github.com/wonhyo-e/botc-translations/blob/main/assets/icons/Icon_crassus_fall_of_rome.png?raw=true',
    team: 'demon',
    edition: 'rome',
    ability:
      '매일 밤*, 1명을 선택해 죽입니다. 첫 번째 크라수스가 공개적으로 자신이 스파르타쿠스라고 주장하고, 그날 낮이나 밤에 5명 이상 생존한 상태에서 사망하면, 악한 진영의 참가자 한 명이 크라수스가 됩니다.',
    flavor:
      "위대한 일을 꿈꾸는 자들은 또한 크게 고통받아야 한다... - 루키우스 메스트리우스 '플루타르코스' 플루타르쿠스 (약 49년 - 119년)",
    firstNight: 0,
    otherNight: 13,
    otherNightReminder:
      '크라수스는 한 참가자를 지목합니다. 그 참가자는 죽습니다. 첫 번째 크라수스가 오늘 공개적으로 스파르타쿠스라고 주장하고 자신을 지목했다면(또는 처형되었다면), 5명 이상의 참가자가 살아있는 상태에서, 악 참가자 1명의 캐릭터를 여분의 크라수스 토큰으로 교체하세요. 해당 참가자에게 당신이 새로운 크라수스임을 알도록 토큰을 보여주세요.',
    reminders: ['사망', '첫 크라수스'],
  },
  {
    id: 'kokrhannibalfallofrome',
    name: '한니발',
    image:
      'https://github.com/wonhyo-e/botc-translations/blob/main/assets/icons/Icon_hannibal_fall_of_rome.png?raw=true',
    team: 'demon',
    edition: 'rome',
    ability:
      '당신은 스스로를 선한 캐릭터라고 생각합니다. 하수인들은 플레이 중이지 않은 캐릭터 3개를 알게 됩니다. 매일 밤*, 1명이 죽을 수 있습니다. 첫 번째로 죽은 한니발은 선이 됩니다. [+1 한니발]',
    flavor:
      '나는 길을 찾거나 만들 것이다. - 한니발 (기원전 247년 - 기원전 약 182년)',
    firstNight: 11,
    otherNight: 14,
    firstNightReminder:
      "선한 참가자 2명을 선택하고 '한니발임' 알림 토큰을 놓으세요. 모든 하수인들을 함께 깨워, 한니발들을 보여주고 게임에 참여하지 않는 캐릭터 토큰 3개를 보여주세요(하수인들이 보는 토큰 3개는 동일해야 합니다).",
    otherNightReminder:
      '이야기꾼이 한 참가자를 선택하세요, 그 참가자는 죽습니다. 한니발이 오늘 죽었다면, 그 참가자를 깨워  한니발 토큰과 엄지 위 신호를 통해 선 진영임를 보여주세요.',
    reminders: ['한니발임', '사망'],
    remindersGlobal: ['Is Hannibal', 'Dead'],
    setup: true,
  },
  {
    id: 'kokrcaesarfallofrome',
    name: '카이사르',
    image:
      'https://github.com/wonhyo-e/botc-translations/blob/main/assets/icons/Icon_caesar_fall_of_rome.png?raw=true',
    team: 'demon',
    edition: 'rome',
    ability:
      '매일 밤*, 1명을 선택해 죽입니다. 악한 참가자가 처음 처형으로 죽으면, 그날 밤 추가로 1명을 더 죽일 수 있습니다.',
    flavor:
      '왔노라, 보았노라, 이겼노라. - 가이우스 율리우스 카이사르 (기원전 100년 - 기원전 44년)',
    firstNight: 0,
    otherNight: 15,
    otherNightReminder:
      '오늘 악 참가자가 처형되었다면, 카이사르는 두 참가자를 지목합니다. 그렇지 않다면: 카이사르는 한 참가자를 지목합니다. 선택된 참가자들은 죽습니다.',
    reminders: ['배신', '사용됨', '사망'],
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

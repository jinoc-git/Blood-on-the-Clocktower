import { Job } from '../types';
// 실제 사용하는 직업, JSON 파일의 내용 복붙
export const JOBS: Job[] = [
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

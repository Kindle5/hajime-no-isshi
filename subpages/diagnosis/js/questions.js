'use strict';

// 質問と選択肢（+ 選択肢ごとの属性値）
const questionData = [
  {
    qu: [
      'あなたの自分に対する評価は？',
    ],
    chs: [
      {
        text: '最高。もっと評価して',
        attr: { co: 0, wi: 0, ki: 0, ag: 0, na: 2, sa: 0, ma: 0, ps: 0 },
      },
      {
        text: '割とイケてる',
        attr: { co: 0, wi: 0, ki: 0, ag: 0, na: 1, sa: 0, ma: 0, ps: 0 },
      },
      {
        text: 'まあまあ',
        attr: { co: 0, wi: 0, ki: 0, ag: 0, na: 0, sa: 0, ma: 0, ps: 0 },
      },
      {
        text: '割と残念',
        attr: { co: 0, wi: 0, ki: 0, ag: 0, na: -1, sa: 0, ma: 0, ps: 0 },
      },
      {
        text: '底辺。誰も私を認めない',
        attr: { co: 0, wi: 0, ki: 0, ag: 0, na: -2, sa: 0, ma: 0, ps: 0 },
      },
    ],
  },
  {
    qu: [
      'すし詰めの満員電車の中で、あなたのそばに立っているおとなしそうな女の子が、沈痛な表情で顔を伏せていることに気づきました。',
      'その背後にはスーツの男がピッタリとくっつき、彼女の腰のあたりに手を伸ばしています。',
      '確証はないけど痴漢かも……？',
      'どうしますか？',
    ],
    chs: [
      {
        text: '男の腕を掴んで確保',
        attr: { co: 2, wi: 0, ki: 1, ag: 2, na: 0, sa: 0, ma: 0, ps: 0 },
      },
      {
        text: '偶然を装って間に入る',
        attr: { co: 1, wi: 1, ki: 0, ag: 1, na: 0, sa: 0, ma: 0, ps: 0 },
      },
      {
        text: '物を落として男に拾わせる',
        attr: { co: 0, wi: 2, ki: 0, ag: 1, na: 0, sa: 0, ma: 0, ps: 0 },
      },
      {
        text: 'さり気なく様子見',
        attr: { co: 0, wi: 1, ki: 1, ag: 0, na: 0, sa: 0, ma: 0, ps: 0 },
      },
      {
        text: '女の子の体調を気遣う',
        attr: { co: 0, wi: 0, ki: 2, ag: 1, na: 0, sa: 0, ma: 0, ps: 0 },
      },
      {
        text: '痴漢でも本人が解決すべき',
        attr: { co: 0, wi: 1, ki: -1, ag: 0, na: 0, sa: 0, ma: 0, ps: 2 },
      },
      {
        text: '「ﾊﾞチカ～ン！」と叫ぶ',
        attr: { co: 1, wi: 1, ki: 1, ag: 1, na: 0, sa: 0, ma: 0, ps: -2 },
      },
      {
        text: '面倒事には関わらない',
        attr: { co: 0, wi: 1, ki: 0, ag: 0, na: 0, sa: 0, ma: 0, ps: 1 },
      },
    ],
  },
  {
    qu: [
      '人気のない路地裏で、物陰から現れた男にいきなり殴られました。',
      '相手は身長180cmを超える筋骨隆々の巨漢です。',
      '男は「痛い目に遭いたくないなら、すぐに財布を差し出せ」と脅してきました。',
      'あなたがとっさにとった行動は？',
    ],
    chs: [
      {
        text: 'おとなしく従う',
        attr: { co: 0, wi: 1, ki: 2, ag: 0, na: 0, sa: 0, ma: 0, ps: 0 },
      },
      {
        text: '毅然とした態度で抗議',
        attr: { co: 2, wi: 0, ki: 1, ag: 2, na: 0, sa: 0, ma: 0, ps: 0 },
      },
      {
        text: '反射的にやり返して警告',
        attr: { co: 3, wi: 0, ki: 0, ag: 2, na: 0, sa: 1, ma: 0, ps: 0 },
      },
      {
        text: '金をばら撒いて着実に逃走',
        attr: { co: 0, wi: 2, ki: 1, ag: 1, na: 0, sa: 0, ma: 0, ps: 0 },
      },
      {
        text: 'よそ見させて猛ダッシュ',
        attr: { co: 0, wi: 1, ki: 1, ag: 1, na: 0, sa: -2, ma: 0, ps: 0 },
      },
      {
        text: '油断させ股間を蹴って逃走',
        attr: { co: 2, wi: 1, ki: 0, ag: 2, na: 0, sa: 1, ma: 0, ps: 0 },
      },
      {
        text: '防犯グッズがあるので使用',
        attr: { co: 0, wi: 3, ki: 0, ag: 1, na: 0, sa: 0, ma: 0, ps: 0 },
      },
      {
        text: '密かに110番して時間稼ぎ',
        attr: { co: 1, wi: 2, ki: 0, ag: 0, na: 0, sa: 0, ma: 0, ps: 0 },
      },
      {
        text: '許しを請うまで逆にボコる',
        attr: { co: 3, wi: 0, ki: -2, ag: 2, na: 0, sa: 2, ma: 0, ps: 0 },
      },
    ],
  },
  {
    qu: [
      'あなたは戦災孤児でしたが、とある王国の大臣に奴隷として拾われ、衣食住を与えられました。',
      '主は人徳があるものの、浪費癖のある遊び人です。',
      '国王は有能ですが、戦争好きで親の仇です。',
      '主が反乱を起こして王座を奪うとしたら、あなたはどうしますか？',
    ],
    chs: [
      {
        text: '主を支え、政務に励む',
        attr: { co: 0, wi: 1, ki: 2, ag: 1, na: 0, sa: 0, ma: 0, ps: 0 },
      },
      {
        text: '側近として王宮の暮らしを満喫',
        attr: { co: 0, wi: 0, ki: 1, ag: 0, na: 0, sa: 0, ma: -2, ps: 0 },
      },
      {
        text: '反乱に協力し、金や自由を得る',
        attr: { co: 1, wi: 1, ki: 1, ag: 2, na: 0, sa: 0, ma: 1, ps: 0 },
      },
      {
        text: '汚いけど確実な策を主に献上',
        attr: { co: 0, wi: 2, ki: 1, ag: 2, na: 0, sa: 0, ma: 2, ps: 0 },
      },
      {
        text: '主を売って国王に仕える',
        attr: { co: 0, wi: 2, ki: -1, ag: 2, na: 0, sa: 0, ma: 2, ps: 1 },
      },
      {
        text: '主を逆賊として捕え、自分が王に',
        attr: { co: 1, wi: 2, ki: -2, ag: 2, na: 0, sa: 0, ma: 2, ps: 2 },
      },
      {
        text: '争いを避けて世を捨てる',
        attr: { co: -1, wi: 0, ki: 3, ag: -1, na: -1, sa: 0, ma: 0, ps: 0 },
      },
      {
        text: '何も干渉せず見て見ぬふり',
        attr: { co: 0, wi: 0, ki: 1, ag: -1, na: 0, sa: 0, ma: 0, ps: 0 },
      },
      {
        text: '有能な人を王に推薦し、主を説得',
        attr: { co: 1, wi: 0, ki: 2, ag: 1, na: 0, sa: 0, ma: 0, ps: 0 },
      },
    ],
  },
  {
    qu: [
      'あなたはとある国の凄腕兵士でしたが、減税を求める世論に押された国が、軍事費を削減し路頭に迷いました。',
      'そんなある日、宇宙人が地球に襲来し、人類は滅亡の危機に。',
      '国では予備役・退役軍人の活用を求める世論が高まりました。',
      'あなたの腕を知る戦友は軍の幹部になっており、自分の指揮する精鋭部隊にあなたを誘いました。',
      'あなたは何を理由に戦いますか？',
    ],
    chs: [
      {
        text: '金・生活のため',
        attr: { co: 0, wi: 2, ki: 0, ag: 1, na: 0, sa: 0, ma: 0, ps: 0 },
      },
      {
        text: '人々の幸せ',
        attr: { co: 0, wi: 0, ki: 2, ag: 2, na: 0, sa: 0, ma: 0, ps: 0 },
      },
      {
        text: '国家の安泰',
        attr: { co: 1, wi: 1, ki: 0, ag: 2, na: 0, sa: 0, ma: 0, ps: 0 },
      },
      {
        text: '退役軍人への賠償',
        attr: { co: 1, wi: 0, ki: 1, ag: 2, na: 0, sa: 0, ma: 0, ps: 0 },
      },
      {
        text: '自分の力が活かせるから',
        attr: { co: 2, wi: 0, ki: 0, ag: 2, na: 0, sa: 0, ma: 0, ps: 0 },
      },
      {
        text: '誰かが戦う必要がある',
        attr: { co: 1, wi: 0, ki: 1, ag: 1, na: 0, sa: 0, ma: 0, ps: 0 },
      },
      {
        text: '国を支配する力を得るため',
        attr: { co: 2, wi: 1, ki: -1, ag: 2, na: 0, sa: 0, ma: 2, ps: 0 },
      },
      {
        text: '宇宙人の技術に触れたい',
        attr: { co: 1, wi: 2, ki: 0, ag: 2, na: 0, sa: 0, ma: 0, ps: 1 },
      },
      {
        text: '気が進まないので断る',
        attr: { co: 0, wi: 0, ki: 0, ag: -1, na: 0, sa: 0, ma: 0, ps: 0 },
      },
      {
        text: '人々が苦しむ姿を見て回る',
        attr: { co: 1, wi: 1, ki: -2, ag: 2, na: 0, sa: 2, ma: 0, ps: 0 },
      },
      {
        text: 'どうせ死ぬなら誰かを救う',
        attr: { co: 1, wi: 0, ki: 1, ag: 1, na: -2, sa: 0, ma: 0, ps: 0 },
      },
      {
        text: '戦友に恩を売っておく',
        attr: { co: 1, wi: 1, ki: 0, ag: 1, na: 0, sa: 0, ma: 1, ps: 0 },
      },
      {
        text: '戦友の力になるため',
        attr: { co: 1, wi: 0, ki: 1, ag: 1, na: 0, sa: 0, ma: 0, ps: 0 },
      },
    ],
  },
];

const attrMaxMinValues = { max: {}, min: {} }; // 選択によるそれぞれの属性の累計最大・最小値
const queAttrData = []; // それぞれの質問の選択肢に割り振られた属性値の配列

// 選択肢に割り振られた属性値をqueAttrDataにまとめる
{
  const keys = [
    'courage',
    'wise',
    'kind',
    'aggressive',
    'narcissism',
    'sadism',
    'machiavellism',
    'psychopathy',
  ];
  const keys2 = [
    'co',
    'wi',
    'ki',
    'ag',
    'na',
    'sa',
    'ma',
    'ps',
  ];

  for (let i = 0; i < questionData.length; i++) {
    // i番目の質問リストの各選択肢に割り振られた属性値を取得
    const choiceAttrList = [];
    const queAttrMax = {};
    const queAttrMin = {};
  
    for (let j = 0; j < questionData[i].chs.length; j++) {
      const attrObj = questionData[i].chs[j].attr;
      const choiceAttr = {};
      for (let k = 0; k < keys.length; k++) {
        choiceAttr[keys[k]] = attrObj[keys2[k]];

        // その質問における各属性値の最大・最小値を求める処理
        if (j !== 0) {
          if (queAttrMax[keys[k]] < choiceAttr[keys[k]]) {
            queAttrMax[keys[k]] = choiceAttr[keys[k]];
          }
          if (queAttrMin[keys[k]] > choiceAttr[keys[k]]) {
            queAttrMin[keys[k]] = choiceAttr[keys[k]];
          }
        } else {
          queAttrMax[keys[k]] = choiceAttr[keys[k]];
          queAttrMin[keys[k]] = choiceAttr[keys[k]];
        }
      }
      choiceAttrList.push(choiceAttr);
    }
    queAttrData.push(choiceAttrList);

    // 選択肢問題全体において各属性の最大・最小値を求める処理
    for (let j = 0; j < keys.length; j++) {
      if (i !== 0) {
        attrMaxMinValues.max[keys[j]] += queAttrMax[keys[j]];
        attrMaxMinValues.min[keys[j]] += queAttrMin[keys[j]];
      } else {
        attrMaxMinValues.max[keys[j]] = queAttrMax[keys[j]];
        attrMaxMinValues.min[keys[j]] = queAttrMin[keys[j]];
      }
    }
  }
}

// 質問と選択肢をページにセットする
if (document.querySelector('main.questions')) {
  for (let i = 0; i < questionData.length; i++) {
    // i番目の質問をページにセットする
    const quChsSet = questionData[i]; // 質問文と選択肢のデータセット
    
    // 質問文の要素を作成
    const div = document.createElement('div');
    const p = document.createElement('p');
    for (let j = 0; j < quChsSet.qu.length; j++) {
      const qRow = quChsSet.qu[j];
      const span = document.createElement('span');
      const br = document.createElement('br');
      span.textContent = qRow;
      p.appendChild(span);
      p.appendChild(br);
    }
    if (quChsSet.qu.length > 1) p.style = 'font-size: 18px';
    div.classList.add('que');
    div.appendChild(p);
  
    // 選択肢リストの要素を作成
    const ul = document.createElement('ul');
    for (let j = 0; j < quChsSet.chs.length; j++) {
      const choice = quChsSet.chs[j].text;
      const li = document.createElement('li');
      li.textContent = choice;
      ul.appendChild(li);
    }
    ul.classList.add('choices-list');
  
    // 戻るボタンと次へボタン作成
    const backBtn = document.createElement('button');
    const nextBtn = document.createElement('button');
    backBtn.textContent = '戻る';
    nextBtn.textContent = '次へ';
    backBtn.classList.add('btn', 'back');
    nextBtn.classList.add('btn', 'next', 'block');
  
    // 作成した要素をページに追加
    const main = document.querySelector('main.sb-main.diagnosis');
    const container = document.createElement('div');
    container.classList.add('container1', 'diagnosis', 'choice');
    container.appendChild(div);
    container.appendChild(ul);
    container.appendChild(backBtn);
    container.appendChild(nextBtn);
    main.appendChild(container);
  }
}

// 確認用
// console.log('attrMaxMinValues:', attrMaxMinValues);
// console.log('queAttrData:', queAttrData);
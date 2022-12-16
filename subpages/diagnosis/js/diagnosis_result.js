'use strict';

// html要素作成
const graphArea = document.querySelector('main.diagnosis .container1 .graph');
const bfNames = ['協調性', '外向性', '開放性', '誠実性', '神経症的傾向']; // BigFive 性格五因子
const bfFacet = {
  '協調性': [
    '利他性',
    '協調性',
    '謙虚さ',
    '倫理観',
    '共感性',
    '素直さ',
  ],
  '外向性': [
    '活発さ',
    '自己主張',
    '雰囲気',
    '刺激欲求',
    '心の拠り所',
    '社交性',
  ],
  '開放性': [
    '冒険心',
    '芸術観',
    '情動性',
    '思考',
    '知的態度',
    '社会的態度',
  ],
  '誠実性': [
    '向上心',
    '慎重さ',
    '忠実さ',
    '秩序性',
    '自制力',
    '自己効力感',
  ],
  '神経症的傾向': [
    '怒り',
    '不安',
    '抑鬱傾向',
    '衝動性',
    '自意識',
    '気弱さ',
  ],
}; // BFのファセット一覧
const bfOmit = ['agr', 'ext', 'op', 'con', 'neu'];
const bfLabelNames = [
  ['友愛 / 調和', '挑戦 / 孤高'],
  ['外向 / 活発', '内向 / 平穏'],
  ['独創 / 冒険', '保守 / 堅実'],
  ['秩序 / 誠実', '自由 / 奔放'],
  ['直情 / 抑鬱', '冷静 / 明朗'],
];
const facetLabelNames = [
  [
    ['利他的', '利己的'],
    ['寛容', '毅然'],
    ['慎み深い', '誇り高い'],
    ['倫理優先', '結果優先'],
    ['情け深い', '独立的'],
    ['当てが多い', '用心深い'],
  ],
  [
    ['精力的', '穏やか'],
    ['積極的', '控えめ'],
    ['明 or 柔', '暗 or 硬'],
    ['強い', '弱い'],
    ['外に求める', '内に求める'],
    ['社交的', '一匹狼'],
  ],
  [
    ['冒険的', '手堅い'],
    ['関心がある', '関心がない'],
    ['情緒豊か', '無感情'],
    ['理想主義', '現実主義'],
    ['哲学的', '統計的'],
    ['革新的', '保守的'],
  ],
  [
    ['上昇志向', '現状に満足'],
    ['慎重', '大胆'],
    ['忠実', '自由'],
    ['組織的', '奔放'],
    ['自制心がある', '自制心がない'],
    ['自分を信じる', '自分を信じない'],
  ],
  [
    ['激情的', '温和'],
    ['心配性', '楽観的'],
    ['強い', '弱い'],
    ['誘惑に弱い', '節度がある'],
    ['自意識過剰', '傍若無人'],
    ['逆境に弱い', '逆境に強い'],
  ],
];
function createElem(tag) {
  return document.createElement(tag);
}
{ // グラフ表示箇所作成
  function setLabel(parentNode, labelNameSet) {
    // parentNode > div.label
    const d_label = createElem('div');
    d_label.classList.add('label');
    parentNode.appendChild(d_label);
  
    // parentNode > div.label > span.pos
    const s_pos = createElem('span');
    s_pos.classList.add('pos');
    s_pos.textContent = labelNameSet[0];
    d_label.appendChild(s_pos);
  
    // parentNode > div.label > span.neg
    const s_neg = createElem('span');
    s_neg.classList.add('neg');
    s_neg.textContent = labelNameSet[1];
    d_label.appendChild(s_neg);
  }
  function setBarspace(parentNode, item) {
    // parentNode > div.barspace
    const d_barspace = createElem('div');
    d_barspace.classList.add('barspace');
    parentNode.appendChild(d_barspace);
  
    // parentNode > div.barspace > div.case.pos
    const d_posCase = createElem('div');
    d_posCase.classList.add('case', 'pos');
    d_barspace.appendChild(d_posCase);
  
    // parentNode > div.barspace > div.case.pos > div.pole
    const d_posPole = createElem('div');
    d_posPole.classList.add('pole');
    d_posCase.appendChild(d_posPole);
  
    if (item) {
      // parentNode > div.barspace > span.item
      const s_item = createElem('span');
      s_item.classList.add('item');
      s_item.textContent = item;
      d_barspace.appendChild(s_item);
    } else {
      // parentNode > div.barspace > i
      const icon = createElem('i');
      icon.classList.add('bi', 'bi-suit-heart-fill');
      d_barspace.appendChild(icon);
    }
  
    // parentNode > div.barspace > div.case.neg
    const d_negCase = createElem('div');
    d_negCase.classList.add('case', 'neg');
    d_barspace.appendChild(d_negCase);
  
    // parentNode > div.barspace > div.case.neg > div.pole
    const d_negPole = createElem('div');
    d_negPole.classList.add('pole');
    d_negCase.appendChild(d_negPole);
  }
  function setValue(parentNode, isSup) {
    // parentNode > div.value
    const d_value = createElem('div');
    d_value.classList.add('value');
    parentNode.appendChild(d_value);
  
    // parentNode > div.value > div.pos
    const d_posValueSpace = createElem('div');
    d_posValueSpace.classList.add('pos');
    d_value.appendChild(d_posValueSpace);
  
    // parentNode > div.value > div.pos > span.base
    const s_posBase = createElem('span');
    s_posBase.classList.add('base');
    d_posValueSpace.appendChild(s_posBase);
  
    if (isSup) {
      // parentNode > div.value > div.pos > span.sup
      const s_posSup = createElem('span');
      s_posSup.classList.add('sup');
      d_posValueSpace.appendChild(s_posSup);
    }
  
    // parentNode > div.value > div.neg
    const d_negValueSpace = createElem('div');
    d_negValueSpace.classList.add('neg');
    d_value.appendChild(d_negValueSpace);
  
    // parentNode > div.value > div.neg > span.base
    const s_negBase = createElem('span');
    s_negBase.classList.add('base');
    d_negValueSpace.appendChild(s_negBase);
  
    if (isSup) {
      // parentNode > div.value > div.neg > span.sup
      const s_negSup = createElem('span');
      s_negSup.classList.add('sup');
      d_negValueSpace.appendChild(s_negSup);
    }
  }
  function setFacet(parentNode, index) {
    // parentNode > div.facet
    const d_facet = createElem('div');
    d_facet.classList.add('facet', bfOmit[index], 'disappear');
    parentNode.appendChild(d_facet);

    for (let j = 0; j < facetLabelNames[index].length; j++) {
      const facetLabel = facetLabelNames[index][j];
      
      setLabel(d_facet, facetLabel)
      setBarspace(d_facet, bfFacet[bfNames[index]][j]);
      setValue(d_facet, true);
    }
  }
  for (let i = 0; i < bfNames.length; i++) {
    // div.row
    const d_row = createElem('div');
    d_row.classList.add('row');
    graphArea.appendChild(d_row);
  
    // div.row > div.label
    setLabel(d_row, bfLabelNames[i]);
    
    // div.row > div.barspace
    setBarspace(d_row);
  
    // div.row > div.value
    setValue(d_row, true);
  
    // div.row > div.facet
    setFacet(d_row, i);
  }
}

// webストレージからデータ受け取り
const userData = JSON.parse(sessionStorage.getItem('userData'));
const resultChara = JSON.parse(sessionStorage.getItem('resultChara'));
const bestPartner = JSON.parse(sessionStorage.getItem('bestPartner'));
const notRedirect = sessionStorage.getItem('notRedirect');
const comparedData = JSON.parse(sessionStorage.getItem('comparedData')); // 確認用

// html中の要素取り込み
const userNameElems = document.querySelectorAll('.username');
const resultImg = document.getElementById('r-img');
const kirakira = document.querySelector('#kirakira img');
const concText = document.getElementById('conc-rate');
const diagnosisBox = document.querySelector('main.diagnosis');

const posPoles = document.querySelectorAll('.result .graph > .row > .barspace .pos .pole');
const negPoles = document.querySelectorAll('.result .graph > .row > .barspace .neg .pole');
const resultPosBF = document.querySelectorAll('.result .graph > .row > .value .pos .base');
const resultNegBF = document.querySelectorAll('.result .graph > .row > .value .neg .base');
const rSupPBF = document.querySelectorAll('.result .graph > .row > .value .pos .sup');
const rSupNBF = document.querySelectorAll('.result .graph > .row > .value .neg .sup');
const hearts = document.querySelectorAll('.result .graph > .row > .barspace .bi');
const facetGraphNodes = document.querySelectorAll('.result .graph > .row > .facet');
const graphFacetNodes = {
  bfOmitNames: ['agr', 'ext', 'op', 'con', 'neu'],
  nodeTypes: [['barspace', 'pole'], ['value', 'base'], ['value', 'sup']],
  items: ['Poles', 'Values', 'Sup'],
  facetPosPoles: [],
  facetNegPoles: [],
  facetPosValues: [],
  facetNegValues: [],
  facetPosSup: [],
  facetNegSup: [],
  getFacetNodes: function() {
    for (let i = 0; i < this.bfOmitNames.length; i++) {
      const facet = this.bfOmitNames[i];

      for (let j = 0; j < this.nodeTypes.length; j++) {
        const cName1 = this.nodeTypes[j][0];
        const cName2 = this.nodeTypes[j][1];
        const itemName = this.items[j];
        const posNodes = document.querySelectorAll(`.result .graph > .row > .facet.${facet} .${cName1} .pos .${cName2}`);
        const negNodes = document.querySelectorAll(`.result .graph > .row > .facet.${facet} .${cName1} .neg .${cName2}`);

        this[`facetPos${itemName}`].push(posNodes);
        this[`facetNeg${itemName}`].push(negNodes);
      }
    }
  }
};
graphFacetNodes.getFacetNodes();

const bfComments = document.querySelectorAll('.result .comments .bfcomme');
const uTendencies = document.querySelectorAll('.result .comments .u-tendency');

const attrElem = document.getElementById('attribute');
const attrEngElem = document.getElementById('attr-eng');
const attrDescElem = document.getElementById('attr-desc');

const shareTwitterBtn = document.querySelector('#share .twitter');
const shareUrlBtnArea = document.querySelectorAll('#share .share-result');

// グローバルスコープ
charaInfos; // from chara_data.js
// キャラクターの情報
// charaInfos[i]
// { name: "Name", jpName: "名前", pbfRate: [1,2,3,4,5], nbfRate: [1,2,3,4,5], bfRate: [1,2,3,4,5] ,queAns: [0,5,10,15,16,16], attr: { courage: 9, wise: 9, kind: 9, aggressive: 9, narcissism: 9, sadism: 9, machiavellism: 9, psychopathy: 9 } }

rcdata; // from chara_data.js
// 診断結果のキャラのデータ
// { name: "Name", jpName: "名前", pbfRate: [1,2,3,4,5], nbfRate: [1,2,3,4,5], bfRate: [1,2,3,4,5] ,queAns: [0,5,10,15,16,16], attr: { courage: 9, wise: 9, kind: 9, aggressive: 9, dark: 9 } }

// その他
const bfTendencies = [
  { pos: '友愛・調和', neg: '挑戦・孤高' },
  { pos: '外向・活発', neg: '内向・平穏' },
  { pos: '独創・冒険', neg: '保守・堅実' },
  { pos: '秩序・誠実', neg: '自由・奔放' },
  { pos: '不安定', neg: '安定' },
]; // 性格因子ごとの傾向を表す単語
const charaBFComments = {
  '協調性': [
    '完全に挑戦・孤高型です。',
    'かなりの挑戦・孤高型です。',
    '挑戦・孤高型です。',
    'やや挑戦・孤高型です。',
    'バランス型です。',
    'やや友愛・調和型です。',
    '友愛・調和型です。',
    'かなりの友愛・調和型です。',
    '完全に友愛・調和型です。',
  ],
  '外向性': [
    '完全に内向・平穏型です。',
    'かなりの内向・平穏型です。',
    '内向・平穏型です。',
    'やや内向・平穏型です。',
    'バランス型です。',
    'やや外向・活発型です。',
    '外向・活発型です。',
    'かなりの外向・活発型です。',
    '完全に外向・活発型です。',
  ],
  '開放性': [
    '完全に保守・堅実型です。',
    'かなりの保守・堅実型です。',
    '保守・堅実型です。',
    'やや保守・堅実型です。',
    'バランス型です。',
    'やや独創・冒険型です。',
    '独創・冒険型です。',
    'かなりの独創・冒険型です。',
    '完全に独創・冒険型です。',
  ],
  '誠実性': [
    '完全に自由・奔放型です。',
    'かなりの自由・奔放型です。',
    '自由・奔放型です。',
    'やや自由・奔放型です。',
    'バランス型です。',
    'やや秩序・誠実型です。',
    '秩序・誠実型です。',
    'かなりの秩序・誠実型です。',
    '完全に秩序・誠実型です。',
  ],
  '神経症的傾向': [
    'いつも心に余裕があります。',
    'かなり心に余裕があります。',
    '心に余裕があります。',
    '少し心に余裕があります。',
    '心に余裕がある時もあれば、ない時もあります。',
    '少し心に余裕がありません。',
    '心に余裕がありません。',
    'かなり心に余裕がありません。',
    'いつも心に余裕がありません。',
  ],
}; // BFの5段階評価を元にした性格傾向のテキストデータ
const attrNames = [
  'courage',
  'wise',
  'kind',
  'aggressive',
  'narcissism',
  'sadism',
  'machiavellism',
  'psychopathy',
  'playful',
  'dark',
]; // 属性の一覧
const attribute = {
  mainAttr: [ // ベースとなる1つの属性に傾斜した思想タイプ
    {
      name: '勇敢な主人公',
      type: 'Courage',
      req: [{ attr: 'courage', min: 3 }],
      priority: 20,
      text: [
        'あなたは、勇に傾斜した思想の持ち主のようです。',
        '判断の難しい場面や辛くて苦しい状況も、自ら動いてそれらを打開します。',
        'バイタリティに自信があれば、さらにその傾向が強いかも。',
        '多少のことでは怯まず、困難や恐怖に率先して立ち向かう主人公的人物。',
      ],
    },
    {
      name: '聡明な優等生',
      type: 'Wisdom',
      req: [{ attr: 'wise', min: 3 }],
      priority: 20,
      text: [
        'あなたは、知に傾斜した思想の持ち主のようです。',
        '物事には知識や情報を用いて、なるべく安全かつ冷静に対処します。',
        '手際が良く作業の効率化が好きな人は、よりその傾向が強いかも。',
        '情に流されすぎず、力に頼りすぎず、最善ルートを探し出す人物。',
      ],
    },
    {
      name: '優しい癒やし処',
      type: 'Kindness',
      req: [{ attr: 'kind', min: 3 }],
      priority: 20,
      text: [
        'あなたは、和に傾斜した思想の持ち主のようです。',
        '自分が多少嫌な目に遭っても笑って水に流します。',
        '人と関わるのが好きな人は、よりその傾向が強いかも。',
        '場を和ませたり誰かの心の支えとなったり、周囲と円満な関係を築く人。',
      ],
    },
  ],
  subAttr: [ // ベース属性のうち2つの値が他の1つに比べて有意に高い思想タイプ
    {
      name: '知勇の二刀流',
      type: 'Courage and Wisdom',
      req: ['sp', { sum: 7, attrs: ['wise', 'courage'] }, { min: 3, attrs: ['wise', 'courage'] }],
      priority: 10,
      text: [
        'あなたは、知勇を兼ね備えた思想の持ち主のようです。',
        '時と場合に応じて柔軟に自分の行動を変えます。',
        '周囲の人との和をあまり重視しない場合、よりその傾向が強いかも。',
        '状況を読む能力や場を切り抜ける度胸があり、単独でも成果を上げる人物。',
      ],
    },
    {
      name: '愛と勇気が友達',
      type: 'Kindness and Courage',
      req: ['sp', { sum: 7, attrs: ['kind', 'courage'] }, { min: 3, attrs: ['kind', 'courage'] }],
      priority: 10,
      text: [
        'あなたは、情と勇気を兼ね備えた思想の持ち主のようです。',
        '他者のために、思い切った行動に出ることもあります。',
        '物事をあまり深く考えない場合、よりその傾向が強いかも。',
        '友情に厚く仲間の苦境には真っ先に駆けつけたい、そんな情熱的な人物。',
      ],
    },
    {
      name: '世渡り上手',
      type: 'Wisdom and Kindness',
      req: ['sp', { sum: 7, attrs: ['kind', 'wise'] }, { min: 3, attrs: ['kind', 'wise'] }],
      priority: 10,
      text: [
        'あなたは、聡明さと情を兼ね備えた思想の持ち主のようです。',
        '相手に応じて柔軟に対応を変え、良い関係を築きます。',
        '他者とぶつかることを嫌う場合、よりその傾向が強いかも。',
        '困っている人の相談に乗ったり嫌な人をいなしたりと、社交術に長けた人物。',
      ],
    },
  ],
  exAttr: [ // 条件を満たすと分類される特殊な思想タイプ
    {
      name: '狂気と暴虐',
      type: 'Berserker',
      req: [{ attr: 'dark', min: 8 }, { attr: 'kind', max: -5 }, { attr: 'courage', min: 4 }],
      priority: 0,
      text: [
        'あなたは、荒んだ思想の持ち主のようです。',
        '他者を傷つけることに抵抗を感じず、むしろ快感を感じているかも。',
        '自ら諍いを引き起こしたり、問題を大きくしたりすることも。',
        '他人の不幸は蜜の味。三度の飯より争いが好き。まさに血に飢えた野獣。',
      ],
    },
    {
      name: '混沌',
      type: 'Abyss',
      req: [{ attr: 'dark', min: 4 }, { attr: 'kind', max: 0 }],
      priority: 2,
      text: [
        'あなたは、どこか影のある思想の持ち主のようです。',
        '他人にあまり関心はなく、嫌いな人には攻撃的になることがあります。',
        'その代わり、知や勇に傾斜した思想を持っている傾向にあります。',
        '怒りや憎しみに囚われたり、悲嘆や苦悩を抱えている可能性がある人。',
      ],
    },
    {
      name: '自己犠牲',
      type: 'Self-Sacrifice',
      req: [{ attr: 'narcissism', max: -4 }, { attr: 'kind', min: 5 }],
      priority: 1,
      text: [
        'あなたは、他人に尽くす利他的な思想の持ち主のようです。',
        '基本的に他者への寛容さや親愛に溢れています。',
        'しかし、やや自暴自棄になっている側面があるかも。',
        '周囲の人々に優しい一方で、自分への労りや気遣いが不足しがちな人。',
      ],
    },
    {
      name: '勇猛な豪傑',
      type: 'Courage and Bravery',
      req: ['sp', { sum: 14, attrs: ['courage', 'aggressive'] }],
      priority: 2,
      text: [
        'あなたは、勇気と武に偏った思想の持ち主のようです。',
        '興味のない他者や物事への関心は薄く、どちらかというとマイペースかも。',
        '負けん気が強かったり、喧嘩っ早かったりで荒事は十八番。',
        '大切なものが傷つけられたら、相手が誰だろうとブチのめす勇猛果敢な人。',
      ],
    },
    {
      name: 'コミュ力お化け',
      type: 'Fuckin\' Friendly',
      req: [{ attr: 'aggressive', min: 4 }, { attr: 'kind', min: 6 }],
      priority: 3,
      text: [
        'あなたは、積極的に他者と関わる思想の持ち主のようです。',
        'どんな人にも良いところがあると思っていて、誰かを嫌うことが苦手かも。',
        'ただ優しいだけでなく、自分から積極的に困っている人を支えたい。',
        '人が好きで、人との関わりが生き甲斐。友達千人を成し遂げる人物。',
      ],
    },
    {
      name: 'クレバーな曲者',
      type: 'Tact and Wile',
      req: [{ attr: 'aggressive', min: 5 }, { attr: 'wise', min: 6 }],
      priority: 3,
      text: [
        'あなたは、知謀や機知に富んだ思想の持ち主のようです。',
        '万事において積極的に自分の知識・技能を活用するため、自己中に思われることがあるかも。',
        '悪知恵にも長け、常識外れな発想も大事にしたい。',
        '自分の聡明さと強かさを武器に、しがらみに囚われず自由に活躍する人。',
      ],
    },
    {
      name: 'バランス',
      type: 'Balance',
      req: ['sp', { sum: 10, attrs: ['courage', 'wise', 'kind', 'playful'] }, { min: 2, attrs: ['courage', 'wise', 'kind', 'playful'] }],
      priority: 3,
      text: [
        'あなたはバランスのとれた思想の持ち主です。',
        '常識的な感性や思考を持ち、どちらかというと陽気で平和や自由が好きかも。',
        'しかし、状況によっては自分や誰かのために立ち上がります。',
        '時に優しく勇敢で機転が利く、堅苦しすぎない臨機応変な人。',
      ],
    },
    {
      name: '遊び人',
      type: 'Playgirl',
      req: [{ attr: 'playful', min: 6 }],
      priority: 1,
      text: [
        'あなたは、無邪気で明るい思想の持ち主のようです。',
        'ムードメーカーやトラブルメーカーで、お祭り騒ぎの常連かも。',
        'たまに思いやりや能力を発揮すると予想外の働きに驚かれるポジション。',
        '自由気ままに生き、適度に働いて適度に考える。人生楽しんだ者勝ちな人。',
      ],
    },
    {
      name: '無気力',
      type: 'Spiritless',
      req: [{ attr: 'aggressive', max: -2 }],
      priority: 0,
      text: [
        'あなたは、やる気と積極性に欠けた思想の持ち主のようです。',
        'かつては真面目だったけど、何かが原因で燃え尽きてしまったという可能性も。',
        '何かにつけサボりたがり、義務や規則に縛られることが嫌い。',
        '潜在能力があっても今は使う気にならない。悟りや諦観の境地にいる人。',
      ],
    },
    {
      name: '英雄',
      type: 'Hero',
      req: [{ attr: 'aggressive', min: 5 }, { attr: 'courage', min: 5 }, { attr: 'kind', min: 3 }, { attr: 'sadism', max: 0 }, { attr: 'machiavellism', max: 1 }, { attr: 'psychopathy', max: 0 }],
      priority: 1,
      text: [
        'あなたは、英雄的な思想の持ち主のようです。',
        '積極的に他人を助け、困難な道にも挑戦する傾向があります。',
        'そのせいで心身に生傷が絶えず、たびたび思い悩むことがあるかも。',
        '思いやりの心と危険を顧みない勇気。異世界転生で勇者に選ばれる人。',
      ],
    },
    {
      name: '奸雄',
      type: 'Crafty Hero',
      req: [{ attr: 'aggressive', min: 4 }, { attr: 'courage', min: 4 }, { attr: 'wise', min: 4 }, { attr: 'machiavellism', min: 2 }],
      priority: 1,
      text: [
        'あなたは、覇道を往く思想の持ち主のようです。',
        '目的がハッキリしている時の決断力と判断力がずば抜けています。',
        '他者との関係を自分が得る利益で測りがちで、必要とあらば手を汚すことも…？',
        '邪魔者を退けながら着々と野望に向かって突き進む。まさに乱世の奸雄。',
      ],
    },
  ],
  defAttr: [ // どれにも該当しない場合
    {
      name: '無地',
      type: 'None',
      priority: 30,
      req: [],
      text: [
        'あなたは、尖った思想を持たない人物のようです。',
        '概ね常識的な感性や思考を持っています。',
        '投げやりとまではいかないものの、状況や場の流れに逆らわず、それに乗って生きているかも。',
        '俗世への関心や自主性は薄く、ただあるがままを受け入れて生きる人。',
      ],
    },
  ],
  referTypeDate: function(types, attr) { // 受け取ったカテゴリーから回答の属性値にマッチする思想タイプを返す
    const matchTypes = [];

    for (let i = 0; i < types.length; i++) { // カテゴリー中の思想タイプを1つずつ照合する
      const attrTypes = types[i];
      let trueCount = 0;
      if (attrTypes.req[0] === 'sp') { // 特殊な条件を要求する場合
        trueCount++;
        for (let j = 1; j < attrTypes.req.length; j++) {
          let terms;
          const req = attrTypes.req[j];
          const firstKey = Object.keys(req)[0];

          if (firstKey === 'sum') { // 複数の属性の合計が一定の値を満たすことを要求する場合
            // req = { sum: value, attrs: ['属性1', '属性2'...] }
            let sum = 0;
            req.attrs.forEach(refAttr => { // user or chara Attrの関連する属性値を合計
              sum += attr[refAttr];
            });
            terms = sum >= req.sum;
          } else if (firstKey === 'min') { // 指定された属性すべてが一定の値以上であることを要求する場合
            terms = req.attrs.every(reqAttr => attr[reqAttr] >= req.min);
          }

          if (terms) {
            trueCount++;
          } else { // 条件が不一致なら条件照合ループから抜ける
            break;
          }
        }
      } else {
        // タイプの条件(req)が合致するかチェック
        for (let j = 0; j < attrTypes.req.length; j++) {
          const req = attrTypes.req[j]; // { attr: '属性', max or min: value }
          const reqAttr = Object.entries(req); // ['attr', '属性'], ['max or min', value]
          const av = attr[reqAttr[0][1]]; // user or chara Attr['属性']
          const terms = reqAttr[1][0] === 'min' ? av >= reqAttr[1][1] : av <= reqAttr[1][1];
          
          if (terms) {
            trueCount++;
          } else { // 条件が不一致なら条件照合ループから抜ける
            break;
          }
        }
      }

      if (trueCount === attrTypes.req.length) { // 条件を全て満たせばその思想タイプを候補に選出
        matchTypes.push(attrTypes);
      }
    }
    return matchTypes;
  },
  returnAttrType: function(attr) { // 受け取った回答の属性値にマッチする思想タイプを探して返す処理
    let resultType;
    const keepTypes = []; // 候補に上がった思想タイプをキープする変数

    const attrCategories = ['mainAttr', 'subAttr', 'exAttr', 'defAttr'];
    for (let i = 0; i < attrCategories.length; i++) {
      const attrTypes = this[attrCategories[i]];

      const matchTypes = attribute.referTypeDate(attrTypes, attr);
      if (matchTypes.length > 0) { // 思想タイプの候補があればそれをキープ
        matchTypes.forEach(type => keepTypes.push(type));
      }
    }

    // 優先順位でソート
    keepTypes.sort((a, b) => a.priority - b.priority);

    // 同率一位の候補があれば抽出、なければ候補確定
    const narrow = [];
    for (let i = 0; i < keepTypes.length; i++) {
      if (keepTypes[i].priority === keepTypes[0].priority) {
        narrow.push(keepTypes[i]);
      } else {
        break;
      }
    }

    if (narrow.length > 1) { // 同率一位の候補があった場合
      // 条件を満たして余りある思想タイプを候補に優先する
      let keepType;
      let hurdle;
      for (let i = 0; i < narrow.length; i++) {
        let margin = 0;
        if (narrow[i].req[0] === 'sp') {
          const req = narrow[i].req[1]; // { sum: num1, attrs: ['属性1'...] }
          for (let j = 0; j < req.attrs.length; j++) {
            const attrName = req.attrs[j];
            margin += attr[attrName];
          }
          margin /= req.attrs.length;
        } else {
          for (let j = 0; j < narrow[i].req.length; j++) {
            const req = narrow[i].req[j]; // { attr: '属性', max or min: value }
            const reqAttr = Object.entries(req); // ['attr', '属性'], ['max or min', value]
            const av = attr[reqAttr[0][1]]; // user or chara Attr['属性']
      
            // 条件の数値に対する回答の属性値の余剰を取得
            margin += reqAttr[1][0] === 'min' ? av - reqAttr[1][1] : reqAttr[1][1] - av;
          }
          margin /= narrow[i].req.length;
        }

        // 余剰が大きいものを候補に追加
        if (!hurdle) {
          hurdle = margin;
          keepType = narrow[i];
        } else {
          if (margin > hurdle) {
            hurdle = margin;
            keepType = narrow[i];
          }
        }
      }
      resultType = keepType;
    } else {
      resultType = narrow[0];
    }

    return resultType
  },
  setAttrTypeDesc: function(attrType) { // 受け取った思想タイプからコメントを取り出して表示する処理
    const descText = attrType.text;

    for (let i = 0; i < descText.length; i++) {
      if (!notRedirect) {
        i = descText.length - 1;
      }

      const row = descText[i];
      const br = createElem('br');
      const span = createElem('span');
      
      span.textContent = row;
      span.appendChild(br);
      attrDescElem.appendChild(span);
    }
    attrElem.textContent = attrType.name;
    attrEngElem.textContent = attrType.type;
  },
}; // 属性値と思想タイプのデータ

const charaPosBF = bfNames.map(bfName => rcdata.bfData[bfName].posBFValue);
const charaNegBF = bfNames.map(bfName => rcdata.bfData[bfName].negBFValue);
const charaSupBF = bfNames.map(bfName => rcdata.bfData[bfName].bfVsup);
const cFctNegValues = [];
const cFctPosValues = bfNames.map(bfName => {
  const negArray = [];
  const posArray = bfFacet[bfName].map(facetName => {
    const value = rcdata.bfData[bfName].facet[facetName];
    negArray.push(100 - value);
    return value;
  });
  cFctNegValues.push(negArray);
  return posArray;
});

function comparePersonality(uPosBF) { // キャラと比較したユーザーの性格傾向を補足する処理
  function writeText(n, index) { // 性格傾向識別処理
    let text = null;
    if (n > 0) {
      text = bfTendencies[index].pos;
    } else if (n < 0) {
      text = bfTendencies[index].neg;
    }
    if (index < 4) {
      text += '寄りです。';
    } else {
      text += n > 0 ? 'です。' : 'しています。';
    }
    return text;
  }

  for (let i = 0; i < charaPosBF.length; i++) {
    const x = uPosBF[i] - charaPosBF[i];
    const y = Math.abs(x);
    let text;

    if (y > 80) {
      text = 'あなたは対照的です。';
    } else if (y > 40) {
      text = 'あなたの方が、かなり' + writeText(x, i);
    } else if (y > 20) {
      text = 'あなたの方が、そこそこ' + writeText(x, i);
    } else if (y > 10) {
      text = 'あなたの方が、少し' + writeText(x, i);
    } else {
      text = 'あなたとほぼ同じです。';
    }
    uTendencies[i].textContent = text;
  }
};
function setHeartColor(supBF) { // ハートにBFの正負の差に応じて色をつける処理
  for (let i = 0; i < 5; i++) {
    const heartColor = [
      { color: 'rgb(255, 255, 255)' },
    ];
    const addColor = {};
    let setNum = 0;
  
    if (supBF[i] > 0) {
      setNum = supBF[i] > 33 ? 33 : supBF[i];
      addColor.color = `rgb(255, 255, ${Math.round(255 - 255 * setNum / 33)})`;
      heartColor.push(addColor);
      if (supBF[i] > 33) {
        setNum = supBF[i] - 33;
        addColor.color = `rgb(255, ${Math.round(255 - 255 * setNum / 67)}, 0)`;
        heartColor.push(addColor);
      }
    }
    if (supBF[i] < 0) {
      setNum = supBF[i] < -33 ? -33 : supBF[i];
      addColor.color = `rgb(${Math.round(255 + 255 * setNum / 33)}, 255, 255)`;
      heartColor.push(addColor);
      if (supBF[i] < -33) {
        setNum = supBF[i] + 33;
        addColor.color = `rgb(0, ${Math.round(255 + 255 * setNum / 67)}, 255)`;
        heartColor.push(addColor);
      }
    }

    hearts[i].animate(heartColor, {
      fill: 'forwards',
      easing: 'ease-out',
      duration: 2000,
      delay: 500,
    });
  }
}
function toggleFacetGraph(e) { // ファセットのグラフの表示・非表示を切り替える処理
  e.target.classList.toggle('show');
}
function outputToResult(ubfPorN, poles, resultBFNode, rSupBF, cbfPorN) { // 診断結果を元にBFのグラフを表示する処理
  // 診断結果の棒グラフに値を代入
  for (let i = 0; i < ubfPorN.length; i++) {
    const poleStates = [
      { width: '100%' },
    ];
    const poleState = {};

    // 棒グラフ伸長アニメーション
    poleState.width = `${100 - ubfPorN[i]}%`;
    poleStates.push(poleState);
    poles[i].animate(poleStates, {
      fill: 'forwards',
      easing: 'ease-out',
      duration: 2000,
      delay: 500,
    });

    // グラフ数値フェードオン
    resultBFNode[i].textContent = ubfPorN[i];
    resultBFNode[i].animate([
      { opacity: 0 },
      { opacity: 1 },
    ], {
      fill: 'forwards',
      easing: 'linear',
      duration: 500,
      delay: 2500,
    })

    // キャラとユーザーのBFの差をフェードオン
    if (cbfPorN) {
      const subV = ubfPorN[i] - cbfPorN[i];
      if (subV > 0) {
        rSupBF[i].textContent = subV < 10 ? `▲ ${subV} ` : `▲${subV}`;
      } else if (subV < 0) {
        rSupBF[i].textContent = subV > -10 ? `▼ ${-subV} ` : `▼${-subV}`;
      } else {
        rSupBF[i].textContent = ' ± 0 ';
      }
      rSupBF[i].animate([
        { opacity: 0 },
        { opacity: 1 },
      ], {
        fill: 'forwards',
        easing: 'linear',
        duration: 500,
        delay: 2500,
      })
    }
  }
}
function reflectComme() { // 受け取ったcharaPosBFを元にテキストを反映する処理
  let index = 0;
  const comments = []; // 各性格因子のコメントの配列
  const commeNums = bfNames.map(bfName => {
    const num = rcdata.bfData[bfName].bfRate;
    return num;
  });

  bfNames.forEach(bfName => { // 各コメントの取り出し
    const num = commeNums[index];
    const text = charaBFComments[bfName][num];

    comments.push(text);
    index++;
  });

  // htmlに要素追加
  function appendElem(comme, elem) { // 受け取ったコメントをhtml要素にして任意の要素に追加する処理
    const span = createElem('span');
    const br = createElem('br');
    span.textContent = comme;
    elem.appendChild(span);
    elem.appendChild(br);
  }
  for (let i = 0; i < comments.length; i++) {
    appendElem(comments[i], bfComments[i]);
  }
}

function setResult() { // 診断結果を反映する処理
  const userName = userData.name;
  const userPosBF = bfNames.map(bfName => userData.bfData[bfName].posBFValue);
  const userNegBF = bfNames.map(bfName => userData.bfData[bfName].negBFValue);
  const userSupBF = bfNames.map(bfName => userData.bfData[bfName].bfVsup);
  const uFctNegValues = [];
  const uFctPosValues = bfNames.map(bfName => {
    const negArray = [];
    const posArray = bfFacet[bfName].map(facetName => {
      const value = userData.bfData[bfName].facet[facetName];
      negArray.push(100 - value);
      return value;
    });
    uFctNegValues.push(negArray);
    return posArray;
  });

  function setShareResult(attrType) { // 診断結果を共有する処理
    const attrTypeName = attrType.name;
    const simpleDesc = attrType.text[attrType.text.length - 1];
    const url = location.href;
    const tag = '艦娘診断,艦これ';
    const text = `${userName}を艦娘化すると"${rcdata.jpName}"。適合率${resultChara.matchRate}㌫。タイプは"${attrTypeName}"。${simpleDesc}`;
  
    // ページの概要と診断結果を文章化してクリップボードに送る処理
    function writeClipBoard() {
      if (!Boolean(url)) {
        url = "'URLを取得できませんでした'";
      }
      let textUrl = text + url;
      navigator.clipboard.writeText(textUrl);
    }
  
    // URL取得ボタンの設定
    shareUrlBtnArea.forEach(elem => {
      elem.addEventListener('click', e => {
        e.target.animate([
            { opacity: 1 },
            { opacity: 0 },
          ], {
            duration: 100,
            easing: 'linear',
            iterations: 4,
            direction: 'alternate',
        });
        writeClipBoard();
      });
    });
  
    // Twitter共有ボタンの設定
    let twiText = `text=${text}`;
    twiText += `&url=${url}`;
    twiText += `&hashtags=${tag}`;
    shareTwitterBtn.href = 'https://twitter.com/share?' + twiText;
  }

  // クリック・タップを無効化
  document.querySelector('body').classList.add('prevent');
  
  // ユーザー名を反映
  for (let i = 0; i < userNameElems.length; i++) {
    const name = userNameElems[i];
    name.textContent = userName;
  }

  // グラフ位置までスクロール、結果表示後トップへスクロール
  const rect = graphArea.getBoundingClientRect();
  const lengthFromTop = rect.top + window.pageYOffset;
  diagnosisBox.scrollTop = lengthFromTop - 108;
  setTimeout(() => {
    diagnosisBox.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }, 3600);
  
  // グラフのアニメーション表示
  outputToResult(userPosBF, posPoles, resultPosBF, rSupPBF, charaPosBF);
  outputToResult(userNegBF, negPoles, resultNegBF, rSupNBF, charaNegBF);
  for (let i = 0; i < 5; i++) {
    outputToResult(uFctPosValues[i], graphFacetNodes.facetPosPoles[i], graphFacetNodes.facetPosValues[i], graphFacetNodes.facetPosSup[i], cFctPosValues[i]);
    outputToResult(uFctNegValues[i], graphFacetNodes.facetNegPoles[i], graphFacetNodes.facetNegValues[i], graphFacetNodes.facetNegSup[i], cFctNegValues[i]);
  }
  
  // ハートに色をつける
  setHeartColor(userSupBF);
  
  // 画像表示アニメ
  function eventCancel(event) {
    event.preventDefault();
  }
  document.addEventListener('touchmove', eventCancel, { passive: false }); // スクロールを無効化
  document.addEventListener('wheel', eventCancel, { passive: false }); // スクロールを無効化
  setTimeout(() => {
    document.removeEventListener('touchmove', eventCancel, { passive: false });
    document.removeEventListener('wheel', eventCancel, { passive: false });
    document.querySelector('body').classList.remove('prevent');
  }, 6000); // スクロール無効化を一定時間経過後に解除
  resultImg.animate([
    {
      offset: 0,
      opacity: 1,
      transform: 'scale(1) perspective(1080px) translate3d(0, 0, 1080px) rotateY(360deg)',
      filter: 'blur(20px) brightness(5)',
    },
    {
      offset: 0.75,
      opacity: 1,
      transform: 'scale(1) perspective(1080px) translate3d(0, 0, 0) rotateY(0deg)',
      filter: 'blur(10px) brightness(3)',
    },
    {
      offset: 0.8,
      opacity: 1,
      transform: 'scale(1) perspective(1080px) translate3d(0, 5px, 0) rotateY(0deg)',
      filter: 'blur(8px) brightness(2.5)',
    },
    {
      offset: 0.85,
      opacity: 1,
      transform: 'scale(1) perspective(1080px) translate3d(0, -5px, 0) rotateY(0deg)',
      filter: 'blur(6px) brightness(2)',
    },
    {
      offset: 0.9,
      opacity: 1,
      transform: 'scale(1) perspective(1080px) translate3d(0, 5px, 0) rotateY(0deg)',
      filter: 'blur(4px) brightness(1.5)',
    },
    {
      offset: 0.95,
      opacity: 1,
      transform: 'scale(1) perspective(1080px) translate3d(0, -5px, 0) rotateY(0deg)',
      filter: 'blur(2px) brightness(1)',
    },
    {
      offset: 1,
      opacity: 1,
      transform: 'scale(1) perspective(1080px) translate3d(0, 5px, 0) rotateY(0deg)',
      filter: 'blur(0px) brightness(1)',
    },
  ], {
    duration: 1200,
    delay: 4000,
    fill: "forwards",
    easing: 'linear',
  });
  kirakira.animate([
    {
      offset: 0,
      opacity: 0,
      transform: 'scale(0)',
      filter: 'blur(4px) brightness(1)',
    },
    {
      offset: 0.2,
      opacity: 1,
      transform: 'scale(0.8)',
      filter: 'blur(0px) brightness(2)',
    },
    {
      offset: 0.6,
      opacity: 1,
      transform: 'scale(1.2)',
      filter: 'blur(0px) brightness(2)',
    },
    {
      offset: 1,
      opacity: 0,
      transform: 'scale(1.4)',
      filter: 'blur(4px) brightness(1)',
    },
  ], {
    duration: 1200,
    fill: 'forwards',
    easing: 'linear',
    delay: 4800,
  });

  // 適合率表示（カウントアップ）処理
  setTimeout(() => {
    shuffleNumber(concText);
  }, 5000);
  function shuffleNumber(target) {
    const rate = resultChara.matchRate;
    const interval = 800 / rate;
    let counter = 0;
  
    const countInterbal = setInterval(countUp, interval);
  
    function countUp() {
      if (Number.isInteger(rate)) {
        target.textContent = counter;
      } else {
        target.textContent = `${counter}.${Math.floor(Math.random() * 10)}`
      }
      counter++;
      if (counter > rate) {
        target.textContent = rate;
        clearInterval(countInterbal);
      }
    }
  }
  
  // キャラクターの性格傾向を反映
  reflectComme();
  
  // キャラと比較したユーザーの性格傾向を反映
  comparePersonality(userPosBF);
  
  // ユーザーの思想タイプをセット
  const userAttrType = attribute.returnAttrType(userData.attr);
  attribute.setAttrTypeDesc(userAttrType);
  
  // 思想が近い艦娘をセット
  const parentElem = document.getElementById('bpc');
  const bpcMessageElem = document.querySelector('#bpc .bpc-t');
  if (bestPartner.length > 0) {
    for (let i = 0; i < bestPartner.length; i++) {
      const chara = bestPartner[i];

      const divElem = createElem('div');
      divElem.classList.add('bpc-box');

      const bpcImgElem = createElem('img');
      bpcImgElem.src = `../../img/character/face_${chara.name.toLowerCase()}.jpg`;
      
      const bpcNameElem = createElem('h4');
      bpcNameElem.classList.add('name');
      bpcNameElem.textContent = chara.jpName;
    
      bpcMessageElem.textContent = 'あなたと相性抜群だったりするかも！';
      divElem.appendChild(bpcImgElem);
      divElem.appendChild(bpcNameElem);
      parentElem.appendChild(divElem);
    }
  } else {
    const divElem = createElem('div');
    divElem.classList.add('bpc-box');
    
    const bpcNameElem = createElem('h4');
    bpcNameElem.classList.add('name');
    bpcNameElem.textContent = 'なし';
    bpcNameElem.style = 'margin: 16px 0px';
  
    divElem.appendChild(bpcNameElem);
    parentElem.appendChild(divElem);
  }

  // 診断結果を共有する処理のセット
  setShareResult(userAttrType);

  // 確認用
  // console.log('ユーザーデータ', userData);
  // console.log('該当キャラデータ', resultChara);
  // console.log('相性の良いキャラ', bestPartner);
  // console.log('全キャラ比較データ', comparedData);
}
function redirect() { // リダイレクト時のページ表示処理
  const concRateBox = document.querySelector('.result .img-area ul');
  const deleteElems = document.querySelectorAll('.delete');
  const shareElem = document.getElementById('share');
  const tryElem =  document.getElementById('try');

  // 「シェア」と「診断してみる」の表示入れ替え
  shareElem.classList.add('disappear');
  tryElem.classList.remove('disappear');

  // 画像の表示
  resultImg.style.opacity = 1;

  // 表示されているキャラの性格をグラフに反映
  outputToResult(charaPosBF, posPoles, resultPosBF);
  outputToResult(charaNegBF, negPoles, resultNegBF);
  for (let i = 0; i < 5; i++) {
    outputToResult(cFctPosValues[i], graphFacetNodes.facetPosPoles[i], graphFacetNodes.facetPosValues[i]);
    outputToResult(cFctNegValues[i], graphFacetNodes.facetNegPoles[i], graphFacetNodes.facetNegValues[i]);
  }


  // 不要な要素を削除
  concRateBox.remove();
  deleteElems.forEach(elem => elem.remove());
  // reflectComme(); // 文章表示確認用

  // ハートに色をつける
  setHeartColor(charaSupBF);

  // キャラの思想タイプと簡易説明の表示
  const charaAttrType = attribute.returnAttrType(rcdata.attr);
  attribute.setAttrTypeDesc(charaAttrType);
}

if (notRedirect === 'true') { // 診断ページからの移行時とリダイレクト時で挙動を場合分け
  setResult();
} else {
  redirect();
}

for (let i = 0; i < hearts.length; i++) { // ハートを押すとファセットごとのグラフを展開・格納する処理
  hearts[i].addEventListener('click', e => {
    e.target.classList.toggle('show');
    facetGraphNodes[i].classList.toggle('disappear');
  });
}

// 確認用
// console.log(`${rcdata.jpName}のデータ`, rcdata);
// console.log('charaInfos', charaInfos);

/* const test = charaInfos.map(chara => {
  const attrType = attribute.returnAttrType(chara.attr);
  const testdata = {
    name: chara.name,
    attr: chara.attr,
    attrType: attrType.name,
  };
  return testdata;
});
console.log('キャラの思想タイプ確認', test); */
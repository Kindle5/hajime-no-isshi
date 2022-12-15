'use strict';

// html要素取り込み
const diagnosisBox = document.querySelector('main.diagnosis');
const headline = document.querySelector('main.diagnosis .page_title');

const pageNum = document.getElementById('current-page');
const pageMaxNum = document.getElementById('page-length');
const pages = document.querySelectorAll('main.diagnosis .container1');
const nameForm = document.getElementById('userName');

const nextBtns = document.querySelectorAll('main.diagnosis .container1 .btn.next');
const backBtns = document.querySelectorAll('main.diagnosis .container1 .btn.back');
const startBtn = document.querySelector('main.diagnosis .container1 .btn.start');

const bfRanges = document.querySelectorAll('main.diagnosis .container1 .bf-test input');
const bfRangeValues = document.querySelectorAll('main.diagnosis .container1 .bf-test .rValue');
const agrFacetRanges = document.querySelectorAll('main.diagnosis .container1 .bf-test.agreeableness input');
const extFacetRanges = document.querySelectorAll('main.diagnosis .container1 .bf-test.extraversion input');
const opnFacetRanges = document.querySelectorAll('main.diagnosis .container1 .bf-test.openness input');
const conFacetRanges = document.querySelectorAll('main.diagnosis .container1 .bf-test.conscientiousness input');
const neuFacetRanges = document.querySelectorAll('main.diagnosis .container1 .bf-test.neuroticism input');

(function setLastBtn() { // 質問ページの最後のボタンを診断実行ボタンに
  const lastBtn = nextBtns[nextBtns.length - 1];
  const lastPage = pages[pages.length - 1];
  const br = document.createElement('br');

  lastPage.insertBefore(br, lastBtn);
  lastBtn.classList.add('last');
  lastBtn.textContent = '診断結果を見る';
})();
const lastBtn = document.querySelector('main.diagnosis .container1 .btn.last');

// グローバルスコープ
queAttrData; // from question.js
// それぞれの質問の選択肢に割り振られた属性値の配列
// queAttrData[i][j]
// i番目の質問のj番目の選択肢の属性
// { courage: 9, wise: 9, kind: 9, aggressive: 9, narcissism: 9, sadism: 9, machiavellism: 9, psychopathy: 9 }

attrMaxMinValues; // from question.js
// 選択肢系の質問によって各属性がとりうる最大・最小値
// { max: { courage: 8... }, min: { courage: -1... } }

charaInfos; // from chara_data.js
// キャラクターの情報

// その他
let userName;
let pageIndex = 0;
const choseRecords = {}; // 選んだ選択肢情報を保持

// セッションストレージが使用可能か判定する処理
function sStorageIsAvlbl(){
  const alertTxt = 'セッションストレージが無効になっています。ブラウザの設定を変更するか、別のブラウザをご利用ください。';
  if (typeof sessionStorage !== 'undefined') {
    try {
      sessionStorage.setItem('dummy', '1');
      if (sessionStorage.getItem('dummy') === '1') {
        sessionStorage.removeItem('dummy');
        return true;
      } else {
        window.alert(alertTxt);
        return false;
      }
    } catch(e) {
      window.alert(alertTxt);
      return false;
    }
  } else {
    window.alert(alertTxt);
    return false;
  }
}

// 各ページのクラス名にページナンバー割り振り
let setPageNum = 0;
pages.forEach(page => {
  page.classList.add(`page${setPageNum}`);
  setPageNum++;
});

// ページ数表示処理
function showCurrentPageNum(pgInd) {
  pageNum.textContent = pgInd + 1;
}
showCurrentPageNum(pageIndex);
pageMaxNum.textContent = pages.length;

// ページめくり
function turnPage() {
  if (pageIndex === 0) {
    // sessionStrageが利用不可だった場合、診断を中止
    if (!sStorageIsAvlbl()) return;
  }

  pages[pageIndex].classList.remove('show');
  pageIndex++;
  if (pages.length === pageIndex) return;
  pages[pageIndex].classList.add('show');
  diagnosisBox.scroll(0, 0);
  if (pageIndex !== 0) {
    headline.classList.add('disappear');
  }
  showCurrentPageNum(pageIndex);
}
function returnPage() {
  pages[pageIndex].classList.remove('show');
  pageIndex--;
  pages[pageIndex].classList.add('show');
  diagnosisBox.scroll(0, 0);
  if (pageIndex === 0) {
    headline.classList.remove('disappear');
  }
  showCurrentPageNum(pageIndex);
}
// ページめくり >> 名前入力欄に処理を実装
nameForm.focus(); // ページロード時に名前入力欄へフォーカス
nameForm.value = ''; // ページロード時に名前入力欄を空欄に
function setUserName() { // ユーザーネームをセットする処理
  if (nameForm.value === '') {
    userName = '名無しさん';
  } else {
    userName = nameForm.value + 'さん';
  }
}
nameForm.addEventListener('keydown', e => {
  // 名前入力欄でエンターを押した場合の処理
  if (e.key === 'Enter') {
    turnPage(pageIndex);
    setUserName();
  }
});
startBtn.addEventListener('click', setUserName);
// ページめくり >> 進む・戻るボタンに処理を実装
nextBtns.forEach(nextBtn => {
  nextBtn.addEventListener('click', turnPage);
});
backBtns.forEach(backBtn => {
  backBtn.addEventListener('click', returnPage);
});

// 選択肢問題に関して >> ページと選んだ選択肢をセットで記録する処理
function recordChoice(num) {
  choseRecords[pageIndex] = num;
}
function setChoiceSystem() {
  const choices = document.querySelectorAll(`main.diagnosis .container1.choice.page${pageIndex} ul li`);

  for (let i = 0; i < choices.length; i++) {
    // 選んだ選択肢を明示する処理の実装
    choices[i].addEventListener('click', () => {
      if (choseRecords[pageIndex] >= 0) { // 非初回選択時
        // 選択肢の明示を解除する
        choices[choseRecords[pageIndex]].classList.remove('chose');
      } else { // 初回選択時
        // 進むボタン有効化
        nextBtns[pageIndex].classList.remove('block');
      }
      choices[i].classList.add('chose');
      recordChoice(i);
    });
  }
}

// 選択肢問題に関する進む・戻るボタンでイベントリスナーを付け外しする
for (let i = 0; i < pages.length; i++) {
  // 選択肢問題の前ページの進むボタンにsetChoiceSystem実装
  const pageClassList = Array.from(pages[i].classList);
  if (pageClassList.includes('choice')) {
    nextBtns[i - 1].addEventListener('click', setChoiceSystem);

    // 選択肢ページの戻るボタンに、↑でセットしたイベントを削除する処理を実装
    backBtns[i - 1].addEventListener('click', () => {
      nextBtns[i - 1].removeEventListener('click', setChoiceSystem);
    });
  }
}

// BFのrangeの値を変更したら表示に反映する処理
for (let i = 0; i < bfRanges.length; i++) {
  bfRanges[i].oninput = (e => { // ツマミの位置を数値化して表示する処理
    const num = e.target.value;
    const value = num === 50 ? '50：50' : `${100 - num}：${num}`;
    bfRangeValues[i].textContent = value;
  });

  // デフォルト値設定
  bfRanges[i].value = 50;
  bfRangeValues[i].textContent = '50：50';
}

/*************** 以下 診断に関するもの ***************/

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

const userData = {}; // ユーザーのデータを格納
const userBFData = {}; // ユーザーのBigFiveデータを保持
const copyCI = JSON.parse(JSON.stringify(charaInfos)); // 比較で使用するデータを複製

function calcRate(value, max, min, n) { // 最大値がmax、最小値がminとなるvalueをn段階で評定して返す処理
  const range  = max - min;
  const origin = range / 2;
  const scale = Math.floor(range / n);
  let rate = 0;

  const m = n % 2 === 0 ? (n / 2) + 1 : Math.ceil(n / 2);

  for (let i = 1; i <= m ; i++) {
    if (i === m) {
      rate = 0;
      break;
    }
    if (value > origin) {
      if (value > max - scale * i) {
        rate = m - i;
        break;
      }
    }
    if (value < origin) {
      if (value < min + scale * i) {
        rate = m - i;
        break;
      }
    }
    if (value === origin) {
      rate = n % 2 === 0 ? (n / 2) - 1 : Math.floor(n / 2);
    }
  }
  if (value < origin) {
    rate *= -1;
  }
  
  return rate;
}
function compileFacet() { // 測定した性格因子のファセットからuserBFDataにデータを格納する処理
  const facetRangesArray = [
    agrFacetRanges,
    extFacetRanges,
    opnFacetRanges,
    conFacetRanges,
    neuFacetRanges,
  ]; // 集計に使う性格因子ごとのrangesを配列化

  function getFacetValues(facetRanges) { // 受け取ったfacetRangesから値を配列として抽出する処理
    const array = Array.from(facetRanges);
    const values = array.map(range => range.value);
    return values;
  }
  function intoBFData(facetValues, bfName) { // 取得したfacetの値の配列をuserBFDataにまとめる処理
    let posBFSum = 0;
    const facetRates = []; // 各ファセットの値を5段階で評定

    for (let i = 0; i < facetValues.length; i++) {
      if (i === 0) {
        userBFData[bfName] = { facet: {} };
      }
      const facetName = bfFacet[bfName][i];
      const value = Number.parseInt(facetValues[i]);
      const fRate = calcRate(value, 100, 0, 9) + 4;
      userBFData[bfName].facet[facetName] = value;
      posBFSum += value;
      facetRates.push(fRate);
    }

    const posBFValue = Math.round(posBFSum / facetValues.length);
    const negBFValue = 100 - posBFValue;

    userBFData[bfName].posBFValue = posBFValue;
    userBFData[bfName].negBFValue = negBFValue;
    userBFData[bfName].bfVsup = posBFValue - negBFValue;
    userBFData[bfName].bfRate = calcRate(posBFValue, 100, 0, 9) + 4;
    userBFData[bfName].fBFR = facetRates;
  }

  for (let i = 0; i < bfNames.length; i++) { // 各性格因子ごとにファセットから数値を取得
    const facetValues = getFacetValues(facetRangesArray[i]);
    intoBFData(facetValues, bfNames[i]);
  }
}
function compileAttr(cRecords) { // choseRecordsを元に属性値を求めて返す処理
  const attr = {};
  const array = cRecords;

  for (let i = 0; i < array.length; i++) { // 各質問に対する回答の属性値を取得し累計する
    const choseNum = array[i];
    const data = queAttrData[i][choseNum];
    const darkT = [
      'narcissism',
      'sadism',
      'machiavellism',
      'psychopathy',
    ];
    const negIsPlayful = [
      'sadism',
      'machiavellism',
      'psychopathy',
    ];

    for (let j = 0; j < attrNames.length; j++) {
      const attrName = attrNames[j];

      if (i === 0) {
        attr[attrName] = 0;
      }

      if (attrName === 'playful') {
        negIsPlayful.forEach(playAttr => {
          if (data[playAttr] < 0) {
            attr[attrName] += -1 * data[playAttr];
          }
        });
      } else if (attrName === 'dark') {
        darkT.forEach(darkAttr => {
          if (data[darkAttr] > 0) {
            attr[attrName] += data[darkAttr];
          }
        });
      } else {
        attr[attrName] += data[attrName];
      }
    }
  }
  return attr;
}
function compileDiagData() { // 各種入力データをuserDataに格納する処理
  const cRecords = Object.values(choseRecords);

  userData.name = userName;
  userData.bfData = userBFData;
  userData.cRecords = cRecords;
  userData.attr = compileAttr(cRecords);
}
function compareUwC() { // userDataとcharaInfosを比較して、適合率が高い順に並び替えたデータを返す処理
  for (let i = 0; i < copyCI.length; i++) { // ユーザーと各キャラのbfDataを比較し、適合率をデータに加える
    const charaData = copyCI[i];
    let matchBFPoint = 0;
    let compareBFCount = 0;
    let subAttrPoint = 0;

    // bfDataを比較して適合率を算出
    for (let j = 0; j < bfNames.length; j++) { // 各性格因子において以下の処理を実行
      const bfName = bfNames[j];
      const facet = bfFacet[bfName];
      const charaBF = charaData.bfData[bfName];
      const userBF = userData.bfData[bfName];

      for (let k = 0; k < facet.length; k++) { // ファセットの各項目において以下の処理を実行
        const facetName = facet[k];
        const cFacet = charaBF.facet[facetName];
        const uFacet = userBF.facet[facetName];
        const sub = cFacet - uFacet;

        charaData.bfData[bfName].facet[facetName] = sub;
        matchBFPoint += 100 - Math.abs(sub);
        compareBFCount++;
      }

      charaBF.bfVsup -= userBF.bfVsup;
      charaBF.posBFValue -= userBF.posBFValue;
      charaBF.negBFValue -= userBF.negBFValue;
    }
    const mRate = Math.round(10 * matchBFPoint / compareBFCount) / 10;
    charaData.matchRate = mRate;

    // attrを比較して属性値の誤差を算出
    for (let j = 0; j < attrNames.length; j++) {
      const attrName = attrNames[j];
      const subAttrValue = charaData.attr[attrName] - userData.attr[attrName];
      charaData.attr[attrName] = subAttrValue;
      subAttrPoint += Math.abs(subAttrValue);
    }
    charaData.subAttr = subAttrPoint;
  }

  // 適合率順にキャラをソートして返す
  copyCI.sort((a, b) => b.matchRate - a.matchRate);
  return copyCI;
}
function pickupChara(comparedData) { // 適合率が最高のキャラを返す処理
  const pickedUp = [];
  
  for (let i = 0; i < comparedData.length; i++) {
    const charaData = comparedData[i];
    const maxMRate = comparedData[0].matchRate;

    if (charaData.matchRate === maxMRate) {
      pickedUp.push(charaData);
    } else {
      break;
    }
  }

  if (pickedUp.length > 1) { // 同率一位が複数いる場合、属性値誤差が小さいキャラを選ぶ
    pickedUp.sort((a, b) => a.subAttr - b.subAttr);
  }

  const resultChara = pickedUp[0];
  return resultChara;
}
function seekBestPartner(comparedData) { // 属性値誤差が小さい（価値観の近い）キャラを配列で返す処理
  const candidate = [];
  const array = comparedData.concat();
  array.sort((a, b) => a.subAttr - b.subAttr);

  for (let i = 0; i < array.length; i++) { // 属性値の誤差が小さいキャラをピックアップ
    const current = array[i].subAttr;
    const base = array[0].subAttr;
    
    if (current - base <= 5) { // 属性値の誤差が5以下なら候補に選出
      candidate.push(array[i]);
    } else {
      break;
    }
    
    if (candidate.length > 1) {
      break;
    }
  }

  return candidate;
}

// 最後のボタン押下で診断実行
lastBtn.addEventListener('click', () => {
  compileFacet();
  compileDiagData();

  const comparedData = compareUwC();
  const resultChara = pickupChara(comparedData);
  const bestPartner = seekBestPartner(comparedData);
  
  // webストレージに診断データを一時的に保存して診断結果ページに渡す
  sessionStorage.setItem('userData',  JSON.stringify(userData));
  sessionStorage.setItem('resultChara', JSON.stringify(resultChara));
  sessionStorage.setItem('bestPartner', JSON.stringify(bestPartner));
  sessionStorage.setItem('notRedirect', 'true');
  sessionStorage.setItem('comparedData', JSON.stringify(comparedData)); // 確認用

  // 診断結果を元にユーザーが該当した艦娘のページへ遷移
  location.href = `diagnosis-${resultChara.name.toLowerCase()}.html`;
  
  // 確認用
  // console.log('userData:', userData);
  // console.log('comparedData:', comparedData);
  // console.log('resultChara:', resultChara);
});

// 診断結果からブラウザバックしたら入力値を初期化
window.addEventListener('pageshow', () => {
  // ナビゲーションの種類を取得する
  const perfEntries = performance.getEntriesByType("navigation");
  let type;
  perfEntries.forEach(pe => {
    type = pe.type;
  });
  if (type === 'back_forward') {
    location.reload();
  }
});

// 確認用
/* const checkCharaAttrs = (() => {
  const charaAttrs = [];
  for (let i = 0; i < charaInfos.length; i++) {
    const cRecords = charaInfos[i].cRecords;
    const charaAttr = compileAttr(cRecords);
    charaAttrs.push({
      name: charaInfos[i].jpName,
      attr: charaAttr,
    });
  }
  return charaAttrs;
})();
console.log('キャラの属性値確認:', checkCharaAttrs);
console.log('charaInfos:', charaInfos); */

// charaInfos修正用
/* for (let i = 0; i < charaInfos.length; i++) {
  const charaData = charaInfos[i];
  const charaBFData = charaData.bfData;
  const cRecords = charaData.cRecords;

  bfNames.forEach(bfName => { // 性格因子ごとに以下の処理を実行
    let facetBFSum = 0;
    const fBFR = [];

    bfFacet[bfName].forEach(facetName => { // ファセットごとに以下の処理を実行
      const facetValue = charaBFData[bfName].facet[facetName];
      const facetBFRate = calcRate(facetValue, 100, 0, 9) + 4; // 0～8までの9段階に修正
      fBFR.push(facetBFRate);
      facetBFSum += facetValue;
    });

    const aveFacetValue = Math.round(facetBFSum / bfFacet[bfName].length);
    const rate = calcRate(aveFacetValue, 100, 0, 9) + 4; // 0～8までの9段階に修正

    charaBFData[bfName].posBFValue = aveFacetValue;
    charaBFData[bfName].negBFValue = 100 - aveFacetValue;
    charaBFData[bfName].bfVsup = 2 * aveFacetValue - 100;
    charaBFData[bfName].bfRate = rate;
    charaBFData[bfName].fBFR = fBFR;
  });

  charaData.attr = compileAttr(cRecords);
}
console.log('修正用charaInfos', charaInfos); */
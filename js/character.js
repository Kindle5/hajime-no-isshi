'use strict';
    
// html要素取り込み
const characterPageTitle = document.querySelector('main.sb-main.character .page_title');
const profCloseBtn = document.querySelector('main.sb-main.character .prof-close');
const articles = document.querySelectorAll('main.sb-main.character article');
const charaBox = document.querySelector('main.sb-main.character');
const attention = document.getElementById('attention');
const profThumbs = document.querySelectorAll('main.character .prof-thumb img');
const phrases = document.querySelectorAll('article .profile .phrase p');

// その他
let charaScrolledY; // サムネ一覧のスクロール量
let currentArticleNum; // 開いている記事の番号
let defComme; // キャラの初期設定の台詞

// キャラ台詞セット
const charaComments = [
  {
    name: '瑞鶴',
    comme1: [
      'ここではキャラクターに他のキャラクターの紹介をしてもらってるよ！',
      '隔離兵舎で軟禁されていた時は、いつも暗い気持ちだったなぁ……',
      '……だから、翔鶴さんと出会えて本当に良かったと思ってる',
      'ちょっぴり変なところはあるけど、尊敬してるよ！',
    ],
  },
  {
    name: '翔鶴',
    comme1: [
      '瑞鶴は、健気で世界で一番可愛い最高の妹よ。誰にもあげないわ',
      'ところで、このサイトには“オマケ”のページが存在するの。時間がある人は探してみて？',
    ],
  },
  {
    name: '川内',
    comme1: [
      '電はあんな見た目だしキツいことも言うけど、根は優しい子だよ！',
      '夕張は艤装に関する知識は一流だけど……まあ見た目通りのヤバい奴かな……',
      '鬱で辞めた前の提督……元気にしてるかな？',
    ],
  },
  {
    name: '雷',
    comme1: [
      '川内は秘書艦だけど、リーダーって感じではないわね。でも……',
      'あの子の言う事はみんな耳を傾けるし、みんなから信頼される――',
      'そんな存在よ。まあ、ちょっと暴走することもあるけど……',
      '私は鳳翔さんみたいに落ち着きを身につけて、もっとみんなを幸せにしたいわ！',
    ],
  },
  {
    name: '暁',
    comme1: [
      '雷はね、いつもみんなの世話を焼いてるの！',
      '自慢のママ……じゃなくて、妹よ！',
      'あ、やったぁ！ 今週の占いのラッキーカラー、暁の髪の色と同じよ！',
    ],
  },
  {
    name: '響',
    comme1: [
      '暁よく見るんだ。それ、アンラッキーカラーの項目だよ',
      '伊勢はだいたいどこかでサボって寝ているね。いつもやる気がなくて眠そうだよ',
      'でもあれは、本気を出すと世界が滅びてしまうからなんだ',
      '……ウソじゃないかもしれなくもないよ',
    ],
  },
  {
    name: '電',
    comme1: [
      'なんやワレェ？',
      '知らねーツラなのです。ウチのモンに手ェ出したら指詰めてもらうのです',
      '“オマケ”のページのメニューボタンがない……？',
      'どこかに“鍵”が落ちてるのです。せいぜい頑張って探すのです',
    ],
  },
  {
    name: '古鷹',
    comme1: [
      '響ちゃん、最初はロシアの艦娘だったみたいで、向こうの艦娘とはかなり仲が良かったみたい',
      'でも問題ばかり起こすから、現地の人たちが厄介払いで日本へ送り返したって……',
      'あっ……そ、そいう噂があるだけですよ！',
      'はぁ……私に力が無かったせいで、加古は……',
      'あのとき、私がもっと強くあの子たちを引き止めていれば……',
    ],
  },
  {
    name: '瑞鳳',
    comme1: [
      '古鷹はずっと自分の殻にこもって、後悔を引きずってるの',
      '加賀も友達を失くしたのは自分の責任だと思ってる',
      'この二人には色々事情があって――',
      '――へくしッ！ むむっ、今だれか瑞鳳の悪口言ってるぅ？',
    ],
  },
  {
    name: '飛龍',
    comme1: [
      '蒼龍？ しっかりしてるし面白いし、最高の相棒だよ！',
      'なんか今日、下着が若干ゆるい気がするんだよね～。痩せたかなぁ',
    ],
  },
  {
    name: '蒼龍',
    comme1: [
      '飛龍、間違えて私の下着つけてない？ あそこに干しといたんだけど……',
      'って、こら！ 靴下を丸めて洗濯かごに出さないでよー！',
      'いちいち伸ばすの面倒くさいんだからね！',
      'もう、日常生活はほんとポンコツなんだから……',
    ],
  },
  {
    name: '伊１４',
    comme1: [
      'すずやん と ごんごん は佐渡島出向組の名コンビだね！',
      '姉貴とは入れ違いになったけど、イヨがいなくて寂しがってないかな～？',
      'さっき見たけど、瑞鶴は白いパンツだったよ！',
      'でも今日はみんな、だいたい自分のヘアカラーのパンツを履いてるね！',
    ],
  },
  {
    name: '皐月',
    comme1: [
      'ええ！？ ボクこんな卵焼きみたいな色の下着履かないよっ！',
      'ボクも昔、うーちゃんがいなくなって落ち込んでたんだ',
      'でも……たくさん姉妹がいたから、みんなで支え合って乗り越えていこうって思えたんだ',
      'だから、たった一人の妹を亡くしてしまった古鷹に、どう声をかけたらいいか分からくて……',
      'ボクが古鷹の立場だったら、耐えられる自信なんて無いよ……',
    ],
  },
  {
    name: '夕張',
    comme1: [
      '皐月は卑屈で自信のない子だったけど……今ではウチの駆逐艦のエースね',
      '“オマケ”のメニューボタンのロックは2つ。つまり鍵も2つね',
      'ちなみに、さっき誰かが鍵を1つ拾っていたそうよ。紺色の下着の艦娘らしいわ',
      '……何よ。私だってイヨからそう聞いたんだもの',
    ],
  },
  {
    name: '伊勢',
    comme1: [
      '暁はいつも頑張ってるんだけど、何故かコントになるんだよね。見てて微笑ましいよ',
      '鍵……？ そう言えば、さっき誰かが別の誰かに鍵がどうのって渡してたような……',
      'え？ 誰かって？ んー、昼寝の最中だったからよく覚えてないねぇ……ふぁあぁ……zzz',
    ],
  },
  {
    name: '鳳翔',
    comme1: [
      '瑞鳳さんは卵焼きが大好きで、よく皆に振る舞ってくれるんですよ？',
      'ええ。もちろん、とっても美味しいです',
      'ただ……食べると何故か身体に異常をきたす人が多くて……何が原因なんでしょう？',
    ],
  },
  {
    name: '金剛',
    comme1: [
      'すずやんはラフでステューピッドなティーンエイジャー、みたいに思ってるエライ人は多いケド……',
      '意外とクールでクレバーなんだヨー？',
      'でも、ファイティングスキルはナッシングネー！',
    ],
  },
  {
    name: '鈴谷',
    comme1: [
      '金剛が前線で暴れてくれるから、鈴谷は後ろで楽できるんだよね',
      'お互いの弱点を相殺できて、まさにWin-Winっしょ？',
    ],
  },
  {
    name: '日丸',
    comme1: [
      'クソ……誰が鍵を持ってやがる……',
      'イヨの奴、何が『白い下着の子が拾ってた』だよ……',
      'テメェくらいだよ、顔じゃなくてパンツで人を見分けてんのはよ……',
    ],
  },
  {
    name: '赤城',
    comme1: [
      '長門はクソ真面目だし仕事もできるし、最高の艦娘だろうね',
      'まあ国の代表なんて肩書き、堅苦しいから私は願い下げだけどね。はっはっは！',
      'え、落とし物の鍵？ さあ……知らない子ですね……',
    ],
  },
  {
    name: '火山',
    comme1: [
      '徳川のオッサンはハゲてる。人前で絶対に帽子を取らないのが証拠だよ',
    ],
  },
  {
    name: '加賀',
    comme1: [
      '赤城さんは食事のためなら手段を選ばないところがあるわ',
      'いつも茶々を入れてくるし、鬱陶しいことこの上ないわよ',
      'そう言えば、さっき赤城さんと飛龍が一緒に何か喋っていたけれど……',
      '……いえ別に、寂しくなんてないわ',
    ],
  },
  {
    name: '長門',
    comme1: [
      '加賀は私以上に厳格で忠実だ。何が起きても心が折れない強靭な精神も持っている',
      'ただ、もう少し肩の力を抜いても良いのかもしれないな……',
      '一度だけあいつの笑った顔を見たことがあるのだが……いや、この話は辞めておこう',
      'あ！ 猫だ！ んふふふ、よちよち可愛いでちゅね～！',
    ],
  },
  {
    name: '徳川',
    comme1: [
      '私はハゲてなどいない。そんなことばかり気を取られているから最近の若造は（以下説教）',
    ],
  },
  {
    name: '竜崎',
    comme1: [
      '帽子を取って確認するまで“ハゲ”か“ハゲでない”かは分からず、確率はフィフティ・フィフティ。',
      'つまり徳川提督はハゲであると同時にハゲではありません。',
      'しかし、見えてないからと言って“ハゲ”と“ハゲでない”が両立することはあり得ない。',
      '結局はどちらかの状態には分類されているのです。',
      'これを“シュレディンガーのハゲ”と言います。',
      '厳密には部分脱毛や生え際の後退も髪が減っている、つまりハゲていると言えます。',
      'その観点からいうと、中将は前頭部から後頭部にかけて更地でしたので、完全に（以下略）',
    ],
  },
  {
    name: '？？？',
    comme1: [
      '『我々の努力と進歩の証である文明を破壊し、本能のままに罪なき人々の命を奪う深海棲艦は、その存在自体が罪である』',
      '『今日、この戦いで奴らにその罪を償わせ、我々の母なる海を取り戻すのだ』',
      '……なるほど。深海棲艦の殲滅を掲げた決戦に相応しい、素晴らしい檄文だ。さぞ熱心に私たちの多くを“断罪”したに違いない',
      'しかし、もっと素晴らしい言葉を私は知っている。それは……',
      '『この世に生きとし生けるもの、その全てが生まれながらに罪を背負っている』こと',
      '……すなわち“原罪”だ',
      '殺して食うために命を檻に囲い、生き物たちの住処を奪い、自然から奪えるだけ奪ってゴミを押し付ける',
      '人は私たちを目の敵にして正義を語るが、自分たちの傲慢さには鈍感だ',
      '人間の人間による人間のための正義を、人間以外に押しつけているのだから',
      '深海棲艦の罪を神でない人が裁くというのなら、人もまた自分たちの罪を裁かれる覚悟を持つべきだ',
      'そして、どちらの正義が正しいかなどという終わりのない議論に割く時間は無い',
      '我々の戦いはそんな崇高なものではない――',
      '――ただの“生存競争”に過ぎないのだから',
      'そういえば……ページの下の方にも艦娘が並んでいるな',
    ],
  },
];

// #region プロフィール開閉処理

// プロフィールの欄外クリックで詳細を閉じる処理
function marginClick(e) {
  if (e.target === document.querySelector('main.sb-main.character .bi-arrow-up-square-fill')) return;
  if (e.target === document.querySelector('main.sb-main.character .prof-thumb img')) return;
  if (e.target.closest('main.sb-main.character .container1') === null) charaDescClose();
}

// サムネクリックで任意のプロフィールを展開する処理を実装
for (let i = 0; i < articles.length; i++) {
  articles[i].addEventListener('click', () => {
    // サムネ一覧のスクロール位置を記憶
    charaScrolledY = charaBox.scrollTop;
    
    // 表示切り替え＆レイアウト調整 etc.
    currentArticleNum = i;
    charaBox.scroll(0, 0);
    characterPageTitle.classList.add('disappear');
    attention.classList.add('disappear');
    profCloseBtn.classList.add('show');
    articles.forEach(article => {
      if (article === articles[i]) return;
      article.classList.add('disappear');
    });
    articles[i].classList.add('open');

    profThumbs[i].style.cursor = 'url(../img/common/speech_balloon-3.cur), pointer';
    keepDefComme(i); // 初期設定の台詞を格納

    // キャラ詳細の欄外に対する処理
    charaBox.addEventListener('click', marginClick);
    charaBox.style.cursor = 'pointer';
  });
}

// プロフィールを閉じる処理
function charaDescClose() {
  const phrase = phrases[currentArticleNum];
  const thumb = profThumbs[currentArticleNum];

  characterPageTitle.classList.remove('disappear');
  attention.classList.remove('disappear');
  profCloseBtn.classList.remove('show');
  articles.forEach(article => {
    article.classList.remove('disappear');
  });
  articles[currentArticleNum].classList.remove('open');

  // 欄外に実装したイベント等をリセット
  charaBox.removeEventListener('click', marginClick);
  charaBox.style.cursor = 'initial';

  // 記憶したスクロール位置を還元
  charaBox.scroll(0, charaScrolledY);

  // キャラのコメント欄を初期設定に戻す
  if (phrase.className === 'touched') {
    phrase.textContent = defComme;
    defComme = '';
    phrase.className = '';
  }
  thumb.style.cursor = 'pointer';
}

// ボタンにプロフィールを閉じる処理を実装
profCloseBtn.addEventListener('click', charaDescClose);

// #endregion

// #region プロフィール画像タッチで台詞入れ替え

// index番目のキャラのコメント(commeNum)を表示する処理
function setcomme(index, commeNum) {
  const comme = charaComments[index][commeNum];
  const phrase = phrases[index];

  phrase.textContent = '';

  // コメントは一行ずつ表示する
  for (let i = 0; i < comme.length; i++) {
    const span = document.createElement('span');
    span.textContent = `「${comme[i]}」`;
    if (i > 0) {
      span.classList.add('disappear');
    }
    phrase.appendChild(span);
  }
  phrase.classList.add('touched');
}

// 初期設定のコメントを保持する処理
function keepDefComme(index) {
  const phrase = phrases[index];
  defComme = phrase.textContent;
}

// i番目のキャラのプロフを開いて画像クリックでコメントを表示する
for (let i = 0; i < profThumbs.length; i++) {
  const thumb = profThumbs[i];
  const phrase = phrases[i];
  const phPs = document.querySelectorAll('article .profile .phrase p');
  const phSpans = phPs[i].children;
  let rowIndex = 0;

  thumb.addEventListener('click', e => {
    if (articles[i].className !== 'open') { // サムネ一覧で画像をタッチされた場合の処理のスキップ
      return;
    }

    // articleに設定されたクリックイベント（スクロール etc.）を防止
    e.stopPropagation();

    // 用意されている台詞の数などに応じて処理を場合分け
    if (phrase.className !== 'touched') {
      setcomme(i, 'comme1');
      rowIndex = 0;

    } else {
      if (phSpans.length > 1) {
        if (rowIndex < phSpans.length - 1) {
          phSpans[rowIndex].classList.add('disappear');
          rowIndex++;
          phSpans[rowIndex].classList.remove('disappear');
        }
      }
    }
    if (rowIndex === phSpans.length - 1) {
      thumb.style.cursor = 'initial';
    }
  });
}

// #endregion
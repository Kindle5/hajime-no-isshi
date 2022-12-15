'use strict';

const footerElem = document.querySelector('body > footer');
const fAreaElem = document.createElement('div');
fAreaElem.id = 'footer-area';

// .share
const shareElem = document.createElement('div');
shareElem.classList.add('share');

const aTwiElem = document.createElement('a');
aTwiElem.classList.add('twitter-share-button');
aTwiElem.dataset.showCount = 'false';
aTwiElem.textContent = 'Tweet';

const twiScrElem = document.createElement('script');
twiScrElem.src = 'https://platform.twitter.com/widgets.js';
twiScrElem.async = true;
twiScrElem.setAttribute('charset', 'utf-8');

const shareBtnElem = document.createElement('p');
shareBtnElem.classList.add('get-url');
const iTwiElem = document.createElement('i');
iTwiElem.classList.add('bi', 'bi-link-45deg');
const btnTextElem = document.createElement('span');
btnTextElem.textContent = 'URL取得';
shareBtnElem.appendChild(iTwiElem);
shareBtnElem.appendChild(btnTextElem);

shareElem.appendChild(aTwiElem);
shareElem.appendChild(twiScrElem);
shareElem.appendChild(shareBtnElem);

// .copyright
const copyrightElem = document.createElement('div');
copyrightElem.classList.add('copyright');

const originNameElem = document.createElement('p');
originNameElem.textContent = '原作：艦隊これくしょん';

const dmmLinkElem = document.createElement('a');
dmmLinkElem.href = 'https://www.dmm.com/netgame/feature/kancolle.html';
dmmLinkElem.setAttribute('alt', '「艦これ」公式サイト（DMM GAMES）');
dmmLinkElem.target = '_blank';
dmmLinkElem.rel = 'noopener noreferrer';
dmmLinkElem.textContent = 'DMM GAMES';

const crBrElem = document.createElement('br');

const kadoLinkElem = document.createElement('a');
kadoLinkElem.href = 'http://kancolle-anime.jp';
kadoLinkElem.setAttribute('alt', 'アニメ「艦隊これくしょん -艦これ-」公式サイト');
kadoLinkElem.target = '_blank';
kadoLinkElem.rel = 'noopener noreferrer';
kadoLinkElem.textContent = 'KADOKAWA';

copyrightElem.appendChild(originNameElem);
copyrightElem.appendChild(dmmLinkElem);
copyrightElem.appendChild(crBrElem);
copyrightElem.appendChild(kadoLinkElem);

// .addr
const addrElem = document.createElement('div');
addrElem.classList.add('addr');

const creatorElem = document.createElement('p');
creatorElem.textContent = '制作：Kindle5';
const addrAdElem = document.createElement('address');

const ytLinkElem = document.createElement('a');
ytLinkElem.href = 'https://www.youtube.com/channel/UCoe8o2HHB-74pZ-XrAdh9Jg';
ytLinkElem.target = '_blank';
ytLinkElem.rel = 'noopener noreferrer';
const ytIcoElem = document.createElement('i');
ytIcoElem.classList.add('bi', 'bi-youtube');
ytIcoElem.setAttribute('alt', '制作者のYouTubeチャンネル');
ytLinkElem.appendChild(ytIcoElem);

const nicoLinkElem = document.createElement('a');
nicoLinkElem.href = 'https://www.nicovideo.jp/user/41763323';
nicoLinkElem.target = '_blank';
nicoLinkElem.rel = 'noopener noreferrer';
const nicoIcoElem = document.createElement('i');
nicoIcoElem.classList.add('bi', 'bi-display');
nicoIcoElem.setAttribute('alt', '制作者のニコニコ動画ユーザーページ');
nicoLinkElem.appendChild(nicoIcoElem);

const twiLinkElem = document.createElement('a');
twiLinkElem.href = 'https://twitter.com/Kindle_Five';
twiLinkElem.target = '_blank';
twiLinkElem.rel = 'noopener noreferrer';
const twiIcoElem = document.createElement('i');
twiIcoElem.classList.add('bi', 'bi-twitter');
twiIcoElem.setAttribute('alt', '制作者のTwitter');
twiLinkElem.appendChild(twiIcoElem);

addrAdElem.appendChild(ytLinkElem);
addrAdElem.appendChild(nicoLinkElem);
addrAdElem.appendChild(twiLinkElem);

addrElem.appendChild(creatorElem)
addrElem.appendChild(addrAdElem);

// footerに内容を追加
fAreaElem.appendChild(shareElem);
fAreaElem.appendChild(copyrightElem);
fAreaElem.appendChild(addrElem);

footerElem.appendChild(fAreaElem);

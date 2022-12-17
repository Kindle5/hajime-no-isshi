'use strict';

{
  // モバイル版メニューボタン
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  function open_M_Menu() {
    overlay.classList.add('show');
    open.classList.add('disappear');
  }

  function close_M_Menu() {
    overlay.classList.remove('show');
    open.classList.remove('disappear');
  }
  
  open.addEventListener('click', open_M_Menu);
  close.addEventListener('click', close_M_Menu);

  // タブレット＆PC版メニューボタン
  const l_open = document.querySelector('.overlay .menu-btn.l-open');
  const l_close = document.querySelector('.overlay .menu-btn.l-close');
  const menu = document.querySelector('.overlay .menu');

  function openMenu() {
    l_close.classList.remove('disappear');
    l_open.classList.add('disappear');
    menu.animate([
      { offset: 0, transform: 'translateX(-320px)' },
      { offset: 0.6, transform: 'translateX(40px)' },
      { offset: 1, transform: 'translateX(0px)' },
    ], {
      duration: 400,
      fill: 'forwards',
      easing: 'ease-in-out',
    });
  }

  function closeMenu() {
    l_open.classList.remove('disappear');
    l_close.classList.add('disappear');
    menu.animate([
      { transform: 'translateX(0px)' },
      { transform: 'translateX(-320px)' },
    ], {
      duration: 300,
      fill: 'forwards',
      easing: 'ease-in',
    });
  }

  (function showMenuBtn() {
    l_close.animate([
      {
        offset: 0,
        opacity: '0',
      },
      {
        offset: 0.8,
        opacity: '0',
      },
      {
        offset: 1,
        opacity: '0.5',
      },
    ], {
      duration: 2000,
      fill: 'forwards',
    });
  })();

  function menuBtnMouseOver() {
    const opChange = [
      { opacity: '0.5' },
      { opacity: '1' },
    ];
    this.animate(opChange, {
      fill: 'forwards',
    });
  }

  function menuBtnMouseLeave() {
    const opChange = [
      { opacity: '1' },
      { opacity: '0.5' },
    ];
    this.animate(opChange, {
      fill: 'forwards',
    });
  }

  l_open.addEventListener('mouseover',menuBtnMouseOver);
  l_open.addEventListener('mouseleave',menuBtnMouseLeave);
  l_close.addEventListener('mouseover',menuBtnMouseOver);
  l_close.addEventListener('mouseleave',menuBtnMouseLeave);
  l_open.addEventListener('click', openMenu);
  l_close.addEventListener('click', closeMenu);

  // メニューで表示中のページを明示
  function tellCurrentPage() {
    for (const page of Object.values(menuLi)) {
      const pageRe = new RegExp(page);
      const regArray = pageRe.exec(currentPagePath);
      if (regArray !== null) {
        document.querySelector(`.menu li.${regArray[0]}`).classList.add('current-exp');
        break;
      }
    }
  };

  const currentPagePath = location.pathname;
  const menuLi = { m1: 'index', m2: 'Notice', m3: 'Story', m4: 'Character', m5: 'Gallery', m6: 'Diagnosis', m7: 'Special_Thanks', m8: 'Links'};

  // メニュー展開
  const menuIndexes = document.querySelectorAll('.overlay .menu li');

  function extendMenu() {
    for (let i = 0; i < menuIndexes.length; i++) {
      menuIndexes[i].animate([
        { transform: `translateY(${-64 * i}px)` },
        { transform: 'translateY(0)' },
      ], {
        duration: 1000,
        easing: 'ease-in-out',
      });
    }
  };

  (function () {
    const topReg = /index/;
    if (window.innerWidth >= 600) {
      if (window.innerWidth >= 1280) {
        extendMenu();
      } else {
        // トップページならメニュー展開
        if (topReg.test(currentPagePath)) {
          extendMenu();
        // それ以外なら閉じる
        } else {
          closeMenu();
        }
      }
      setTimeout(tellCurrentPage, 1500);
    } else {
      tellCurrentPage();
    }
  })();

  // トップに戻るボタン&'read more'表示
  function onScrollcallback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        toTop.classList.add('scroll');
        if (readMore !== null) {
          readMore.classList.remove('show');
        }
      } else {
        toTop.classList.remove('scroll');
        if (readMore !== null) {
          readMore.classList.add('show');
        }
      }
    });
  }

  const toTop = document.getElementById('to-top');
  const readMore = document.getElementById('read-more');
  const targetElem = document.getElementById('target');
  const onScrollObserver = new IntersectionObserver(onScrollcallback);
  if (targetElem) {
    onScrollObserver.observe(targetElem);
    toTop.addEventListener('click', e => {
      e.preventDefault();
      const scrOp = {
        top: 0,
        left:0,
        behavior: 'smooth',
      }
      // トップとそれ以外のページで挙動を場合分け
      if (toTop.parentElement.className === 'box-scroll') {
        document.querySelector('main.sb-main').scrollTo(scrOp);
      } else {
        window.scrollTo(scrOp);
      }
    });
  }

  // 隠し要素表示イベント
  function appendOmake() { // メニューに項目を追加
    const omakeDiv = document.createElement('div');
    const omakeLi = document.createElement('li');
    const omakeA = document.createElement('a');
    const checkClosedMenu = new RegExp('disappear');
    if (checkClosedMenu.test(l_close.classList)) {
      openMenu();
    }
    sessionStorage.setItem('omakeflag', 'true');
    omakeDiv.classList.add('omake');
    omakeA.textContent = 'Omake';
    omakeA.href = '/hajime-no-isshi/subpages/omake.html';
    menu.appendChild(omakeDiv);
    omakeDiv.appendChild(omakeLi);
    omakeLi.appendChild(omakeA);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    if (document.querySelector('html').clientWidth < 600) {
      setTimeout(open_M_Menu, 600);
    }
  }

  function akagiColored() {
    o_akagi.classList.add('rotatein');
    if (o_zuikaku.className === 'rotatein') {
      setTimeout(appendOmake, 800);
    }
  }

  function zuikakuColored() {
    o_zuikaku.classList.add('rotatein');
    if (o_akagi.className === 'rotatein') {
      setTimeout(appendOmake, 800);
    }
  }

  const o_akagi = document.getElementById('o-akagi');
  const o_zuikaku = document.getElementById('o-zuikaku');
  if (o_akagi) o_akagi.addEventListener('click', akagiColored);
  if (o_zuikaku) o_zuikaku.addEventListener('click', zuikakuColored);

  // サイトURL共有
  const getUrlBtn = document.querySelector('.share .get-url');
  getUrlBtn.addEventListener('click', e => {
      let url = location;
      let title = document.title;
      if (!Boolean(url)) {
        url = 'URLを取得できませんでした'
      }
      e.target.animate([
          { opacity: 1 },
          { opacity: 0 },
        ], {
          duration: 100,
          easing: 'linear',
          iterations: 4,
          direction: 'alternate',
        });
      navigator.clipboard.writeText(title + " " + url);
  });
}
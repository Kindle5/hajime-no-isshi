(function () {
  'use strict'

  const omakeflag = sessionStorage.getItem('omakeflag');

  if (omakeflag !== 'true') { // オマケページへの鍵を開いていない場合トップへ
    alert('このページはリダイレクトできません。');
    try {
      location = '../index.html';
    } catch {
      stop();
    }
  } else {
    sessionStorage.removeItem('omakeflag');
  }
})();
/* English News Study — shared interactions */
(function () {
  // ---- theme ----
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem('ens-theme'); } catch (e) {}
  if (saved) root.setAttribute('data-theme', saved);

  function currentTheme() {
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  window.ENS = {
    toggleTheme: function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('ens-theme', next); } catch (e) {}
    },
    // show/hide all Korean gloss (.summary-kr, .kr) on the page
    toggleKR: function (btn) {
      var on = root.classList.toggle('hide-kr');
      if (btn) btn.textContent = on ? '한국어 보기' : '한국어 숨기기';
    }
  };
})();

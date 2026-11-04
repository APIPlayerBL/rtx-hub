// Preloader: runs only on first visit per (session/local) storage
(function () {
  const root = document.getElementById('preloader');
  const seen = (function () {
    try { return localStorage.getItem('rtx-preloader-seen') === '1' || sessionStorage.getItem('rtx-preloader-seen') === '1'; } catch (e) { return false; }
  })();
  if (!root) return;
  if (seen) {
    root.remove();
    // neutralise loader API used by main.js
    window.__wtLoader = { set: function(){}, done: function(){} };
    return;
  }
  // original builder
(function () {
        var root = document.getElementById('preloader'); if (!root) return;
        var N = 32;
        var ticks = document.getElementById('loader-ticks'), num = document.getElementById('loader-progress');
        var stageEl = document.getElementById('loader-stage'), logRows = document.getElementById('loader-log').children;
        var clock = document.getElementById('loader-clock'), live = true, t0 = performance.now();
        for (var i = 0; i < N; i++) { var t = document.createElement('i'); t.style.setProperty('--k', i); ticks.appendChild(t); }
        var tickEls = ticks.children;
        document.getElementById('loader-session').textContent = '0x' + Math.floor(Math.random() * 65535).toString(16).toUpperCase().padStart(4, '0');
        var row = 0;
        function log(label, status) {
            if (row >= logRows.length) return;
            var r = logRows[row++];
            r.innerHTML = '&gt; ' + label + (status ? ' <b>' + status + '</b>' : '');
            requestAnimationFrame(function () { r.classList.add('in'); });
        }
        (function tick(now) { if (!live) return; clock.textContent = ((now - t0) / 1000).toFixed(3).padStart(6, '0'); requestAnimationFrame(tick); })(t0);
        log('BOOT SEQUENCE', 'OK');
        var stage = '', logged = {};
        function setStage(s) {
            if (s === stage) return;
            stage = s; stageEl.textContent = s;
            stageEl.classList.remove('flick'); void stageEl.offsetWidth; stageEl.classList.add('flick');
        }
        window.__wtLoader = {
            set: function (pct, loaded, total) {
                num.textContent = String(pct).padStart(3, '0');
                if (ticks.classList.contains('idle')) ticks.classList.remove('idle');
                var lit = Math.round(pct / 100 * N);
                for (var i = 0; i < N; i++) tickEls[i].className = i < lit - 1 ? 'on' : (i === lit - 1 ? 'lead' : '');
                if (!logged.core) { logged.core = 1; log('RENDER CORE', 'ONLINE'); }
                if (pct < 70) setStage('STREAMING TEXTURES ' + loaded + '/' + total);
                else if (pct < 90) { setStage('COMPILING SHADERS'); if (!logged.tex) { logged.tex = 1; log('TEXTURES ' + total + '/' + total, 'OK'); } }
                else if (pct < 100) { setStage('CALIBRATING LIGHT'); if (!logged.sh) { logged.sh = 1; log('SHADERS', 'OK'); } }
            },
            done: function () {
                if (!logged.tex) log('TEXTURES', 'OK');
                if (!logged.sh) log('SHADERS', 'OK');
                log('SCENE', 'READY');
                setStage('SYSTEM READY');
                root.classList.add('pl-ready');
                setTimeout(function () { root.classList.add('pl-exit'); }, 180);
                setTimeout(function () { live = false; }, 1600);
            }
        };
    })();
  // mark seen when done: patch __wtLoader.done
  if (window.__wtLoader) {
    const _done = window.__wtLoader.done.bind(window.__wtLoader);
    window.__wtLoader.done = function(){ _done(); try { localStorage.setItem('rtx-preloader-seen','1'); sessionStorage.setItem('rtx-preloader-seen','1'); } catch(e){} };
  }
})();

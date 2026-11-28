/* Home banner slider: autoplay, arrows, dots, swipe, keyboard. Pauses on hover/focus. */
(function () {
  var hb = document.getElementById('home-banner');
  if (!hb) return;
  var slides = [].slice.call(hb.querySelectorAll('.sl'));
  var dots = [].slice.call(hb.querySelectorAll('.hb-dot'));
  var DELAY = 6000, idx = 0, timer = null, busy = false;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  hb.style.setProperty('--dur', DELAY + 'ms');

  function go(n) {
    n = (n + slides.length) % slides.length;
    if (n === idx || busy) return;
    busy = true;
    var prev = slides[idx], next = slides[n];
    prev.classList.remove('is-active'); prev.classList.add('is-leaving');
    next.classList.add('is-active');
    dots[idx].classList.remove('is-active'); dots[n].classList.add('is-active');
    hb.style.setProperty('--hb-fg', next.getAttribute('data-fg')); hb.style.setProperty('--hb-bg', next.getAttribute('data-bg'));
    idx = n;
    var lockMs = window.innerWidth <= 900 ? 650 : 1200;
    setTimeout(function () { prev.classList.remove('is-leaving'); busy = false; }, lockMs);
    restart();
  }
  function restart() {
    stop();
    // restart dot progress animation
    var d = dots[idx]; d.classList.remove('is-active'); void d.offsetWidth; d.classList.add('is-active');
    if (!reduce) timer = setInterval(function () { go(idx + 1); }, DELAY);
  }
  function stop() { if (timer) { clearInterval(timer); timer = null; } }

  hb.querySelectorAll('.hb-arrow').forEach(function (b) {
    b.addEventListener('click', function () { go(idx + parseInt(b.getAttribute('data-dir'), 10)); });
  });
  dots.forEach(function (d, i) { d.addEventListener('click', function () { go(i); }); });

  // Pause on mouse hover only so touch taps on mobile never freeze autoplay
  hb.addEventListener('pointerenter', function (e) {
    if (e.pointerType === 'mouse') { hb.classList.add('is-paused'); stop(); }
  });
  hb.addEventListener('pointerleave', function (e) {
    if (e.pointerType === 'mouse') { hb.classList.remove('is-paused'); restart(); }
  });
  hb.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') go(idx + 1);
    if (e.key === 'ArrowLeft') go(idx - 1);
  });
  var x0 = null;
  hb.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  hb.addEventListener('touchend', function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) go(idx + (dx < 0 ? 1 : -1));
    x0 = null;
  });
  document.addEventListener('visibilitychange', function () { document.hidden ? stop() : restart(); });
  hb.style.setProperty('--hb-fg', slides[0].getAttribute('data-fg')); hb.style.setProperty('--hb-bg', slides[0].getAttribute('data-bg'));
  restart();
})();

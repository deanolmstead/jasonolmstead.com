/* New Worlds prototype helpers: tiny screen router + resettable state.
   Usage:
     <section data-screen="home"> ... </section>
     <section data-screen="pick-artists" hidden> ... </section>
     <button onclick="NW.go('pick-artists')">Choose an Artist</button>
     <button onclick="NW.back()">Back</button>
     <div class="greeting" data-reset>Good to have you back, J</div>   <- long-press 1s to reset
   Reset also runs when the URL ends in ?reset
   State: NW.state.artists = [...]; NW.save();  (cleared on reset)
*/
(function () {
  var KEY = 'nw-proto-state';
  var HOME = 'home';
  var stack = [HOME];

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  var NW = window.NW = { state: load() };

  NW.save = function () {
    try { localStorage.setItem(KEY, JSON.stringify(NW.state)); } catch (e) {}
  };

  function show(name) {
    var found = false;
    document.querySelectorAll('[data-screen]').forEach(function (el) {
      var on = el.getAttribute('data-screen') === name;
      el.hidden = !on;
      if (on) { found = true; el.scrollTop = 0; }
    });
    if (!found) console.warn('NW: no screen named "' + name + '"');
    window.scrollTo(0, 0);
  }

  NW.go = function (name) {
    stack.push(name);
    show(name);
  };

  NW.back = function () {
    if (stack.length > 1) stack.pop();
    show(stack[stack.length - 1]);
  };

  NW.reset = function () {
    NW.state = {};
    try { localStorage.removeItem(KEY); } catch (e) {}
    stack = [HOME];
    show(HOME);
    document.dispatchEvent(new CustomEvent('nw:reset'));
    if (navigator.vibrate) navigator.vibrate(30);
  };

  /* long-press (1s) on any [data-reset] element */
  var timer = null;
  function start() { clearTimeout(timer); timer = setTimeout(NW.reset, 1000); }
  function cancel() { clearTimeout(timer); }
  document.addEventListener('touchstart', function (e) {
    if (e.target.closest('[data-reset]')) start();
  }, { passive: true });
  ['touchend', 'touchmove', 'touchcancel'].forEach(function (t) {
    document.addEventListener(t, cancel, { passive: true });
  });

  /* ?reset in the URL */
  if (/[?&]reset\b/.test(location.search)) {
    NW.reset();
    history.replaceState(null, '', location.pathname);
  } else {
    show(HOME);
  }
})();
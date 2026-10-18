/* New Worlds prototype helpers (jQuery version): screen router, toggles, resettable state.
   Load order: jQuery, then this file, then your own code.

   Screens:   <section data-screen="home"> ... </section>
              <section data-screen="pick-artists" hidden> ... </section>
              $('#choose').on('click', function () { NW.go('pick-artists'); });
              $('.back').on('click', NW.back);
   Toggles:   <div data-toggle="artist-tortoise"> ... </div>   (adds/removes class "on")
              NW.picked()  -> array of ids currently on
              $(document).on('nw:change', function () { ...redraw avatar stack... });
   Reset:     long-press 1s on any [data-reset] element, or open the page with ?reset
              $(document).on('nw:reset', function () { ... });
*/
$(function () {
  var KEY = 'nw-proto-state';
  var HOME = 'home';
  var stack = [HOME];
  var $doc = $(document);

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }

  var NW = window.NW = { state: load() };
  NW.state.picked = NW.state.picked || [];

  NW.save = function () {
    try { localStorage.setItem(KEY, JSON.stringify(NW.state)); } catch (e) {}
  };

  NW.picked = function () { return NW.state.picked.slice(); };

  /* screens */
  function show(name) {
    var $target = $('[data-screen="' + name + '"]');
    if (!$target.length) { console.warn('NW: no screen named "' + name + '"'); return; }
    $('[data-screen]').prop('hidden', true);
    $target.prop('hidden', false);
    $('.app').scrollTop(0);
  }

  NW.go = function (name) {
    if (!$('[data-screen="' + name + '"]').length) { console.warn('NW: no screen named "' + name + '"'); return; }
    stack.push(name);
    show(name);
  };

  /* tap areas: data-go="screen-name" goes there, data-back goes back */
  $doc.on('click', '[data-go]', function () { NW.go($(this).data('go')); });
  $doc.on('click', '[data-back]', function () { NW.back(); });

  NW.back = function () {
    if (stack.length > 1) stack.pop();
    show(stack[stack.length - 1]);
  };

  /* toggles */
  function paint() {
    $('[data-toggle]').each(function () {
      var on = NW.state.picked.indexOf($(this).data('toggle')) > -1;
      $(this).toggleClass('on', on).attr('aria-pressed', on);
    });
    $doc.trigger('nw:change', [NW.picked()]);
  }

  $doc.on('click', '[data-toggle]', function () {
    var id = $(this).data('toggle');
    var i = NW.state.picked.indexOf(id);
    if (i > -1) NW.state.picked.splice(i, 1); else NW.state.picked.push(id);
    NW.save();
    paint();
  });

  /* reset */
  NW.reset = function () {
    NW.state = { picked: [] };
    try { localStorage.removeItem(KEY); } catch (e) {}
    stack = [HOME];
    show(HOME);
    paint();
    $doc.trigger('nw:reset');
    if (navigator.vibrate) navigator.vibrate(30);
  };

  var timer = null;
  $doc.on('touchstart', '[data-reset]', function () {
    clearTimeout(timer);
    timer = setTimeout(NW.reset, 1000);
  });
  $doc.on('touchend touchmove touchcancel', function () { clearTimeout(timer); });

  /* start up */
  if (/[?&]reset\b/.test(location.search)) {
    history.replaceState(null, '', location.pathname);
    NW.reset();
  } else {
    show(HOME);
    paint();
  }

  /* intro: plays once, then gets out of the way */
  $('.splash').on('animationend', function (e) {
    if (e.originalEvent.animationName === 'fade-out') $(this).remove();
  });
  $('.home').on('animationend', function (e) {
    if (e.target === this) $(this).removeClass('intro');
  });
});

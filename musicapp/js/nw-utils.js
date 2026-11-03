/* New Worlds prototype helpers (jQuery version): screen router, toggles, resettable state.
   Load order: jQuery, then this file, then your own code.

   Screens:   <section data-screen="home"> ... </section>
              <section data-screen="pick-artists" hidden> ... </section>
              $('#choose').on('click', function () { NW.go('pick-artists'); });
              $('.back').on('click', NW.back);
   Toggles:   <div data-toggle="artist-tortoise"> ... </div>   (adds/removes class "on")
              NW.picked()  -> array of ids currently on
              $(document).on('nw:change', function () { ...redraw avatar stack... });
   Tabs:      <a class="hot" data-tab="home"> jumps to a screen and clears the back history
   Reset:     long-press 1s on any [data-reset] element, or open the page with ?reset
              $(document).on('nw:reset', function () { ... });
*/
$(function () {
  var KEY = 'nw-proto-state';
  var HOME = 'home';
  var stack = [HOME];
  var $doc = $(document);

  /* VIEWPORT READOUT (debug): small green box top-right showing the numbers iOS reports, so you can screenshot them.
     If "gap" is not 0 in the home-screen app, iOS sized the layout short (see notes). Set DEBUG_VIEWPORT = false when done. */
  var DEBUG_VIEWPORT = false;

  /* STANDALONE HEIGHT FIX: in the iOS home-screen app, give the page a minimum height equal to the real screen height.
     Right after this was added, the bottom gap went away (layout 852 instead of 793). Harmless in Safari and on desktop. */
  function fitHeight() {
    if (!window.navigator.standalone) return;
    var portrait = window.innerHeight >= window.innerWidth;
    var H = portrait ? Math.max(screen.width, screen.height) : Math.min(screen.width, screen.height);
    document.documentElement.style.minHeight = H + 'px';
    document.body.style.minHeight = H + 'px';
  }
  fitHeight();
  $(window).on('resize orientationchange pageshow', fitHeight);
  document.addEventListener('visibilitychange', fitHeight);

  function fitGap() {
    if (!DEBUG_VIEWPORT) return;
    var sa = !!window.navigator.standalone;
    var gap = sa ? Math.round(Math.max(screen.width, screen.height) - window.innerHeight) : 0;
    var $d = $('#vp-debug');
    if (!$d.length) $d = $('<div id="vp-debug"></div>').attr('style', 'position:fixed;top:calc(env(safe-area-inset-top) + 2px);right:6px;z-index:99999;font:10px/1.3 monospace;color:#0f0;background:rgba(0,0,0,.6);padding:3px 5px;border-radius:4px;pointer-events:none').appendTo('body');
    var vv = window.visualViewport ? Math.round(window.visualViewport.height) : '-';
    $d.html('inner ' + window.innerWidth + 'x' + window.innerHeight + '<br>screen ' + screen.width + 'x' + screen.height + '<br>visual ' + vv + ' client ' + document.documentElement.clientHeight + '<br>gap ' + gap + ' standalone ' + sa);
    probes();
  }

  /* PROBES (debug): colored bars that show which kinds of positioning can paint in the strip at the bottom.
     A red = fixed, bottom:0   B blue = fixed, placed at the screen's bottom edge   C green = absolute, placed at the screen's bottom edge
     right-edge bars: magenta = 100lvh tall, cyan = 100dvh, orange = 100svh. Screenshot the phone and send it over. Remove with DEBUG_PROBES = false. */
  var DEBUG_PROBES = false;
  function probes() {
    if (!DEBUG_PROBES || $('#vp-probes').length) return;
    var H = Math.max(screen.width, screen.height);
    function bar(label, style, bg) {
      return $('<div></div>').attr('style', 'z-index:99998;pointer-events:none;font:9px/14px monospace;color:#000;overflow:hidden;white-space:nowrap;' + style + 'background:' + bg).text(label);
    }
    var $w = $('<div id="vp-probes"></div>').appendTo('body');
    $w.append(bar('A fixed bottom:0', 'position:fixed;left:0;width:30%;bottom:0;height:14px;', '#f55'));
    $w.append(bar('C abs top:' + (H - 14), 'position:absolute;left:35%;width:30%;top:' + (H - 14) + 'px;height:14px;', '#5d5'));
    $w.append(bar('B fixed top:' + (H - 14), 'position:fixed;left:70%;width:30%;top:' + (H - 14) + 'px;height:14px;', '#59f'));
    $w.append(bar('', 'position:fixed;top:0;right:0;width:5px;height:100lvh;', 'magenta'));
    $w.append(bar('', 'position:fixed;top:0;right:8px;width:5px;height:100dvh;', 'cyan'));
    $w.append(bar('', 'position:fixed;top:0;right:16px;width:5px;height:100svh;', 'orange'));
  }
  fitGap();
  $(window).on('resize orientationchange pageshow', fitGap);
  document.addEventListener('visibilitychange', fitGap);
  setTimeout(fitGap, 300); setTimeout(fitGap, 1500);

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
  var current = null, scrollAt = {};
  function show(name, restore) {
    $('[data-screen="' + name + '"] [data-carousel]').each(function () { this.scrollLeft = 0; });$('[data-screen]').prop('hidden', true);
    var $target = $('[data-screen="' + name + '"]');
    if (!$target.length) { console.warn('NW: no screen named "' + name + '"'); return; }
    if (current) scrollAt[current] = $('.app').scrollTop();
    if (current) $('[data-screen="' + current + '"] [data-carousel]').each(function () { $(this).data('nwLeft', this.scrollLeft); }); /* CAROUSEL: remember sideways position */    
    $target.prop('hidden', false);
    $('.app').scrollTop(restore ? (scrollAt[name] || 0) : 0);
    $target.find('[data-carousel]').each(function () { this.scrollLeft = restore ? ($(this).data('nwLeft') || 0) : 0; }); /* CAROUSEL */
    current = name;
    document.body.setAttribute('data-view', stack[0]);   /* parent tab: home, library or discovery */
    document.body.setAttribute('data-page', name);       /* the exact screen you're on */    
  }

  NW.go = function (name) {
    if (!$('[data-screen="' + name + '"]').length) { console.warn('NW: no screen named "' + name + '"'); return; }
    stack.push(name);
    show(name);
  };

  /* tap areas: data-go="screen-name" goes there, data-back goes back,
     data-tab="screen-name" jumps there and clears the history (for the nav tabs) */
  $doc.on('click', '[data-go]', function () { NW.go($(this).data('go')); });
  $doc.on('click', '[data-back]', function () { NW.back(); });
  $doc.on('click', '[data-tab]', function () { NW.tab($(this).data('tab')); });

  NW.tab = function (name) {
    if (!$('[data-screen="' + name + '"]').length) { console.warn('NW: no screen named "' + name + '"'); return; }
    stack = [name];
    show(name, true);
  };

  NW.back = function () {
    if (stack.length > 1) stack.pop();
    show(stack[stack.length - 1], true);
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

  /* carousels (CAROUSEL): <div class="slice" data-carousel> scrolls sideways when its image is wider than the screen.
     Sizing uses your 2x artboard: an image 786 px wide fills the screen; 1572 px wide is two screens, etc.
     Optional data-card="300" snaps to every 300 pt (card width + gap). */
  var ARTBOARD = 786;   /* px width of one screen in your exports (393 pt at 2x) */
  $('.slice[data-carousel]').each(function () {
    var $slice = $(this);
    var img = $slice.find('img').get(0);
    if (!img) return;
    var $strip = $('<div class="strip"></div>');
    $slice.wrapInner($strip);
    $strip = $slice.children('.strip');
    function size() {
      var ratio = Math.max(1, img.naturalWidth / ARTBOARD);
      $strip.css('--strip', ratio);
      var card = parseFloat($slice.attr('data-card'));
      $strip.children('.snap').remove();
      $slice.removeClass('snaps');
      if (card > 0 && ratio > 1) {
        var total = ratio * 393;   /* strip width in pt */
        var end = total - 393, xs = [];
        for (var x = 0; x < end; x += card) xs.push(x);
        xs.push(end);   /* last stop = the very end, so the final card is reachable */
        $.each(xs, function (i, x) {
          $('<i class="snap"></i>').css('left', (x / total * 100) + '%').appendTo($strip);
        });
        $slice.addClass('snaps');
      }
    }
    if (img.complete && img.naturalWidth) size(); else $(img).one('load', size);
  });

  /* intro: plays once, then gets out of the way */
  $('.splash').on('animationend', function (e) {
    if (e.originalEvent.animationName === 'fade-out') $(this).remove();
  });
  $('.home').on('animationend', function (e) {
    if (e.target === this) $(this).removeClass('intro');
  });
});
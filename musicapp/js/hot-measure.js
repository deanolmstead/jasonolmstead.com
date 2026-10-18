/* New Worlds: tap-area measuring helper. Does nothing unless the URL has ?hot
   Open  .../musicapp/?hot   then on any slice (or the nav):
     tap the TOP-LEFT corner of the button, then the BOTTOM-RIGHT corner.
   It draws the box and prints a ready-to-paste line in the panel at the top.
   Tap the panel to clear it. In this mode taps do NOT navigate (so you can measure freely).
   Load order: jQuery, nw-utils.js, then this file. */
$(function () {
  if (!/[?&]hot\b/.test(location.search)) return;

  $('<style>' +
    '.hot{outline:2px solid #f33;background:rgba(255,51,51,.18)}' +
    '#hotout{position:fixed;left:8px;right:8px;top:calc(env(safe-area-inset-top) + 8px);z-index:200;' +
      'max-height:32vh;overflow:auto;background:rgba(0,0,0,.88);color:#7CFF7C;' +
      'font:11px/1.4 ui-monospace,Menlo,monospace;padding:8px;border-radius:8px;white-space:pre-wrap;' +
      '-webkit-user-select:text;user-select:text}' +
    '.hotdot{position:absolute;width:12px;height:12px;margin:-6px 0 0 -6px;border-radius:50%;background:#ff0;z-index:150;pointer-events:none}' +
  '</style>').appendTo('head');

  var $out = $('<div id="hotout">?hot mode: tap top-left, then bottom-right of a button. Tap here to clear.</div>').appendTo('body');
  $out.on('click', function (e) { e.stopPropagation(); $out.text('cleared. tap top-left, then bottom-right.'); });

  /* taps must not navigate while measuring */
  $('[data-go],[data-back]').each(function () {
    var $a = $(this);
    $a.attr('data-was', ($a.attr('data-go') ? 'data-go="' + $a.attr('data-go') + '"' : 'data-back'));
    $a.removeAttr('data-go').removeAttr('data-back');
  });

  var first = null, $dot = null;
  function pct(n) { return Math.round(n * 10) / 10; }

  $(document).on('click', '.slice', function (e) {
    e.preventDefault();
    var $s = $(this), r = this.getBoundingClientRect();
    var x = (e.clientX - r.left) / r.width * 100;
    var y = (e.clientY - r.top) / r.height * 100;
    var img = ($s.find('img').attr('src') || '?').split('/').pop();

    if (!first || first.el !== this) {
      if ($dot) $dot.remove();
      first = { el: this, x: x, y: y };
      $dot = $('<div class="hotdot"></div>').css({ left: x + '%', top: y + '%' }).appendTo($s);
      return;
    }

    var left = Math.min(first.x, x), top = Math.min(first.y, y);
    var w = Math.abs(x - first.x), h = Math.abs(y - first.y);
    var style = 'left:' + pct(left) + '%; top:' + pct(top) + '%; width:' + pct(w) + '%; height:' + pct(h) + '%';
    $s.append('<a class="hot" style="' + style + '"></a>');
    $dot.remove(); $dot = null; first = null;

    var line = '<a class="hot" data-go="" style="' + style + '"></a>';
    $out.append('\n' + img + ':\n' + line);
    $out.scrollTop($out[0].scrollHeight);
    if (window.console) console.log(img, line);
  });
});

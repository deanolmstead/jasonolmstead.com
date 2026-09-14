$(document).ready(function(){
	$('body').removeClass('track-update');
    $(".bg-home-art").addClass("active");
	$(".play-tracks").click(function() {
        $("body").addClass("view-player");
        $("body").removeClass("view-main");
        $(".bg-home-art").removeClass("active");
        $(".track-preview").addClass("bottom-onscreen");
        $(".track-preview").removeClass("bottom-offscreen");
        $(".overview").addClass("top-offscreen");
        $(".overview").removeClass("top-onscreen");
        $(".play-tracks").addClass("fade-out");
        $(".play-tracks").removeClass("fade-in--slow");
        $(".track-listening__player").removeClass("fade-out");
        $(".view-change").addClass("active");
	});
    $(".close--arrow").click(function() {
		$("body").addClass("view-main");
	    $("body").removeClass("view-player");
        $(".bg-home-art").addClass("active");
        $(".track-preview").addClass("bottom-offscreen");
        $(".track-preview").removeClass("bottom-onscreen");
	    $(".overview").addClass("top-onscreen");
	    $(".overview").removeClass("top-offscreen");
	    $(".play-tracks").addClass("fade-in--slow");
	    $(".play-tracks").removeClass("fade-out");
        $(".track-listening__player").addClass("fade-out");
				setTimeout(function(){
				    $('.track-listening').removeClass('fade-out');
				}, 1000);
    });
    $(".menu, .menu-overlay, .playlist-header, .song").click(function() {
        $("body").toggleClass("view-playlist menu-open");
        $("body").toggleClass("view-player");
        $(".menu-wrapper").toggleClass("active");
        $(".menu-wrapper").removeClass("no-animation");
        $(".menu-overlay").toggleClass("active");
        $(".close").toggleClass("fade-out");
        $(".track-listening").toggleClass("active");
    });
    $(".open-modal").click(function() {
        $(".modal").addClass("modal--open");
        $(".modal").addClass("add-element");
        $(".modal").removeClass("remove-element");
        $(".modal").removeClass("modal--close");
    });
    $(".modal .close, .modal .button-cta").click(function() {
      $(".modal").addClass("modal--close");
      $(".modal").addClass("remove-element");
      $(".modal").removeClass("add-element");
      $(".modal").removeClass("modal--open");
    });
    $(".icon-heart-outlined").click(function() {
        $(".icon-heart-outlined").toggleClass("active");
    });
    /* Change URL */
    /*$(".fod-panel .case-study").click(function() {
        $(".page-transition").toggleClass("active");
        var url = "work/funnyordie/";
        var delay = 750;
        setTimeout(function() {
        window.location.href = url;
        }, delay);
    });*/
});
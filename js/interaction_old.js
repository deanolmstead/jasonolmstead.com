$(document).ready(function(){   
    /* Menu */
    $(".menu, .menu-overlay").click(function() {
        $("body").toggleClass("menu-open");
        $("html").toggleClass("no-scroll");
        $(".menu-wrapper").toggleClass("active");
        $(".menu-wrapper").removeClass("no-animation");
        $(".menu-overlay").toggleClass("active");
    });
    $(".logo").click(function() {
        $("body").removeClass("menu-open");
        $("html").removeClass("no-scroll");
        $(".menu-wrapper").removeClass("active");
        $(".menu-overlay").removeClass("active");
    });     
    $(".menu-wrapper li:nth-child(1) a, .menu-wrapper li:nth-child(2) a, .menu-wrapper li:nth-child(3) a, .menu-wrapper li:nth-child(4) a, .menu-wrapper li:nth-child(5) a").click(function() {
        $(".menu-wrapper").toggleClass("active");
        $(".menu-overlay").toggleClass("active");
        $("body").toggleClass("menu-open");
        $("html").toggleClass("no-scroll");
    });        
    $(".nav-item:nth-child(1)").click(function() {
        $(".nav-item:nth-child(1)").addClass("active");
        $(".nav-item:nth-child(2), .nav-item:nth-child(3)").removeClass("active");
        $(".about").addClass("skills-active");
        $(".about").removeClass("process-active about-active");
    });

    /* Interacts */
    $(".button-round .icon-plus").click(function() {
        $(".panel-full").addClass("active");
        $("body").addClass("no-overflow");
    });
    $(".icon-close, .close").click(function() {
        $(".panel").removeClass("active");
        $("body").removeClass("no-overflow");
    });   
    $(".icon-arrow.right").click(function() {
        $(".panel-left").addClass("active");
        $("body").addClass("no-overflow");        
    });
    $(".icon-arrow.left").click(function() {
        $(".panel-right").addClass("active");
        $("body").addClass("no-overflow");        
    });
    $(".icon-arrow.down").click(function() {
        $(".panel-down").addClass("active");
        $("body").addClass("no-overflow");
        $(".html").toggleClass("is-flickity-fullscreen");                
    });
    $(".icon-arrow.up").click(function() {
        $(".panel-up").addClass("active");
        $("body").addClass("no-overflow");        
    });
    $(".toggle").click(function() {
        $(".toggle").toggleClass("active");       
        $("html, body").toggleClass("theme-dark");
    });
    
    /* Projects */
    $(".project-item .link").click(function() {
        $(this).toggleClass("active");
        $("body").toggleClass("no-overflow");
        $(".slide-transition").toggleClass("active");
    });
    $(".project-item .link").hover(function() {
        $(".slide-transition.peek").addClass("active");
    });
    $(".project-item .link").mouseleave(function() {
        $(".slide-transition.peek").removeClass("active");
    });    
    $(".project-item .link").click(function() {
        $(".page-transition").toggleClass("active");
        var url = "project_template.html";
        /* Remove index.html when uploading */
        var delay = 1000;
        setTimeout(function() {
        window.location.href = url;
        }, delay);
    });
    setTimeout(function(){
         $('.view-project .slide-transition').removeClass('active');
    },2400);
});
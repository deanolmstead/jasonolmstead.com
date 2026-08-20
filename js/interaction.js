$(document).ready(function(){     
    /* Logo */
/*    $(".logomark").hover(function() {
        $(".logo").toggleClass("active");
    });*/
    $(".logomark").hover(function() {
        $(".logo").addClass("active");
    });    
    $(".logo").mouseleave(function() {
        $(".logo").removeClass("active");
    });     
    /* Menu2 */
    $(".menu, .menu-overlay").click(function() {
        $("body").toggleClass("menu-open");
        $("html").toggleClass("no-scroll");
        $(".menu-wrapper").toggleClass("active");
        $(".menu-wrapper").removeClass("no-animation");
        $(".menu-overlay").toggleClass("active");
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
    $(".show-submenu .open-submenu").hover(function() {
        $(".submenu").addClass("active");
        $(".nav-menu a").addClass("active");        
    });
    $(".submenu, .show-submenu").mouseleave(function() {
        $(".submenu").removeClass("active");
        $(".nav-menu a").removeClass("active");
    });
    $(".submenu, .show-submenu").click(function() {
        $(".submenu").removeClass("active");
        $(".nav-menu a").removeClass("active");
    });            
    /* Interacts */
    $(".icon-info").hover(function() {
        $(".device-laptop").toggleClass("active");
    });    
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
        $("body").toggleClass("theme-dark");
        $("body").toggleClass("theme-light");
    });
    $(".about-preview-01").hover(function() {
        $(this).addClass("no-delay");
    });    
    $(".about-preview-02").hover(function() {
        $(this).addClass("no-delay");
    });
    $(".about-preview-03").hover(function() {
        $(this).addClass("no-delay");
    });
    $(".about-preview-01").click(function() {
        $(this).addClass("active");
        $(".about-preview-02, .about-preview-03").removeClass("active");        
    });    
    $(".about-preview-02").click(function() {
        $(this).addClass("active");
        $(".about-preview-01, .about-preview-03").removeClass("active");
    });
    $(".about-preview-03").click(function() {
        $(this).addClass("active");
        $(".about-preview-01, .about-preview-02").removeClass("active");
    });    
    $(".about-preview-01").click(function() {
        $(".about-content").addClass("expertise");
        $(".about-content").removeClass("process personal");        
    });
    $(".about-preview-02").click(function() {
        $(".about-content").addClass("process");
        $(".about-content").removeClass("expertise personal");        
    }); 
    $(".about-preview-03").click(function() {
        $(".about-content").addClass("personal");
        $(".about-content").removeClass("expertise process");        
    });                       
    $(".email-button").click(function() {
        $(".email-button").toggleClass("active");
    });
    $(".email-button").mouseleave(function() {
        $(".email-button").removeClass("active");
    });                       
    /* Project Transition */
    $(".link").click(function() {
        $(this).toggleClass("active");
        $("body").toggleClass("no-overflow");
        $(".slide-transition").toggleClass("active");
    });
    $(".link").hover(function() {
        $(".slide-transition.peek").addClass("active");
    });
    $(".link").mouseleave(function() {
        $(".slide-transition.peek").removeClass("active");
    });    
    $(".link").click(function() {
        $(".page-transition").toggleClass("active");
        var url = "role/";
        var delay = 1000;
        setTimeout(function() {
        window.location.href = url;
        }, delay);
    });   
    setTimeout(function(){
         $('.view-project .slide-transition').removeClass('active');
    },2400); 
    /* Email Button */
    $('.email-button').click(function() {
        var textToCopy = $('.email-copy').text();
        var tempTextarea = $('<textarea>');
        $('body').append(tempTextarea);
        tempTextarea.val(textToCopy).select();
        document.execCommand('copy');
        tempTextarea.remove();
    });
    /* Menu Icon */
    $('.email-icon').click(function() {
        var textToCopy = $('.icon-copy').text();
        var tempTextarea = $('<textarea>');
        $('body').append(tempTextarea);
        tempTextarea.val(textToCopy).select();
        document.execCommand('copy');
        tempTextarea.remove();
    });
    /* Footer Icon */
    $('.email-footer').click(function() {
        var textToCopy = $('.footer-copy').text();
        var tempTextarea = $('<textarea>');
        $('body').append(tempTextarea);
        tempTextarea.val(textToCopy).select();
        document.execCommand('copy');
        tempTextarea.remove();
    });               
});
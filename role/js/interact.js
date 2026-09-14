$(document).ready(function(){
    $(".mobile-menu, .menu-overlay").click(function() {
        $("body").toggleClass("mobile-open");
        $(".menu-wrapper").toggleClass("active");
        $(".menu-wrapper").removeClass("no-animation");
        $(".menu-overlay").toggleClass("active");
    });
    $(".fp-responsive .home-menu-link").click(function() {
        $("body").toggleClass("mobile-open");        
    });    
    $(".menu-wrapper li:nth-child(1), .menu-wrapper li:nth-child(2), .menu-wrapper li:nth-child(3), .menu-wrapper li:nth-child(4)").click(function() {
        $(".menu-wrapper").toggleClass("active");
        $(".menu-overlay").toggleClass("active");

    });
    $(".angel").click(function() {
        $("body").toggleClass("show-kudos show-angel");        
    });
    $(".bebo").click(function() {
        $("body").toggleClass("show-kudos show-bebo");        
    });
    $(".danny").click(function() {
        $("body").toggleClass("show-kudos show-danny");        
    });
    $(".ian").click(function() {
        $("body").toggleClass("show-kudos show-ian");        
    });
    $(".logan").click(function() {
        $("body").toggleClass("show-kudos show-logan");        
    });
    $(".lyndsay").click(function() {
        $("body").toggleClass("show-kudos show-lyndsay");        
    });
    $(".steven").click(function() {
        $("body").toggleClass("show-kudos show-steven");        
    });
    $(".suzi").click(function() {
        $("body").toggleClass("show-kudos show-suzi");        
    });    
});
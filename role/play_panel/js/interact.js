$(document).ready(function(){
    $(".nav-dice").click(function() {
        $(".nav-dice, .play-panel").toggleClass("active");
        $(".panel-nav-item:not(.nav-dice)").removeClass("active");         
        $(".play-panel").addClass("panel-dice");
        $(".play-panel").removeClass("panel-maps panel-images panel-books panel-audio panel-chat");                       
        $(".room, .panel-nav").toggleClass("panel-open");         
    });
    $(".nav-maps").click(function() {
        $(".nav-maps, .play-panel").toggleClass("active");
        $(".panel-nav-item:not(.nav-maps)").removeClass("active");         
        $(".play-panel").addClass("panel-maps");
        $(".play-panel").removeClass("panel-dice panel-images panel-books panel-audio panel-chat");        
        $(".room, .panel-nav").toggleClass("panel-open");                 
    }); 
    $(".nav-images").click(function() {
        $(".nav-images, .play-panel").toggleClass("active");
        $(".panel-nav-item:not(.nav-images)").removeClass("active");
        $(".play-panel").addClass("panel-images");
        $(".play-panel").removeClass("panel-dice panel-maps panel-books panel-audio panel-chat");        
        $(".room, .panel-nav").toggleClass("panel-open");                 
    }); 
    $(".nav-books").click(function() {
        $(".nav-books, .play-panel").toggleClass("active");
        $(".panel-nav-item:not(.nav-books)").removeClass("active");         
        $(".play-panel").addClass("panel-books");
        $(".play-panel").removeClass("panel-dice panel-maps panel-images panel-audio panel-chat");
        $(".room, .panel-nav").toggleClass("panel-open");        
    }); 
    $(".nav-audio").click(function() {
        $(".nav-audio, .play-panel").toggleClass("active");
        $(".panel-nav-item:not(.nav-audio)").removeClass("active");         
        $(".play-panel").addClass("panel-audio");
        $(".play-panel").removeClass("panel-dice panel-maps panel-images panel-books panel-chat");
        $(".room, .panel-nav").toggleClass("panel-open");        
    }); 
    $(".nav-chat").click(function() {
        $(".nav-chat, .play-panel").toggleClass("active");
        $(".panel-nav-item:not(.nav-chat)").removeClass("active");         
        $(".play-panel").addClass("panel-chat");
        $(".play-panel").removeClass("panel-dice panel-maps panel-images panel-audio panel-books");
        $(".room, .panel-nav").toggleClass("panel-open");        
    });                                                
});
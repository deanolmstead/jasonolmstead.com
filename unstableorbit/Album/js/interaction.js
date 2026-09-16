$(document).ready(function(){       
    $(".widget").click(function() {
        $(this).toggleClass("close-widget");     
    });
    $(".track-row").hover(function() {
        $(this).toggleClass("active");     
    });
    $(".album-art").click(function() {
        $(this).toggleClass("active");     
    });     
/*    $(".track-number").click(function() {
        $(this).toggleClass("active");
        $(".track-number").not(this).removeClass("active");    
    });*/
/*    $(".play").click(function() {
        $(".track-number").toggleClass("active");    
    });*/            
    $(".prompt-main").click(function() {
        $(".prompt-convo").removeClass("hide");  
        $(".prompt-convo").addClass("convo-scale");  
        $(".prompt-feed").addClass("active");        
    });                     
});
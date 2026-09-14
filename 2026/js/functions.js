window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

Amplitude.init({
    "bindings": {
        37: 'prev',
        39: 'next',
        32: 'play_pause',
        32: 'play_pause'
    },
    "songs": [  
        {
            "name": "Under Saturns Return",
            "recorded": "Rec // Jan 2025",
            "url": "audio/Ruled_by_Saturn.mp3",
            "cover_art_url": "img/bg_jelly.jpg"
        },
        {
            "name": "Shattered Moons",
            "recorded": "Rec // Aug 2024",
            "url": "audio/Shattered_Saturn_Moon-J_Demo.mp3",
            "cover_art_url": "img/bg_jelly.jpg"
        },                  
        {
            "name": "Static Eyes",
            "recorded": "Rec // Jan 2025",
            "url": "audio/Static_Eyes.mp3",
            "cover_art_url": "img/bg_jelly.jpg"
        },         
        {
            "name": "Rubylith Dreams",
            "recorded": "Rec // Jun 2020",
            "url": "audio/Rubylith_Dreams.mp3",
            "cover_art_url": "img/bg_jelly.jpg"
        },        
        {
            "name": "While We Drift",
            "recorded": "Rec // Dec 2024",
            "url": "audio/While_We_Drift.mp3",
            "cover_art_url": "img/bg_jelly.jpg"
        },                
/*        {
            "name": "Departure",
            "recorded": "Rec // April 24",
            "url": "audio/Departure.mp3",
            "cover_art_url": "img/bg_jelly.jpg"
        },        
        {
            "name": "Inverse Sequence",
            "recorded": "Rec // April 3",
            "url": "audio/Another_Inverse_Cycle-J_Demo.mp3",
            "cover_art_url": "img/bg_jelly.jpg"
        },                                
        {
            "name": "New Electric Fields",
            "recorded": "Rec // April 3",
            "url": "audio/New_Electric_Fields.mp3",
            "cover_art_url": "img/bg_jelly.jpg"
        },                        
        {
            "name": "Rotary Idea",
            "recorded": "Rec // April 3",
            "url": "audio/Rotary_Idea.mp3",
            "cover_art_url": "img/bg_jelly.jpg"
        },                                      
        {
            "name": "Dream Too Deep",
            "recorded": "Rec // April 3",
            "url": "audio/Dream_Too_Deep-Piano.mp3",
            "cover_art_url": "img/bg_jelly.jpg"
        },
        {
            "name": "Spare Cycles",
            "recorded": "Rec // April 3",
            "url": "audio/Spare_Cycles-Demo1.mp3",
            "cover_art_url": "img/bg_jelly.jpg"
        },*/                                                                                                                     
    ],
    callbacks: {
        play: function(){
            $("body").addClass("track-play");
            $("body").removeClass("track-pause");            
        },
        pause: function(){
            $("body").addClass("track-pause");
            $("body").removeClass("track-play");            
        }        
    },    
    "volume": 100
});
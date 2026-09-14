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
            "name": "Sun Eater",
            "recorded": "Rec // April 3",
            "url": "audio/Sun_Eater_Guitars.mp3",
            "cover_art_url": "img/bg_wall.jpg"
        },
        {
            "name": "Rapid Descent (Bridge)",
            "recorded": "Rec // April 17",
            "url": "audio/Rapid_Descent-Bridge.mp3",
            "cover_art_url": "img/bg_wall.jpg"
        },
        {
            "name": "Lightkeeper (Bridge)",
            "recorded": "Rec // April 24",
            "url": "audio/Lightkeeper-Bridge.mp3",
            "cover_art_url": "img/bg_wall.jpg"
        },        
        {
            "name": "Slow Signal (Edit)",
            "recorded": "Rec // April 24",
            "url": "audio/Slow_Signal-Edit.mp3",
            "cover_art_url": "img/bg_wall.jpg"
        },                        
        {
            "name": "Lurkers",
            "recorded": "Rec // April 3",
            "url": "audio/Lurkers.mp3",
            "cover_art_url": "img/bg_wall.jpg"
        },   
        {
            "name": "Punching Thin Air",
            "recorded": "Rec // April 3",
            "url": "audio/Punching_Thin_Air.mp3",
            "cover_art_url": "img/bg_wall.jpg"
        },                            
        {
            "name": "Rapid Descent (New Parts)",
            "recorded": "Rec // April 24",
            "url": "audio/Rapid_Descent-New_Parts.mp3",
            "cover_art_url": "img/bg_wall.jpg"
        },        
        {
            "name": "Slow Signal",
            "recorded": "Rec // April 24",
            "url": "audio/Slow_Signal.mp3",
            "cover_art_url": "img/bg_wall.jpg"
        },        
        {
            "name": "Not Lightkeeper",
            "recorded": "Rec // April 17",
            "url": "audio/Not_Lightkeeper-Enver_Guitar.mp3",
            "cover_art_url": "img/bg_wall.jpg"
        },  
        {
            "name": "Subterfuge",
            "recorded": "Rec // April 3",
            "url": "audio/Subterfuge.mp3",
            "cover_art_url": "img/bg_wall.jpg"
        },
        {
            "name": "Low Voltage Charger",
            "recorded": "Rec // April 3",
            "url": "audio/Low_Voltage_Charger.mp3",
            "cover_art_url": "img/bg_wall.jpg"
        },        
        {
            "name": "Kids At The Pool",
            "recorded": "Rec // April 3",
            "url": "audio/Kids_At_The_Pool.mp3",
            "cover_art_url": "img/bg_wall.jpg"
        }, 
        {
            "name": "The Light",
            "recorded": "Rec // January 28",
            "url": "audio/Unstable_Orbit-The_Light.mp3",
            "cover_art_url": "img/bg_wall.jpg"
        },                                                          
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
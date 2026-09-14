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
            "name": "Tsunami Warning Sign",
            "recorded": "Rec // October 14",
            "url": "audio/Tsunami_Warning_Sign_Overdubs.mp3",
            "cover_art_url": "img/bg_rain.jpg"
        },        
        {
            "name": "Underwater Transmitter",
            "recorded": "Rec // October 14",
            "url": "audio/Underwater_Transmitter.mp3",
            "cover_art_url": "img/bg_rain.jpg"
        },
        {
            "name": "Cloudbreak",
            "recorded": "Rec // October 15",
            "url": "audio/Cloudbreak.mp3",
            "cover_art_url": "img/bg_rain.jpg"
        },
        {
            "name": "Summoner",
            "recorded": "Rec // October 14",
            "url": "audio/Summoner.mp3",
            "cover_art_url": "img/bg_rain.jpg"
        },
        {
            "name": "Where the Map Ends",
            "recorded": "Rec // October 15",
            "url": "audio/Where_The_Map_Ends.mp3",
            "cover_art_url": "img/bg_rain.jpg"
        },                
        {
            "name": "Arrival",
            "recorded": "Rec // October 15",
            "url": "audio/Arrival.mp3",
            "cover_art_url": "img/bg_rain.jpg"
        },        
        {
            "name": "Temporal Loop",
            "recorded": "Rec // October 14",
            "url": "audio/Temporal_Loop.mp3",
            "cover_art_url": "img/bg_rain.jpg"
        },        
        {
            "name": "Spy vs Spy",
            "recorded": "Rec // October 15",
            "url": "audio/Spy_vs_Spy.mp3",
            "cover_art_url": "img/bg_rain.jpg"
        },        
        {
            "name": "Unraveling Mind",
            "recorded": "Rec // October 15",
            "url": "audio/Unraveling_Mind_Edit.mp3",
            "cover_art_url": "img/bg_rain.jpg"
        },
        {
            "name": "Encoded Reflex",
            "recorded": "Rec // October 16",
            "url": "audio/Encoded_Reflex.mp3",
            "cover_art_url": "img/bg_rain.jpg"
        },                                  
        {
            "name": "Unstable Orbit",
            "recorded": "Rec // October 16",
            "url": "audio/Unstable_Orbit.mp3",
            "cover_art_url": "img/bg_rain.jpg"
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
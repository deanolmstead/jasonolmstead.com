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
            "name": "Summoner",
            "recorded": "Rec // July 16",
            "url": "audio/Summoner.mp3",
            "cover_art_url": "img/bg_jelly.jpg"
        },
        {
            "name": "Active Sonar Transmitter",
            "recorded": "Rec // December 1",
            "url": "audio/Active_Sonar_Transmitter.mp3",
            "cover_art_url": "img/bg_jelly.jpg"
        },
        {
            "name": "Where the Map Ends",
            "recorded": "Rec // June 27",
            "url": "audio/Where_the_Map_Ends.mp3",
            "cover_art_url": "img/bg_jelly.jpg"
        },                
        {
            "name": "Where the Map Ends",
            "recorded": "Rec // June 27",
            "url": "audio/Where_the_Map_Ends.mp3",
            "cover_art_url": "img/bg_jelly.jpg"
        },
        {
            "name": "Unraveling Mind",
            "recorded": "Rec // July 16",
            "url": "audio/Unraveling_Mind.mp3",
            "cover_art_url": "img/bg_jelly.jpg"
        },        
        {
            "name": "Tsunami Warning Sign",
            "recorded": "Rec // August 21",
            "url": "audio/Tsunami_Warning_Sign.mp3",
            "cover_art_url": "img/bg_jelly.jpg"
        },
        {
            "name": "Faded Phantoms",
            "recorded": "Rec // August 21",
            "url": "audio/Fading_Phantoms.mp3",
            "cover_art_url": "img/bg_jelly.jpg"
        },                
        {
            "name": "Harmonious",
            "recorded": "Rec // April 20",
            "url": "audio/Harmonious.mp3",
            "cover_art_url": "img/bg_jelly.jpg"
        },                        
        {
            "name": "Spy vs Spy",
            "recorded": "Rec // August 21",
            "url": "audio/Spy_vs_Spy.mp3",
            "cover_art_url": "img/bg_jelly.jpg"
        },
        {
            "name": "The Lost Generation",
            "recorded": "Rec // April 13",
            "url": "audio/The_Lost_Generation_Edit.mp3",
            "cover_art_url": "img/bg_jelly.jpg"
        },
        {
            "name": "Cavern Reflections (Outro)",
            "recorded": "Rec // July 16",
            "url": "audio/Cavern_Reflections-Outro.mp3",
            "cover_art_url": "img/bg_jelly.jpg"
        },        
        {
            "name": "Odanata",
            "recorded": "Rec // August 17",
            "url": "audio/Odonata.mp3",
            "cover_art_url": "img/bg_jelly.jpg"
        },                                            
        {
            "name": "Horizon Lines",
            "recorded": "Rec // May 17",
            "url": "audio/Horizon_Lines.mp3",
            "cover_art_url": "img/bg_jelly.jpg"
        },                                                                                               
        {
            "name": "Slowly Rewind",
            "recorded": "Rec // October 27",
            "url": "audio/Slowly_Rewind.mp3",
            "cover_art_url": "img/bg_jelly.jpg"
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
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
            "name": "Cloudbreak",
            "recorded": "Rec // October 15",
            "artist": "Unstable Orbit",
            "url": "audio/Cloudbreak_Pultec_MP_Edit.mp3",
            "cover_art_url": "img/bg_rain.jpg"
        },
        {
            "name": "Tsunami Warning Sign",
            "recorded": "Rec // October 14",
            "artist": "Unstable Orbit",
            "url": "audio/Tsunami_Warning_Sign_Pultec_MP_Vocals.mp3",
            "cover_art_url": "img/bg_rain.jpg"
        },        
        {
            "name": "Underwater Transmitter",
            "recorded": "Rec // October 14",
            "artist": "Unstable Orbit",
            "url": "audio/Underwater_Transmitter_Pultec_MP_CUT.mp3",
            "cover_art_url": "img/bg_rain.jpg"
        },
        {
            "name": "Summoner",
            "recorded": "Rec // October 14",
            "artist": "Unstable Orbit",
            "url": "audio/Summoner_Vocals-Dirty.mp3",
            "cover_art_url": "img/bg_rain.jpg"
        },        
        {
            "name": "Spy vs Spy",
            "recorded": "Rec // October 15",
            "artist": "Unstable Orbit",
            "url": "audio/Spy_vs_Spy-Vocals.mp3",
            "cover_art_url": "img/bg_rain.jpg"
        },        
        {
            "name": "Where the Map Ends",
            "recorded": "Rec // October 15",
            "artist": "Unstable Orbit",
            "url": "audio/Where_The_Map_Ends_Pultec_MP.mp3",
            "cover_art_url": "img/bg_rain.jpg"
        },        
        {
            "name": "Arrival",
            "recorded": "Rec // October 15",
            "artist": "Unstable Orbit",
            "url": "audio/Arrival_Pultec_MP.mp3",
            "cover_art_url": "img/bg_rain.jpg"
        },
        {
            "name": "Unstable Orbit",
            "recorded": "Rec // October 16",
            "artist": "Unstable Orbit",
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
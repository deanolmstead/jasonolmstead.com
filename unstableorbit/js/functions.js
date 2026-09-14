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
            "recorded": "Rec // February 23, 2023",
            "url": "audio/Cloudbreak.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"
        },
        {
            "name": "Encoded Reflex",
            "recorded": "Rec // February 23, 2023",
            "url": "audio/Encoded_Reflex.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"
        },                     
        {
            "name": "Slowly Rewind",
            "recorded": "Rec // October 27, 2022",
            "url": "audio/Slowly_Rewind_Edit.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"
        },
        {
            "name": "Swamp Fires",
            "recorded": "Rec // July 7, 2022",
            "url": "audio/Swamp_Fires-Overdubs.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"
        },
        {
            "name": "An Unstable Orbit",
            "recorded": "Rec // September 9, 2022",
            "url": "audio/An_Unstable_Orbit.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"            
        },
        {
            "name": "Temporal Loop",
            "recorded": "Rec // February 23, 2023",
            "url": "audio/Temporal_Loop.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"
        },
        {
            "name": "Underwater Transmitter",
            "recorded": "Rec // December 8, 2022",
            "url": "audio/Underwater_Lightning.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"
        },                
        {
            "name": "Arrival",
            "recorded": "Rec // March 2, 2023",
            "url": "audio/Arrival.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"
        },         
        {
            "name": "Lightkeeper",
            "recorded": "Rec // December 8, 2022",
            "url": "audio/Lightkeeper.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"
        },        
        {
            "name": "Spy vs Spy",
            "recorded": "Rec // February 23, 2023",
            "url": "audio/Spy_vs_Spy.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"
        },
        {
            "name": "Tunnel Sparks",
            "recorded": "Rec // February 23, 2023",
            "url": "audio/Tunnel_Sparks.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"
        },        
        {
            "name": "Departure",
            "recorded": "Rec // March 2, 2023",
            "url": "audio/Departure.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"
        },                                                                               
        {
            "name": "Siren's Call",
            "recorded": "Rec // July 21, 2022",
            "url": "audio/Sirens_Call-Overdubs.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"
        },        
        {
            "name": "Golden Chunks",
            "recorded": "Rec // September 13, 2022",
            "url": "audio/Golden_Chunks.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"
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
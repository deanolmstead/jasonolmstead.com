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
            "name": "Slowly Rewind",
            "recorded": "Rec // October 27",
            "url": "audio/Slowly_Rewind_Edit.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"
        },
        {
            "name": "Cloudbreak",
            "recorded": "Rec // August 4",
            "url": "audio/Cloudbreak_Edit.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"
        },
        {
            "name": "Encoded Reflex",
            "recorded": "Rec // July 21",
            "url": "audio/Encoded_Reflex-Edit.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"
        },        
        {
            "name": "Swamp Fires",
            "recorded": "Rec // July 7",
            "url": "audio/Swamp_Fires-Overdubs.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"
        },
        {
            "name": "An Unstable Orbit",
            "recorded": "Rec // September 9",
            "url": "audio/An_Unstable_Orbit.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"            
        },
        {
            "name": "Lightkeeper",
            "recorded": "Rec // December 8",
            "url": "audio/Lightkeeper.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"
        },
        {
            "name": "Arrival",
            "recorded": "Rec // December 1",
            "url": "audio/Arrival_Pedal_Cutout.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"
        },                                                                         
        {
            "name": "Underwater Transmitter",
            "recorded": "Rec // December 8",
            "url": "audio/Underwater_Lightning.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"
        },
        {
            "name": "Siren's Call",
            "recorded": "Rec // July 21",
            "url": "audio/Sirens_Call-Overdubs.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"
        },        
        {
            "name": "Golden Chunks",
            "recorded": "Rec // September 13",
            "url": "audio/Golden_Chunks.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"
        },                
        {
            "name": "Temporal Loop",
            "recorded": "Rec // December 8",
            "url": "audio/Temporal_Loop.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"
        },
        {
            "name": "Spy vs Spy",
            "recorded": "Rec // Jan 5",
            "url": "audio/Spy_vs_Spy.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"
        },
        {
            "name": "Tunnel Sparks",
            "recorded": "Rec // December 8",
            "url": "audio/Tunnel_Sparks.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"
        },        
        {
            "name": "Departure",
            "recorded": "Rec // September 29",
            "url": "audio/Departure_Edit.mp3",
            "cover_art_url": "img/bg_tunnel_03.jpg"
        },                        
        {
            "name": "An Unstable Orbit (redux)",
            "recorded": "Rec // October 27",
            "url": "audio/An_Unstabler_Orbit.mp3",
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
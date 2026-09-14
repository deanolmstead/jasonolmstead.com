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
            "name": "Encoded Reflex",
            "recorded": "Rec // February 23, 2023",
            "url": "audio/Encoded_Reflex.mp3",
            "cover_art_url": "img/bg_circles.jpg"
        },        
        {
            "name": "Cloudbreak", 
            "recorded": "Rec // February 23, 2023",
            "url": "audio/Cloudbreak.mp3",
            "cover_art_url": "img/bg_circles.jpg"
        },                                            
        {
            "name": "Spy vs Spy",
            "recorded": "Rec // February 23, 2023",
            "url": "audio/Spy_vs_Spy.mp3",
            "cover_art_url": "img/bg_circles.jpg"
        },
        {
            "name": "Tunnel Sparks",
            "recorded": "Rec // February 23, 2023",
            "url": "audio/Tunnel_Sparks-Edit.mp3",
            "cover_art_url": "img/bg_circles.jpg"
        },         
        {
            "name": "Temporal Loop",
            "recorded": "Rec // February 23, 2023",
            "url": "audio/Temporal_Loop-Edit.mp3",
            "cover_art_url": "img/bg_circles.jpg"
        },         
        {
            "name": "Golden Chunks",
            "recorded": "Rec // September 13, 2022",
            "url": "audio/Golden_Chunks.mp3",
            "cover_art_url": "img/bg_circles.jpg"
        },         
     
        {
            "name": "An Unstable Orbit",
            "recorded": "Rec id44mkII // Mar 14, 2023",
            "url": "audio/Unstable_Orbit_Extended_2.mp3",
            "cover_art_url": "img/bg_circles.jpg"            
        },
        {
            "name": "Underwater Transmitter",
            "recorded": "Rec id44mkII // Feb 13, 2023",
            "url": "audio/Underwater_Transmitter.mp3",
            "cover_art_url": "img/bg_circles.jpg"
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
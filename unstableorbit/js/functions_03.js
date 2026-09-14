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
            "cover_art_url": "img/bg_tiles.jpg"
        },        
        {
            "name": "Cloudbreak", 
            "recorded": "Rec // February 23, 2023",
            "url": "audio/Cloudbreak.mp3",
            "cover_art_url": "img/bg_tiles.jpg"
        },                                            
        {
            "name": "Spy vs Spy",
            "recorded": "Rec // February 23, 2023",
            "url": "audio/Spy_vs_Spy.mp3",
            "cover_art_url": "img/bg_tiles.jpg"
        },               
        {
            "name": "Lightkeeper",
            "recorded": "Rec // December 8, 2022",
            "url": "audio/Lightkeeper.mp3",
            "cover_art_url": "img/bg_tiles.jpg" 
        },
        {
            "name": "Arrival",
            "recorded": "Rec // March 2, 2023",
            "url": "audio/Arrival.mp3",
            "cover_art_url": "img/bg_tiles.jpg" 
        },                 
        {
            "name": "Temporal Loop",
            "recorded": "Rec // February 23, 2023",
            "url": "audio/Temporal_Loop-Edit.mp3",
            "cover_art_url": "img/bg_tiles.jpg"
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
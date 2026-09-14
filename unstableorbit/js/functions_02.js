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
            "recorded": "Rec // October 27, 2022",
            "url": "audio/Slowly_Rewind_Edit.mp3",
            "cover_art_url": "img/bg_vhs.jpg"            
        }, 
        {
            "name": "Arrival",
            "recorded": "Rec // March 2, 2023",
            "url": "audio/Arrival.mp3",
          "cover_art_url": "img/bg_vhs.jpg" 
        },
        {
            "name": "Swamp Fires",
            "recorded": "Rec id44mkII // March 14, 2023",
            "url": "audio/Swamp_Fires.mp3",
          "cover_art_url": "img/bg_vhs.jpg" 
        },                
        {
            "name": "Lightkeeper",
            "recorded": "Rec // December 8, 2022",
            "url": "audio/Lightkeeper.mp3",
          "cover_art_url": "img/bg_vhs.jpg" 
        },
        {
            "name": "An Unstable Orbit",
            "recorded": "Rec id44mkII // Mar 14, 2023",
            "url": "audio/Unstable_Orbit_Extended_2.mp3",
          "cover_art_url": "img/bg_vhs.jpg"             
        },                
        {
            "name": "Temporal Loop",
            "recorded": "Rec // February 23, 2023",
            "url": "audio/Temporal_Loop-Edit.mp3",
          "cover_art_url": "img/bg_vhs.jpg" 
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
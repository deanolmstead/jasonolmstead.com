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
            "name": "Monostatic",
            "recorded": "Rec // March 21",
            "url": "audio/Monostatic.mp3",
            "cover_art_url": "img/bg_trees.jpg"
        },        
        {
            "name": "Seen Better Days",
            "recorded": "Rec // May 16",
            "url": "audio/Shes_Seen_Better_Days.mp3",
            "cover_art_url": "img/bg_trees.jpg"
        },                        
        {
            "name": "She's in the Stars",
            "recorded": "Rec // March 21",
            "url": "audio/Shes_in_the_Stars.mp3",
            "cover_art_url": "img/bg_trees.jpg"
        },
        {
            "name": "A Thousand Shadows",
            "recorded": "Rec // May 16",
            "url": "audio/A_Thousand_Shadows.mp3",
            "cover_art_url": "img/bg_trees.jpg"
        },                
        {
            "name": "All Rights",
            "recorded": "Rec // March 21",
            "url": "audio/Nowave.mp3",
            "cover_art_url": "img/bg_trees.jpg"
        },
        {
            "name": "Lets Slowly Disappear",
            "recorded": "Rec // February 1",
            "url": "audio/Lets_Slowly_Disappear.mp3",
            "cover_art_url": "img/bg_trees.jpg"
        },                               
        {
            "name": "Now And Nowhere",
            "recorded": "Rec // February 8",
            "url": "audio/Nowhere_Is_Nice.mp3",
            "cover_art_url": "img/bg_trees.jpg"
        },
        {
            "name": "Geothermal Flux",
            "recorded": "Rec // March 21",
            "url": "audio/Fuzzy.mp3",
            "cover_art_url": "img/bg_trees.jpg"
        },                                 
        {
            "name": "Cavern Light Reflections",
            "recorded": "Rec // March 28",
            "url": "audio/Cavern_Light_Reflections.mp3",
            "cover_art_url": "img/bg_trees.jpg"
        },
        {
            "name": "Slightly Bent",
            "recorded": "Rec // April 11",
            "url": "audio/Slightly_Bent_Edit.mp3",
            "cover_art_url": "img/bg_trees.jpg"
        },                                                                                
        {
            "name": "Last Lunar Memory",
            "recorded": "Rec // February 22",
            "url": "audio/Last_Lunar_Memory.mp3",
            "cover_art_url": "img/bg_trees.jpg"
        },        
        {
            "name": "Yr Not Here",
            "recorded": "Rec // March 21",
            "url": "audio/Yr_Not_Here.mp3",
            "cover_art_url": "img/bg_trees.jpg"
        },
        {
            "name": "Bionic Parts Factory",
            "recorded": "Rec // March 28",
            "url": "audio/Bionic_Parts_Factory.mp3",
            "cover_art_url": "img/bg_trees.jpg"
        },                                          
        {
            "name": "Furnace Assembly",
            "recorded": "Rec // February 1",
            "url": "audio/Furnace_Assembly.mp3",
            "cover_art_url": "img/bg_trees.jpg"
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
// ── Keyboard shortcuts ────────────────────────────────────────────────────
// Prevent spacebar page scroll (handled by Amplitude binding below)
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') e.preventDefault();
});

// ── Amplitude init ────────────────────────────────────────────────────────
Amplitude.init({
    bindings: {
        37: 'prev',        // ← arrow
        39: 'next',        // → arrow
        32: 'play_pause'   // spacebar
    },
    songs: [
        { name: "Only Shallow",       url: "audio/01_mbv-Only Shallow.mp3",       cover_art_url: "img/loveless.jpg" },
        { name: "Loomer",             url: "audio/02_mbv-Loomer.mp3",             cover_art_url: "img/loveless.jpg" },
        { name: "Touched",            url: "audio/03_mbv-Touched.mp3",            cover_art_url: "img/loveless.jpg" },
        { name: "To Here Knows When", url: "audio/04_mbv-To Here Knows When.mp3", cover_art_url: "img/loveless.jpg" },
        { name: "When You Sleep",     url: "audio/05_mbv-When You Sleep.mp3",     cover_art_url: "img/loveless.jpg" },
        { name: "I Only Said",        url: "audio/06_mbv-I Only Said.mp3",        cover_art_url: "img/loveless.jpg" },
        { name: "Come In Alone",      url: "audio/07_mbv-Come In Alone.mp3",      cover_art_url: "img/loveless.jpg" },
        { name: "Sometimes",          url: "audio/08_mbv-Sometimes.mp3",          cover_art_url: "img/loveless.jpg" },
        { name: "Blown A Wish",       url: "audio/09_mbv-Blown A Wish.mp3",       cover_art_url: "img/loveless.jpg" },
        { name: "What You Want",      url: "audio/10_mbv-What You Want.mp3",      cover_art_url: "img/loveless.jpg" },
        { name: "Soon",               url: "audio/11_mbv-Soon.mp3",               cover_art_url: "img/loveless.jpg" },
    ],
    playlists: {
        loveless: {
            title: "Loveless",
            songs: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    },
    volume: 100,
    shuffle_on: false,
    active_playlist: 'loveless',
    callbacks: {
        initialized: function() {
            // Amplitude 5.0.3 bug: shuffle state doesn't initialize correctly
            // without repeat being toggled first. Silently toggle repeat on/off
            // after init to prime the state machine.
            const repeatBtn = document.querySelector('.amplitude-repeat-song');
            if (repeatBtn) {
                repeatBtn.click();
                setTimeout(() => repeatBtn.click(), 50);
            }
        }
    }
});
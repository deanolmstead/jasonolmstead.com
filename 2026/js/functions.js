// ── Keyboard shortcuts ────────────────────────────────────────────────────
// Prevent spacebar page scroll (handled by Amplitude binding below)
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') e.preventDefault();
});

// ── Duration helper ───────────────────────────────────────────────────────
function formatDuration(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
}

function loadTrackDurations() {
    document.querySelectorAll('.amplitude-song-container').forEach((row) => {
        const index = parseInt(row.dataset.amplitudeSongIndex, 10);
        const timeCell = row.querySelector('.track-time');
        if (!timeCell || isNaN(index)) return;

        const songs = Amplitude.getSongs();
        const song = songs[index];
        if (!song?.url) return;

        const audio = new Audio();
        audio.preload = 'metadata';
        audio.addEventListener('loadedmetadata', () => {
            timeCell.textContent = formatDuration(audio.duration);
            audio.src = '';
        });
        audio.src = song.url;
    });
}

// ── Amplitude init ────────────────────────────────────────────────────────
Amplitude.init({
    bindings: {
        37: 'prev',        // ← arrow
        39: 'next',        // → arrow
        32: 'play_pause'   // spacebar
    },
    songs: [
        { 
            name: "EXP // LOOP GTR 03",
            url: "audio/EXP_LOOP_GTR_03.mp3",
            cover_art_url: "img/slwsgnl.jpg"
        },
        { 
            name: "EXP // LOOP BASS 10",
            url: "audio/EXP_LOOP_BASS_10.mp3",
            cover_art_url: "img/slwsgnl.jpg"
        },
        {
            name: "EXP // LOOP GTR 05B",
            url: "audio/EXP_LOOP_GTR_05B.mp3",
            cover_art_url: "img/slwsgnl.jpg"
        },
        { 
            name: "EXP // LOOP GTR 07",
            url: "audio/EXP_LOOP_GTR_07.mp3",
            cover_art_url: "img/slwsgnl.jpg"
        },
        {
            name: "Shattered Moons",
            url: "audio/Slow_Signal-Shattered_Moons_2026.mp3",
            cover_art_url: "img/slwsgnl.jpg"
        },   
        {
            name: "While We Drift",
            url: "audio/While_We_Drift.mp3",
            cover_art_url: "img/slwsgnl.jpg"
        },             
        {
            name: "Rubylith Dreams",
            url: "audio/Rubylith_Dreams.mp3",
            cover_art_url: "img/slwsgnl.jpg"
        },
        {
            name: "Ruled by Saturn",
            url: "audio/Ruled_by_Saturn.mp3",
            cover_art_url: "img/slwsgnl.jpg"
        },
        {
            name: "Static Eyes",
            url: "audio/Static_Eyes.mp3",
            cover_art_url: "img/slwsgnl.jpg"
        },
    ],
    playlists: {
        loveless: {
            title: "SLW/SGNL",
            songs: [0, 1, 2, 3, 4, 5, 6, 7, 8]
        }
    },
    volume: 100,
    shuffle_on: false,
    active_playlist: 'loveless',
    callbacks: {
        initialized: function() {
            // Load track durations after Amplitude is fully ready
            loadTrackDurations();

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
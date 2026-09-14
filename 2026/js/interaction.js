document.addEventListener('DOMContentLoaded', () => {

    // ── Album art flip ────────────────────────────────────────────────────
    document.querySelector('.album-art')
        ?.addEventListener('click', function () {
            this.classList.toggle('active');
        });

    // ── Track active state ────────────────────────────────────────────────
    const trackNumbers = document.querySelectorAll('.track-number');

    function setActiveTrack(index) {
        trackNumbers.forEach((el, i) => {
            el.classList.toggle('active', i === index);
        });
    }

    // Expose globally so Amplitude initialized callback can call it
    window.setActiveTrack = setActiveTrack;

    // ── Main play button — set track 0 active on first play ───────────────
    let playerInitialized = false;
    document.querySelector('.btn-play')
        ?.addEventListener('click', () => {
            if (!playerInitialized) {
                setActiveTrack(Amplitude.getActiveIndex());
                playerInitialized = true;
            }
        });

    document.querySelectorAll('.amplitude-song-container').forEach((el) => {
        el.addEventListener('click', function () {
            const index = parseInt(this.dataset.amplitudeSongIndex, 10);
            setActiveTrack(index);
        });
    });

    document.querySelector('.amplitude-next')
        ?.addEventListener('click', () => {
            setTimeout(() => setActiveTrack(Amplitude.getActiveIndex()), 50);
        });

    document.querySelector('.amplitude-prev')
        ?.addEventListener('click', () => {
            setTimeout(() => setActiveTrack(Amplitude.getActiveIndex()), 50);
        });

    // ── Shuffle — sync active track after shuffle fires ───────────────────
    document.querySelector('.btn-shuffle')
        ?.addEventListener('click', () => {
            setTimeout(() => setActiveTrack(Amplitude.getActiveIndex()), 50);
        });

    // ── Slider fill ───────────────────────────────────────────────────────
    function updateFill(slider) {
        const min = slider.min || 0;
        const max = slider.max || 100;
        const val = ((slider.value - min) / (max - min)) * 100;
        slider.style.setProperty('--fill', `${val}%`);
    }

    // Volume
    const volumeSlider = document.querySelector('.amplitude-volume-slider');
    if (volumeSlider) {
        updateFill(volumeSlider);
        volumeSlider.addEventListener('input', function () { updateFill(this); });
    }

    // Song progress — update continuously via a MutationObserver since
    // Amplitude sets the value attribute directly rather than firing input events
    const songSlider = document.querySelector('.amplitude-song-slider');
    if (songSlider) {
        updateFill(songSlider);
        songSlider.addEventListener('input', function () { updateFill(this); });

        // Watch for Amplitude updating the value attribute
        new MutationObserver(() => updateFill(songSlider))
            .observe(songSlider, { attributes: true, attributeFilter: ['value'] });

        // Also poll lightly as a fallback (Amplitude uses .value not the attribute)
        setInterval(() => updateFill(songSlider), 500);
    }

});
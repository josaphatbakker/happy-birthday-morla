const scrollButtons = document.querySelectorAll('[data-scroll-target]');
const bgSong = document.getElementById('bg-song');
const audioToggle = document.getElementById('audio-toggle');

scrollButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const target = event.currentTarget.getAttribute('data-scroll-target');
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const updateToggleLabel = () => {
  if (!audioToggle) return;
  const isPlaying = !bgSong.paused;
  audioToggle.textContent = isPlaying ? 'Pause our song' : 'Play our song';
};

const handleAudioToggle = async () => {
  if (!bgSong) return;
  try {
    if (bgSong.paused) {
      await bgSong.play();
    } else {
      bgSong.pause();
    }
    updateToggleLabel();
  } catch (error) {
    console.warn('Autoplay was blocked. User interaction required.', error);
  }
};

if (audioToggle) {
  audioToggle.addEventListener('click', handleAudioToggle);
}

bgSong?.addEventListener('ended', () => {
  bgSong.currentTime = 0;
  bgSong.play().catch(() => {});
});

bgSong?.addEventListener('play', updateToggleLabel);
bgSong?.addEventListener('pause', updateToggleLabel);

updateToggleLabel();

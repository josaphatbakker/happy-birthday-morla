const scrollButtons = document.querySelectorAll('[data-scroll-target]');
const bgSong = document.getElementById('bg-song');
const audioToggle = document.getElementById('audio-toggle');
const carouselTrack = document.querySelector('.carousel-track');
const carouselControls = document.querySelectorAll('.carousel-control');

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
  audioToggle.textContent = isPlaying ? 'Pause the song' : 'Play a romantic song';
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

const scrollCarousel = (direction) => {
  if (!carouselTrack) return;
  const slide = carouselTrack.querySelector('.slide');
  const styles = getComputedStyle(carouselTrack);
  const slideWidth = slide ? slide.clientWidth : carouselTrack.clientWidth;
  const gapValue = parseFloat(styles.columnGap || styles.gap || '16');
  const distance = direction * (slideWidth + (Number.isNaN(gapValue) ? 16 : gapValue));
  carouselTrack.scrollBy({ left: distance, behavior: 'smooth' });
};

carouselControls.forEach((control) => {
  control.addEventListener('click', () => {
    const direction = Number(control.dataset.direction) || 1;
    scrollCarousel(direction);
  });
});

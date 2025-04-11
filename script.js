const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Toggle play/pause
function togglePlay() {
  if (video.paused) {
    video.play();
    toggle.textContent = '❚ ❚'; // Change to pause icon
  } else {
    video.pause();
    toggle.textContent = '►'; // Change to play icon
  }
}

// Update progress bar
function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${percent}%`;
}

// Skip video
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Handle range updates
function handleRangeUpdate() {
  video[this.name] = this.value;
}

// Handle progress bar click
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Event listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
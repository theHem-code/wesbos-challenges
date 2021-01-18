const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');

const toggle = player.querySelector('.toggle');
const skipButton = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player_slider');

function togglePlay() {
  if(video.paused) {
    video.play()
  } else {
    video.pause()
  }
}

function updateButton() {
  const icon = this.pause
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);

toggle.addEventListener('click', togglePlay);

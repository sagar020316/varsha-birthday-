const music = document.getElementById("bgMusic");
let isPlaying = false;

function toggleMusic() {
  if (isPlaying) {
    music.pause();
  } else {
    music.play();
  }
  isPlaying = !isPlaying;
}

function replayAnimation() {
  document.body.style.animation = "none";
  document.body.offsetHeight;
  document.body.style.animation = null;
}

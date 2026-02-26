const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');

let isPlaying = false;
let particles = [];
let animationFrameId = null;

function toggleMusic() {
  if (isPlaying) {
    music.pause();
    musicBtn.textContent = 'Play Music 🎵';
  } else {
    music.play();
    musicBtn.textContent = 'Pause Music ⏸️';
  }

  isPlaying = !isPlaying;
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function makeParticles(count = 170) {
  const colors = ['#ff4d8d', '#ffd166', '#ffffff', '#7bdff2', '#c77dff'];

  particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    size: Math.random() * 7 + 3,
    velocityY: Math.random() * 2.8 + 1.2,
    velocityX: Math.random() * 1.4 - 0.7,
    color: colors[Math.floor(Math.random() * colors.length)],
    rotation: Math.random() * Math.PI,
  }));
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    ctx.save();
    ctx.translate(particle.x, particle.y);
    ctx.rotate(particle.rotation);
    ctx.fillStyle = particle.color;
    ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
    ctx.restore();

    particle.y += particle.velocityY;
    particle.x += particle.velocityX;
    particle.rotation += 0.03;
  });

  particles = particles.filter((particle) => particle.y < canvas.height + 24);

  if (particles.length > 0) {
    animationFrameId = requestAnimationFrame(drawParticles);
  } else {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
}

function replayConfetti() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }

  makeParticles();
  drawParticles();
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);
window.addEventListener('load', replayConfetti);

document.addEventListener('DOMContentLoaded', () => {
  const char = document.getElementById('char');
  const arm = document.getElementById('arm');
  const bubble = document.getElementById('bubble');
  const waveBtn = document.getElementById('waveBtn');
  const jumpBtn = document.getElementById('jumpBtn');
  const swapBtn = document.getElementById('swapBtn');

  function wave() {
    arm.animate([
      { transform: 'translate(130px, 90px) rotate(0deg)' },
      { transform: 'translate(130px, 90px) rotate(-25deg)' },
      { transform: 'translate(130px, 90px) rotate(0deg)' }
    ], {
      duration: 600,
      iterations: 3
    });
  }

  function jump() {
    char.animate([
      { transform: 'translateY(0)' },
      { transform: 'translateY(-30px)' },
      { transform: 'translateY(0)' }
    ], {
      duration: 500,
      iterations: 1
    });
  }

  function swapColors() {
    document.documentElement.style.setProperty('--sky1', `hsl(${Math.random()*360}, 80%, 75%)`);
    document.documentElement.style.setProperty('--sky2', `hsl(${Math.random()*360}, 80%, 85%)`);
    document.documentElement.style.setProperty('--accent', `hsl(${Math.random()*360}, 70%, 65%)`);
  }

  char.addEventListener('click', () => {
    bubble.style.display = 'block';
    wave();
  });

  waveBtn.addEventListener('click', wave);
  jumpBtn.addEventListener('click', jump);
  swapBtn.addEventListener('click', swapColors);
});

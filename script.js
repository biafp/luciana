const music = document.getElementById('music');

let playing = false;

function toggleMusic() {

  if (!playing) {

    music.play();
    playing = true;

  } else {

    music.pause();
    playing = false;

  }

}

function showSecret() {

  document.getElementById('secret').style.display = 'block';

  createHearts();

}

function createHearts() {

  const container =
    document.getElementById('hearts');

  for (let i = 0; i < 20; i++) {

    const heart =
      document.createElement('div');

    heart.classList.add('heart');

    heart.innerHTML = '❤️';

    heart.style.left =
      Math.random() * 100 + 'vw';

    heart.style.bottom = '-20px';

    heart.style.fontSize =
      Math.random() * 20 + 18 + 'px';

    container.appendChild(heart);

    setTimeout(() => {

      heart.remove();

    }, 4000);

  }

}
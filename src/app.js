import './styles/main.styl';

const button = document.getElementById('button');
const share = document.getElementById('share');
const rrss = document.querySelectorAll('.rrss');

rrss.forEach((item) => {
  item.addEventListener('click', () => {
    share.classList.remove('onVisible');
    button.classList.remove('active');
    button.style.backgroundColor = 'hsl(217, 19%, 35%)';
  });
});

button.addEventListener('click', () => {
  if (window.innerWidth < 425) {
    if (share.classList.contains('onVisible')) {
      share.classList.remove('onVisible');
      button.style.backgroundColor = 'hsl(217, 19%, 35%)';
    } else {
      share.classList.add('onVisible');
      button.style.backgroundColor = 'hsl(214, 17%, 51%)';
    }
  } else {
    if (share.classList.contains('onVisible')) {
      share.classList.remove('onVisible');
      button.classList.remove('active');
    } else {
      share.classList.add('onVisible');
      button.classList.add('active');
    }
  }
});


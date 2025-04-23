import './styles/main.scss'

const burger = document.getElementById('burger');
const header = document.querySelector('header');

  burger.addEventListener('click', () => {
    header.classList.toggle('open');
  });
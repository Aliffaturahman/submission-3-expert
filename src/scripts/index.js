import 'regenerator-runtime';

// custom elements
import './custom elements/index';

// css
import '../styles/index.css';

// scripts
import App from './views/app';
import swRegister from './utils/sw-register';
import { WebSocketInitiator } from './utils/websocket-initiator';
import CONFIG from './globals/config';

// lazy loading
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const skipLink = document.querySelector('.skip-link');
const mainContent = document.querySelector('#mainContent');

skipLink.addEventListener('click', (event) => {
  event.preventDefault();
  mainContent.scrollIntoView({ behavior: 'smooth' });
  skipLink.blur();
});

// init App
const app = new App({
  button: document.querySelector('#navigationDrawerId'),
  nav: document.querySelector('#navbarContainerId'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});

// toggle nav
const navbarElement = document.querySelector('#navbarId');

window.addEventListener('scroll', () => {
  const scrollOnPage = window.pageYOffset;

  if (scrollOnPage > 0) {
    navbarElement.style.backgroundColor = '#561C24';
    navbarElement.style.position = 'fixed';
  } else {
    navbarElement.style.backgroundColor = 'transparent';
    navbarElement.style.position = 'absolute';
  }
});

// lazy image
// const START = 10;
// const NUMBER_OF_IMAGES = 100;

// const generateImage = () => {
//   for (let i = START; i < START + NUMBER_OF_IMAGES; i++) {
//     document.body.innerHTML += `<img class="lazyload" data-src="https://picsum.photos/id/${i}/400/400" alt="dummy images"><br>`;
//   }
// };

// generateImage();
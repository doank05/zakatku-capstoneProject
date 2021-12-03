import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/styleBeranda.css';
import '../styles/styleCatatan.css';
import '../styles/styleZakat.css';
import '../styles/responsive.css';
import '../styles/responsiveBeranda.css';
import '../styles/responsiveCatatan.css';
import '../styles/responsiveZakat.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

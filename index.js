import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const state = {
  'title': 'This is My Title!'
};
console.log(Navigation, Header, Main, Footer);

document.querySelector('#root').innerHTML = `
${Navigation()}
 ${Header(state)}
  ${Main()}
    ${Footer()}
    `;

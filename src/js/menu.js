import makeMenuMarkup from '../template/menu.hbs';
import menuData from '../menu.json';
const insertRef = document.querySelector('.js-menu');


const markup = makeMenuMarkup(menuData);
insertRef.innerHTML = markup;

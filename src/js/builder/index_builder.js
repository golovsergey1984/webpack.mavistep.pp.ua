import items from '../../static/questions/index.json';
import itemsTemplate from '../../templates/index.hbs';

const refs = {
  postItem: document.querySelector('.container'),
};

buildIndexPage(items);
function buildIndexPage(items) {
  const markup = items.map(item => itemsTemplate(item)).join('');
  refs.postItem.insertAdjacentHTML('beforeend', markup);
}

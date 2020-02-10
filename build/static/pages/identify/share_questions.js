import items from './share_questions.json';
import itemsTemplate from './share_questions.hbs';

const refs = {
  postItem: document.querySelector('.Place'),
};
buildIndexPage(items);
function buildIndexPage(items) {
  const markup = items.map(item => itemsTemplate(item)).join('');
  refs.postItem.insertAdjacentHTML('beforeend', markup);
}

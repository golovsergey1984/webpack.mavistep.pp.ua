import location from './location.json';
import payment from './payment.json';
import loyality from './loyality.json';
import usage from './usage.json';
import itemsTemplate from '../../templates/share_questions.hbs';

const refs = {
  postLocation: document.querySelector('.Place'),
  postPayment: document.querySelector('.Payment'),
  postLoyality: document.querySelector('.Loyality'),
  postUsage: document.querySelector('.Usage'),
};

buildLocationPage(location);
function buildLocationPage(items) {
  const markup = items.map(item => itemsTemplate(item)).join('');
  refs.postLocation.insertAdjacentHTML('beforeend', markup);
}

buildPaymentPage(payment);
function buildPaymentPage(items) {
  const markup = items.map(item => itemsTemplate(item)).join('');
  refs.postPayment.insertAdjacentHTML('beforeend', markup);
}

buildLoyalityPage(loyality);
function buildLoyalityPage(items) {
  const markup = items.map(item => itemsTemplate(item)).join('');
  refs.postLoyality.insertAdjacentHTML('beforeend', markup);
}

buildUsagePage(usage);
function buildUsagePage(items) {
  const markup = items.map(item => itemsTemplate(item)).join('');
  refs.postUsage.insertAdjacentHTML('beforeend', markup);
}

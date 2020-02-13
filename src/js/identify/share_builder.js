import location from './location.json';
import payment from './payment.json';
import loyality from './loyality.json';
import usage from './usage.json';
import products from './products.json';
import itemsTemplate from '../../templates/share_questions.hbs';

const refs = {
  postLocation: document.getElementById('Place'),
  postPayment: document.getElementById('Payment'),
  postLoyality: document.getElementById('Loyality'),
  postUsage: document.getElementById('Usage'),
  postProducts: document.getElementById('Products'),
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

buildProductsPage(products);
function buildProductsPage(items) {
  const markup = items.map(item => itemsTemplate(item)).join('');
  refs.postProducts.insertAdjacentHTML('beforeend', markup);
}

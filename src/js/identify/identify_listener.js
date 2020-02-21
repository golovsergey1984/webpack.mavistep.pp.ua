'use strict';
import getDate from './getDate.js'; // Определяем текущую дату
import getTime from './getTime.js'; /* import getTimer from './getTimer.js'; */ // Определяем время начала работы // Таймер // Определяем текущую дату
import PNotify from 'pnotify/dist/es/PNotify.js';
import testReport from './testReport.js';

/* export default data; */

import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
PNotify.defaults.styling = 'material';
PNotify.defaults.icons = 'material';

// Объявляем функции глобальными (т.к. после обработки webpack, onclick не видит своей функции)
window.getRadioValueLocation = getRadioValueLocation;
window.getRadioValuePayment = getRadioValuePayment;
window.getRadioValueLoyality = getRadioValueLoyality;
window.getRadioValueUsage = getRadioValueUsage;
window.getRadioValueProducts = getRadioValueProducts;
window.closeWindow = closeWindow;
window.prevPage = prevPage;

// Объявляем переменные для отчета
let arrPage = []; // Создаем массив для фиксации какие id были пройдены User
let data = { Share: {}, Index: {}, Place: {} }; // Создаем объект
let clockTime = clock(); // Запускаем таймер
data.Index.date = '<br>' + getDate.getDate(); // записываем текущую дату в объект
data.Index.time = '<br>' + getTime.getTime(); // записываем время начала работы

// Объявляем переменные для функций
const refs = {
  location: document.getElementById('Place'),
  payment: document.getElementById('Payment'),
  loyality: document.getElementById('Loyality'),
  usage: document.getElementById('Usage'),
  products: document.getElementById('Products'),
};

// Формируем массив из пройденных User разжедов (id)
function addArrayPage(item) {
  arrPage.push(item);
}

// Вызываем всплывающее уведомление
function pNotify() {
  let notice = PNotify.notice({
    title: 'Infomessage',
    text: 'This is a first page!',
    animateSpeed: 'slow',
    delay: 1000,
    addClass: 'custom nonblock',
  });
  notice.on('click', function() {
    notice.close();
  });
}

// Реализовываем возврат назад
function prevPage() {
  if (arrPage.length == 1 || 0) {
    pNotify();
    return;
  } else {
    if (arrPage.length == 0) {
      pNotify();
      return;
    }
    let i = arrPage.length - 1;
    let val = arrPage[i];
    document.getElementById(arrPage[i]).style.display = 'none';
    arrPage.pop();
    delete data.Share.val;
    document.getElementById(arrPage[i - 1]).style.display = 'block';
  }
}

// Обработка блока Локация
function getRadioValueLocation() {
  let rad = document.getElementsByName('place-name');
  addArrayPage(refs.location.id);
  data.Place.Location = '<strong>' + radValue(rad) + '</strong>';
  refs.location.style.display = 'none';
  refs.payment.style.display = 'block';
  addArrayPage(refs.payment.id);
}

// Обработка блока Форма оплаты
function getRadioValuePayment() {
  let rad = document.getElementsByName('payment');
  data.Share.Payment =
    '<br><br><strong>_____ОБЩЯЯ ИНФОРМАЦИЯ_____</strong> <br><strong> 1. Форма расчета: </strong>' +
    radValue(rad);

  refs.payment.style.display = 'none';
  refs.loyality.style.display = 'block';
  addArrayPage(refs.loyality.id);
}

// Обработка блока Форма Лояльность
function getRadioValueLoyality() {
  let rad = document.getElementsByName('loyality');
  data.Share.Loyality =
    '<br> <strong> 2. С Нашей продукцией: </strong>' + radValue(rad);
  refs.loyality.style.display = 'none';
  refs.usage.style.display = 'block';
  addArrayPage(refs.usage.id);
}

// Обработка блока Форма Чем пользуюсь
function getRadioValueUsage() {
  let rad = document.getElementsByName('usage');
  data.Share.Usage = '<br><strong> 3. Пользуется: </strong>' + radValue(rad);
  refs.usage.style.display = 'none';
  refs.products.style.display = 'block';
  addArrayPage(refs.products.id);
}

// Обработка блока Форма Интересующая руппа товаров
function getRadioValueProducts() {
  let rad = document.getElementsByName('products');
  data.Share.Products =
    '<br> <strong> 4. Группа запроса: </strong>' + radValue(rad);
  console.log(data);
  alert(testReport(data, data.Share.Products, clockTime));
  /*   mail(); */

  setTimeout(close, 500);
  /* document.getElementById('Products').style.display = 'none'; */
  /* document.getElementById('Products').style.display = 'block'; */
}
// Определение выбора User в radio списке
function radValue(rad) {
  for (let i = 0; i < rad.length; i++) {
    if (rad[i].checked) {
      return rad[i].value;
    }
  }
}
// Отправка отчета на mail
function mail() {
  let stat = report();
  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'mavistepreport',
    Password: 'MaviStep1996',
    To: 'mavistepreport@gmail.com',
    From: 'mavistepreport@gmail.com',
    Subject: 'customer statistics',
    Body: stat,
  });
}

function clock() {
  let S = '00',
    M = '00',
    H = '00';

  setInterval(function() {
    //Плюсик перед строкой преобразует его в число
    S = +S + 1;
    //Если результат меньше 10, прибавляем впереди строку '0'
    if (S < 10) {
      S = '0' + S;
    }
    if (S == 60) {
      S = '00';
      //Как только секунд стало 60, добавляем +1 к минутам
      M = +M + 1;
      //Дальше то же самое, что и для секунд
      if (M < 10) {
        M = '0' + M;
      }
      if (M == 60) {
        //Как только минут стало 60, добавляем +1 к часам.
        M = '00';
        H = +H + 1;
        if (H < 10) {
          H = '0' + H;
        }
      }
    }

    return (clockTime = H + ':' + M + ':' + S);
  }, 1000);
}

function report() {
  data.Share.clock =
    '<br><br><br><strong> Длительность сделки: </strong>' + clockTime + '<br>';

  return (
    Object.values(data.Place) +
    Object.values(data.Index) +
    Object.values(data.Share)
  );
}

// Вызываем, когда User закрывает вкладку
window.addEventListener('beforeunload', event => {
  event.preventDefault();
  mail();
  setTimeout(close, 500);
});

// Вызываем, когда User закрывает вкладку через btn exit
function closeWindow() {
  alert(testReport());
  mail();
  setTimeout(close, 500);
}

// Закрытие вкладки
function close() {
  window.close();
}

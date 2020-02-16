'use strict';
import PNotify from 'pnotify/dist/es/PNotify.js';
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
let arrPage = [];
let arrData = [];
let undefined = 'Пусто';
let answerPlace = '';
let date = getDate();
let time = getTime();
let clockTime = clock();
let answerPayment = '';
let answerLoyality = '';
let answerUsage = '';
let answerProduct = '';

// Объявляем переменные для функций
const refs = {
  /* window: window.addEventListener, */
  location: document.getElementById('Place'),
  payment: document.getElementById('Payment'),
  loyality: document.getElementById('Loyality'),
  usage: document.getElementById('Usage'),
  products: document.getElementById('Products'),
};

/* refs.window('beforeload', event => {
  event.preventDefault();
  getDate().arrData.push();
  getTime().arrData.push();
  console.log(arrData);
}); */

// При первом клике, запускаем формирование отчета
function start() {
  arrData.push(getDate());
  arrData.push(getTime());
}
// Функция заполнения массива данных для отчета
function addArrayData(item) {
  arrData.push(item);
  console.log(arrData);
}

// Формируем массив из пройденных User разжедов (id)
function addArrayPage(item) {
  arrPage.push(item);
}

// Реализовываем возврат назад
function prevPage() {
  console.log(arrPage.length);

  if (arrPage.length == 1 || 0) {
    PNotify.notice({
      title: 'Infomessage',
      text: 'This is a first page!',
      animateSpeed: 'slow',
    });
    return;
  } else {
    if (arrPage.length == 0) {
      PNotify.notice({
        title: 'Infomessage',
        text: 'This is a first page!',
        animateSpeed: 'slow',
        delay: 1000,
      });
      return;
    }
    let i = arrPage.length - 1;
    document.getElementById(arrPage[i]).style.display = 'none';
    arrPage.pop();
    arrData.pop();
    document.getElementById(arrPage[i - 1]).style.display = 'block';
    console.log(arrPage);
    /* console.log(arrData); */
  }
}

// Обработка блока Локация
function getRadioValueLocation() {
  /* start(); */
  let rad = document.getElementsByName('place-name');
  answerPlace = radValue(rad);
  addArrayData(radValue(rad));
  addArrayPage(refs.location.id);
  refs.location.style.display = 'none';
  refs.payment.style.display = 'block';
  addArrayPage(refs.payment.id);
}

// Обработка блока Форма оплаты
function getRadioValuePayment() {
  let rad = document.getElementsByName('payment');
  answerPayment = radValue(rad);
  addArrayData(radValue(rad));
  refs.payment.style.display = 'none';
  refs.loyality.style.display = 'block';
  addArrayPage(refs.loyality.id);
}

// Обработка блока Форма Лояльность
function getRadioValueLoyality() {
  let rad = document.getElementsByName('loyality');
  answerLoyality = radValue(rad);
  addArrayData(radValue(rad));
  refs.loyality.style.display = 'none';
  refs.usage.style.display = 'block';
  addArrayPage(refs.usage.id);
  console.log(arrData);
  alert(testReport());
}

// Обработка блока Форма Чем пользуюсь
function getRadioValueUsage() {
  let rad = document.getElementsByName('usage');
  answerUsage = radValue(rad);
  addArrayData(radValue(rad));
  refs.usage.style.display = 'none';
  refs.products.style.display = 'block';
  addArrayPage(refs.products.id);
}

// Обработка блока Форма Интересующая руппа товаров
function getRadioValueProducts() {
  let rad = document.getElementsByName('products');
  answerProduct = radValue(rad);
  addArrayData(radValue(rad));
  console.log(arrPage);
  alert(testReport());

  /* mail(); */
  setTimeout(close, 500);
  /* document.getElementById('Products').style.display = 'none'; */
  /* document.getElementById('Products').style.display = 'block'; */
}

// Определение выбора User в radio списке
function radValue(rad) {
  console.log(rad);
  for (let i = 0; i < rad.length; i++) {
    if (rad[i].checked) {
      return rad[i].value;
    }
  }
}

// Определяем текущую дд.мм.гг
function getDate() {
  var day = new Date();

  var weekday = new Array('Вc', 'Пy', 'Вт', 'Ср', 'Чтв', 'Птн', 'Сб');

  var month = new Array(
    'янв',
    'фев',
    'мар',
    'апр',
    'мая',
    'июня',
    'июля',
    'авг',
    'снт',
    'окт',
    'ноя',
    'дек',
  );

  return (
    weekday[day.getDay()] +
    ' ' +
    day.getDate() +
    ' ' +
    month[day.getMonth()] +
    ' ' +
    day.getFullYear() +
    ' г.'
  );
}

// Определяем время начала поиска товара by User
function getTime() {
  let day = new Date();
  return (
    day.getHours() + ':' + (day.getMinutes() < 10 ? '0' : '') + day.getMinutes()
  );
}

// Секундомер, определяем длительность пребывания User на вкладке "Выбор товара"
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

// Формирование отчета
function report() {
  return (
    '<strong>Магазин: </strong>' +
    arrData[0] +
    '<br />' +
    '<strong>Когда: </strong>' +
    date +
    '<br />' +
    '<strong>Время: </strong>' +
    time +
    '<br />' +
    '<strong>Длительность: </strong>' +
    clockTime +
    '<br />' +
    '<br />' +
    '<strong>_____1. ОБЩЯЯ ИНФОРМАЦИЯ_____</strong>' +
    '<br />' +
    '<strong>1.1 Форма расчета: </strong>' +
    arrData[1] +
    '<br />' +
    '<strong>1.2 С Нашей продукцией: </strong>' +
    arrData[2] +
    '<br />' +
    '<strong>1.3 Пользуется: </strong>' +
    arrData[3] +
    '<br />' +
    '<strong>1.4 Группа запроса: </strong>' +
    arrData[4]
  );
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

// Тестовая функция для alert()!!
function testReport() {
  let a = '';
  if (arrData[4] == null) {
    a = '';
  } else {
    a = arrData[4];
  }

  let b = '';
  if (arrData[3] == null) {
    b = '';
  } else {
    b = arrData[3];
  }

  let c = '';
  if (arrData[2] == null) {
    c = '';
  } else {
    c = arrData[2];
  }

  let d = '';
  if (arrData[1] == null) {
    d = '';
  } else {
    d = arrData[1];
  }

  return (
    'Магазин: ' +
    arrData[0] +
    '\r\n' +
    'Когда: ' +
    date +
    '\r\n' +
    'Время: ' +
    time +
    '\r\n' +
    'Длительность: ' +
    clockTime +
    '\r\n' +
    '\r\n' +
    '_____1. ОБЩЯЯ ИНФОРМАЦИЯ_____' +
    '\r\n' +
    '1.1 Форма расчета: ' +
    /* arrData[1] */ d +
    '\r\n' +
    '1.2 С Нашей продукцией: ' +
    /* arrData[2] */ c +
    '\r\n' +
    '1.3 Пользуется: ' +
    /* arrData[3] */ b +
    '\r\n' +
    '1.4 Группа запроса: ' +
    /* arrData[4] */ a
  );

  /* return (
    'Магазин: ' +
    answerPlace +
    '\r\n' +
    'Когда: ' +
    date +
    '\r\n' +
    'Время: ' +
    time +
    '\r\n' +
    'Длительность: ' +
    clockTime +
    '\r\n' +
    '\r\n' +
    '_____1. ОБЩЯЯ ИНФОРМАЦИЯ_____' +
    '\r\n' +
    '1.1 Форма расчета: ' +
    answerPayment +
    '\r\n' +
    '1.2 С Нашей продукцией: ' +
    answerLoyality +
    '\r\n' +
    '1.3 Пользуется: ' +
    answerUsage +
    '\r\n' +
    '1.4 Группа запроса: ' +
    answerProduct
  ); */
}

// Вызываем, когда User закрывает вкладку
window.addEventListener('beforeunload', event => {
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

// Рабочая функция "екущие время"
/* function clock() {
  var date = new Date(),
    hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
    minutes =
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
    seconds =
      date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  console.log(hours + ':' + minutes + ':' + seconds);
  return hours + ':' + minutes;
}
setInterval(clock, 1000); */

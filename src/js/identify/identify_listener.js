'use strict';

let answerPlace = '';
let date = getDate();
let time = getTime();
let clockTime = clock();

let answerPayment = '';
let answerLoyality = '';
let answerUsage = '';
let answerProduct = '';

window.addEventListener('beforeunload', event => {
  mail();
  setTimeout(close, 500);
});

function closeWindow() {
  mail();
  setTimeout(close, 500);
}

function close() {
  window.close();
}

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

    /*     console.log(H + ':' + M + ':' + S); */
    return (clockTime = H + ':' + M + ':' + S);
    /* return H + ' ' + M + ' ' + S + ' ' + ' г.'; */

    /*     secs.innerText = S;
    mins.innerText = M;
    hour.innerText = H; */
    //Тикает всё через одну функцию, раз в секунду.
  }, 1000);
}

function getRadioValueLocation() {
  let rad = document.getElementsByName('place-name');
  answerPlace = radValue(rad);

  document.querySelector('.title').innerHTML = 'Укажите форму расчета';
  document.getElementById('Place').style.display = 'none';

  document.getElementById('Payment').style.display = 'block';
}
window.getRadioValueLocation = getRadioValueLocation;
window.getRadioValuePayment = getRadioValuePayment;
window.getRadioValueLoyality = getRadioValueLoyality;
window.getRadioValueUsage = getRadioValueUsage;
window.getRadioValueProducts = getRadioValueProducts;
window.closeWindow = closeWindow;

function getRadioValuePayment() {
  let rad = document.getElementsByName('payment');
  answerPayment = radValue(rad);
  document.querySelector('.title').innerHTML = 'Вы знакомы с Нашей продукцией';
  document.getElementById('Payment').style.display = 'none';
  document.getElementById('Loyality').style.display = 'block';
}

function getRadioValueLoyality() {
  let rad = document.getElementsByName('loyality');
  answerLoyality = radValue(rad);

  document.querySelector('.title').innerHTML = 'Чем Вы обычно пользуетесь?';
  document.getElementById('Loyality').style.display = 'none';
  document.getElementById('Usage').style.display = 'block';
}

function getRadioValueUsage() {
  let rad = document.getElementsByName('usage');
  answerUsage = radValue(rad);
  document.querySelector('.title').innerHTML =
    'Укажите интересующую группу товаров';
  document.getElementById('Usage').style.display = 'none';
  document.getElementById('Products').style.display = 'block';
}

function getRadioValueProducts() {
  let rad = document.getElementsByName('products');
  answerProduct = radValue(rad);
  alert(testReport());

  /*  mail(); */

  document.getElementById('Products').style.display = 'none';
  /* document.getElementById('Products').style.display = 'block'; */
}

function radValue(rad) {
  console.log(rad);
  for (let i = 0; i < rad.length; i++) {
    if (rad[i].checked) {
      return rad[i].value;
    }
  }
}

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

function getTime() {
  let day = new Date();
  return (
    day.getHours() + ':' + (day.getMinutes() < 10 ? '0' : '') + day.getMinutes()
  );
}

function report() {
  return (
    '<strong>Магазин: </strong>' +
    answerPlace +
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
    answerPayment +
    '<br />' +
    '<strong>1.2 С Нашей продукцией: </strong>' +
    answerLoyality +
    '<br />' +
    '<strong>1.3 Пользуется: </strong>' +
    answerUsage +
    '<br />' +
    '<strong>1.4 Группа запроса: </strong>' +
    answerProduct
  );
}

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

// Тестовая функция!!
function testReport() {
  return (
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
  );
}

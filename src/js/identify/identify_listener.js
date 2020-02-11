'use strict';

let answerPlace = '';
let date = getDate();
let time = getTime();
let answerPayment = '';
let answerLoyality = '';
let answerUsage = '';

function getRadioValueLocation() {
  let rad = document.getElementsByName('place-name');
  answerPlace = radValue(rad);
  document.querySelector('.title').innerHTML = 'Укажите форму расчета';
  document.getElementById('Place').style.display = 'none';
  /* document.getElementById('Place').style.display = 'none'; */
  document.getElementById('Payment').style.display = 'block';
}
window.getRadioValueLocation = getRadioValueLocation;
window.getRadioValuePayment = getRadioValuePayment;
window.getRadioValueLoyality = getRadioValueLoyality;
window.getRadioValueUsage = getRadioValueUsage;

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
  alert(testReport());
  mail();
  document.getElementById('Usage').style.display = 'none';
  /* document.querySelector(".Usage").style.display = "block"; */
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
    answerUsage
  );
}

function mail() {
  let stat = report();
  console.log(stat);
  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'golovsergey1984',
    Password: 'Sergio1984',
    To: 'golovsergey1984@gmail.com',
    From: 'golovsergey1984@gmail.com',
    Subject: 'customer statistics',
    Body: stat,
  }).then(message => alert(message));
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
    '\r\n' +
    '_____1. ОБЩЯЯ ИНФОРМАЦИЯ_____' +
    '\r\n' +
    '1.1 Форма расчета: ' +
    answerPayment +
    '\r\n' +
    '1.2 С Наше продукцией: ' +
    answerLoyality +
    '\r\n' +
    '1.3 Пользуется: ' +
    answerUsage
  );
}

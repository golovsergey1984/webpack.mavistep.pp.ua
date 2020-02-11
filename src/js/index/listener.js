const refs = {
  btnStore: document.querySelector('.button1'),
  imgStore: document.getElementById('logo'),
  btnYoutube: document.querySelector('.button2'),
  imgYoutube: document.getElementById('youtube'),
  btnCall: document.querySelector('.button3'),
  imgCall: document.getElementById('skype'),
  btnNeed: document.querySelector('.button4'),
  imgNeed: document.getElementById('identify'),
};

// изменяем изображение на Инетрнет магазине
refs.btnStore.addEventListener('mouseover', function() {
  refs.imgStore.src = 'images/logo_hover.png';
});

refs.btnStore.addEventListener('mouseout', function() {
  refs.imgStore.src = 'images/logo.png';
});

refs.btnStore.addEventListener('click', function() {
  let newTab = window.open();
  newTab.opener = null;
  newTab.location = 'https://mavistep.com.ua';
});

// изменяем изображение на Youtube
refs.btnYoutube.addEventListener('mouseover', function() {
  refs.imgYoutube.src = 'images/youtube_hover.png';
});

refs.btnYoutube.addEventListener('mouseout', function() {
  refs.imgYoutube.src = 'images/youtube.png';
});

refs.btnYoutube.addEventListener('click', function() {
  let newTab = window.open();
  newTab.opener = null;
  newTab.location =
    'https://www.youtube.com/channel/UCDJ4PjTmdCz8Vm0qobR8Scg/featured';
});

// изменяем изображение на Звонок по Skype
refs.btnCall.addEventListener('mouseover', function() {
  refs.imgCall.src = 'images/wificalling_hover.png';
});

refs.btnCall.addEventListener('mouseout', function() {
  refs.imgCall.src = 'images/wificalling.png';
});

refs.btnCall.addEventListener('click', function() {
  alerty.confirm(
    'Для соединения с мастером, у Вас должен быть установлен Skype! Продолжаем?',

    {
      title: 'Уточнение',
      cancelLabel: 'Нет',
      okLabel: 'Поехали',
    },

    function() {
      location.href = 'skype:live:.cid.79bd5f21857342f1';
    },

    function() {
      alerty.toasts('Установите скайп, и возвращайтесь!', { place: 'top' });
    },
  );
});

// изменяем изображение на Потребности
refs.btnNeed.addEventListener('mouseover', function() {
  refs.imgNeed.src = 'images/identify_your_need_hover.png';
});

refs.btnNeed.addEventListener('mouseout', function() {
  refs.imgNeed.src = 'images/identify_your_need.png';
});

refs.btnNeed.addEventListener('click', function() {
  let newTab = window.open();
  newTab.opener = null;

  newTab.location = 'html/index-identify.html';
});
{
}

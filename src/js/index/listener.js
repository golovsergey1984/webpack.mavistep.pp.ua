const refs = {
  btnCall: document.getElementById('skype'),
  btnCall: document.querySelector('.button1'),
};

refs.btnCall.addEventListener('click', function() {
  alerty.confirm(
    'Для соединения с мастером, у Вас должен быть установлен Skype! Продолжаем?',

    {
      title: 'Уточнение',
      cancelLabel: 'Нет',
      okLabel: 'Позвонить',
    },

    function() {
      location.href = 'skype:live:.cid.79bd5f21857342f1';
    },

    function() {
      alerty.toasts('Установите скайп, и возвращайтесь!', { place: 'top' });
    },
  );
});

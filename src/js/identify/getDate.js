// Определяем текущую дд.мм.гг
export default {
  getDate() {
    var day = new Date();

    var weekday = new Array('Вc', 'Пн', 'Вт', 'Ср', 'Чтв', 'Птн', 'Сб');

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
  },
};

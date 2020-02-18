// Определяем время начала поиска товара by User
export default {
  getTime() {
    let day = new Date();
    return (
      day.getHours() +
      ':' +
      (day.getMinutes() < 10 ? '0' : '') +
      day.getMinutes()
    );
  },
};

// Рабочая функция "Текущее время"
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

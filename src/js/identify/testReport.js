// Тестовая функция для alert()!! для переноса юзаем '\r\n'
export default function testReport(data, item, clockTime) {
  return (
    data.Place.Location +
    '\r\n' +
    data.Index.date +
    '\r\n' +
    data.Index.time +
    '\r\n' +
    clockTime +
    '\r\n' +
    '\r\n' +
    data.Share.Payment +
    '\r\n' +
    data.Share.Loyality +
    '\r\n' +
    data.Share.Usage +
    '\r\n' +
    item // последняя запись в объекте
  );
}

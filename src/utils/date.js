export function converter(date) {
  var myData = new Date(date);
  var year = myData.getFullYear();
  var month = myData.getMonth() + 1;
  var day = myData.getDate();
  var hour = myData.getHours();
  var minutes = myData.getMinutes();
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  var fotmatted =
    year + "/" + month + "/" + day + " " + "at" + " " + hour + ":" + minutes;
  return fotmatted;
}

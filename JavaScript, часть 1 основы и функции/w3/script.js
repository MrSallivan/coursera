// function format(date) {
//   return date.toGMTString();
// }

// function getDateString(date) {
//   date = date || new Date();
//   return format(date);
// }

// console.info(getDateString());

// var getDateString = ( function() {
//   function format(date) {
//     return date.toGMTString()
//   }
//   return function getDateString(date) {
//     date = date || new Date();
//     return format(date);
//   }
// })();
// console.info(typeof(getDateString()));
// function setText(message) {
//   text = message;
// }
// var text = 'Текст';
// setText('Сообщение');
// console.info(text);
function getFruitsCost() {
  var cost = 7;
  return function (count) {
    return cost * count;
  };
}
var getCost = getFruitsCost();
var price = getCost(10);

console.log(price);
// var tweet = {
//     likes: 16,
//     getLikes: function() {
//         return this.likes;
//     },
//     setLikes: function(value) {
//         this.likes = parseInt(value) || 0;
//         return this;
//     },
//     getAuthor: function(params) {
//         return this.user.screenName;
//     },
//     text: 'Node.js, и модули, Джеймс о проблемах Node.js #nodejs #modules #модули'
// };
// alert(tweet.likes);
// tweet.setLikes(20);
// console.log(tweet);
// alert(tweet.likes);
// Object.defineProperty(tweet, 'linkify' , {
//     get: function() {
//         return this.text.replace(
//              /(#([\wа-я]+))/gi, '<a href="$2">$1</a>'
//         );
//     }
// });
// alert(tweet.linkify);

//---------------------------TASK---------------------
var today = new Date();
var year = today.getFullYear();
alert(today);
alert(year);
var theBigDay = new Date();
theBigDay.setFullYear(1997);
alert(theBigDay);
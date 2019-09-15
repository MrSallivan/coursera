/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var arr = tweet.split(' ');

    var resultArray = [];
    for (var i = 0; i < arr.length; i++) {
        var itemArr = arr[i];
        if (itemArr.startsWith('#')) {
            resultArray.push(itemArr.slice(1));
        }
    }
    return resultArray;
};


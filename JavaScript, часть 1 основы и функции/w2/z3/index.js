// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var parts = command.split(' ');
    
    switch(parts[0]) {
        case 'ADD' :
            ADD(command);
            break;
        case 'REMOVE_PHONE':
            REMOVE_PHONE(command);
            break;
        case 'SHOW' :
            SHOW();
            break;
    }

    function ADD(command) {
        var userName = newCommandArray[1];
        var userNameNumbers = newCommandArray[2].split(',');

        if (phoneBook.hasOwnProperty(userName)) {
            var initialPhoneArray = phoneBook[userName].split(', ');
            var updateUserNumbers = initialPhoneArray.concat(userNameNumbers);
            phoneBook[userName] = updateUserNumbers.join(', ');
        } else {
            phoneBook[userName] = userNameNumbers.join(', ');
        }
    }

    function REMOVE_PHONE(command) {
        var phoneToRemove = newCommandArray[1];
        var keys = Object.keys(phoneBook);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = phoneBook[key];
            if (phoneToRemove === value) {
                delete phoneBook
            }
        }
        
    }
    
    function SHOW() {
        
    }











};

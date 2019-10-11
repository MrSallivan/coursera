var dateRegexp = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})/;
var availableDurations = ['years', 'months', 'days', 'hours', 'minutes'];

function addLeadingZero(value) {
    value = String(value);
    return value.length < 2 ? '0' + value : value;
};

function formatDate(date) {
    let res = '';
    res += date.getFullYear();
    res += '-';
    res += addLeadingZero(date.getMonth() + 1);
    res += '-';
    res += addLeadingZero(date.getDate());
    res += '-';
    res += addLeadingZero(date.getHours());
    res += ':';
    res += addLeadingZero(date.getMinutes());

    return res;
}

function checkValueAndDuration(value, duration) {
    if (value < 0) {
        throw new TypeError('Значение не иожет быть отрецательным')
    }
    if (availableDurations.indexOf(duration) === -1 ) {
        throw new TypeError('Неизвестная единица времени');
    }
}

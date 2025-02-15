/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    let temp = date.split("-");
    return [parseInt(temp[0]).toString(2), parseInt(temp[1]).toString(2), parseInt(temp[2]).toString(2)].join('-')

};
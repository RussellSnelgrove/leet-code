/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
    // const hexString = num.toString(16);
    // return parseInt(hexString, 16);
    if (num < 0) num = 0xFFFFFFFF + num + 1;

    return num.toString(16);
};
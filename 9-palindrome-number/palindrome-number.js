/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x === parseInt(String(x).split('').reverse().join(''))
};
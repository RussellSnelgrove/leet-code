/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    if (n === 0) return false;
    if (n === 4) return true;
    const value = Math.log(n) / Math.log(4);
    return Number.isInteger(value);
};
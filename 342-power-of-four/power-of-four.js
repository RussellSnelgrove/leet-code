/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    if (n === 0) return false;
    if (n === 4) return true;
    const value = Math.log(n) / Math.log(4);
    console.log('value', value);
    console.log('Math.pow(n, 0.25)', Math.pow(n, 0.25));
    console.log('Number.isInteger(Math.pow(n, 0.25))', Number.isInteger(Math.pow(n, 0.25)));
    return Number.isInteger(value);
};
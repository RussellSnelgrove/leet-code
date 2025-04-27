/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    for (let i = 0; i < 31; i++) {
        let value = Math.pow(2, i);
        if (value === n) {
            return true;
        }
    }
    return false;
};
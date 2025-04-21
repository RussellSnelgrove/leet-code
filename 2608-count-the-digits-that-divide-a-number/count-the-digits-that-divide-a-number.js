/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
    let count = 0;
    const numString = String(num);
    for (let i = 0; i < numString.length; i++) {
        if (num % parseInt(numString[i]) === 0) count++;
    }
    return count;
};
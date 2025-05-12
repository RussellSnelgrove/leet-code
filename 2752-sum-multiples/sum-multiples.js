/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
    let result = 0;
    for (let i = 1; i < n + 1; i++) {
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) result += i;
    }
    return result;
};
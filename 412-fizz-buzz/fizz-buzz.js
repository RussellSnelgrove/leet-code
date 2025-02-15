/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    const returnArray = [];
    for (let i = 1; i < n + 1; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            returnArray.push('FizzBuzz');
        } else if (i % 3 === 0) {
            returnArray.push('Fizz')
        } else if (i % 5 === 0) {
            returnArray.push('Buzz')
        } else {
            returnArray.push(String(i))
        }
    }
    return returnArray;
};
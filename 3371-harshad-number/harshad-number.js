/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
    let sumOfDigits = 0;
    const xString = String(x);
    for (let i = 0; i < xString.length; i++) {
        sumOfDigits += parseInt(xString[i]);
    }
    if (x % sumOfDigits === 0) return sumOfDigits;
    return -1;
};
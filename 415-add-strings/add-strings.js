/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let result = '';
    const num1Len = num1.length;
    const num2Len = num2.length;
    let carry = 0;
    let i = 1;
    while (i <= Math.max(num1Len, num2Len)) {
        const value1 = parseInt(num1[num1Len - i]) || 0;
        const value2 = parseInt(num2[num2Len - i]) || 0;
        const columnValue = (value1 + value2 + carry) % 10;
        carry = (value1 + value2 + carry >= 10) ? 1 : 0;
        console.log('columnValue', columnValue);
        result = String(columnValue) + result;
        i++;
    }
    result = (carry === 1) ? String(carry) + result : result;
    return result;
};
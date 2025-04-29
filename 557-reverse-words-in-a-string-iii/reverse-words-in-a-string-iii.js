/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const sArray = s.split(' ')
    const result = [];
    for (let i = 0; i < sArray.length; i++) {
        result.push(sArray[i].split('').reverse().join(''));
    }
    return result.join(' ');
};
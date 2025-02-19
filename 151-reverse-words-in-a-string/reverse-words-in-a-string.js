/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const sArray = s.trim().split(' ').reverse();
    let i = 0;
    while (i < sArray.length) {
        sArray[i] = sArray[i].trim();
        if (sArray[i] === '') {
            sArray.splice(i, 1);
        } else {
            i++;
        }
    }
    return sArray.join(' ');
};
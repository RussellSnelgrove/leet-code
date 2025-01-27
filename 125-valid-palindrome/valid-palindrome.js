/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const refinedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const stringLength = refinedString.length;
    if (stringLength <= 1) return true;
    for (let i = 0; i < stringLength / 2; i++) {
        const rightElementCheck = stringLength-i-1;
        if(refinedString[i] !== refinedString[rightElementCheck]) return false;
    }
    return true;
};
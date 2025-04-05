/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
    let currentChar;
    let currentCount = 0;
    let maxCount = 1;
    for (let i = 0; i < s.length; i++) {
        if (currentChar !== s[i]) {
            maxCount = Math.max(currentCount, maxCount);
            currentChar = s[i];
            currentCount = 0;
        }
        currentCount++;
    }
    return Math.max(currentCount, maxCount);
};
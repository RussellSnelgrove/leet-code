/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s.length === 0) return true
    const sArray = s.split('');
    for (let i = 0; i < t.length; i++) {
        if (sArray[0] === t[i]) {
            sArray.shift();
            if (sArray.length === 0) return true;
        }
    }
    return false;
};
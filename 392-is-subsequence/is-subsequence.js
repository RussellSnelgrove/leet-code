/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s.length === 0) return true;
    let sPointer = 0;
    for (let tPointer = 0; tPointer < t.length; tPointer++) {
        if (s[sPointer] === t[tPointer]) {
            sPointer++;
            if (sPointer >= s.length) return true;
        }
    }
    return false;
};
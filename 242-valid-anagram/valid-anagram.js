/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const stringS = s.split('').sort().join('');
    const stringT = t.split('').sort().join('');
    return stringS === stringT;
};
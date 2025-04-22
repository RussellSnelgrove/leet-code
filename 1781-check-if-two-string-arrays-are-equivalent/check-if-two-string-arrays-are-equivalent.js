/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
    const string1 = word1.join('') //.split('').sort().join('');
    const string2 = word2.join('')//.split('').sort().join('');
    return string1 === string2;
};
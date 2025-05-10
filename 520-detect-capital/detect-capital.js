/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    if (word.toUpperCase() === word) return true;
    if (word.toLowerCase() === word) return true;
    const string = word.toLowerCase();
    const modStr = word[0].toUpperCase() + string.slice(1);
    return modStr === word;
};
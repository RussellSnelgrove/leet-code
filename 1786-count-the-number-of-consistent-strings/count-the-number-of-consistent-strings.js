/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let result = 0;
    const allowedLetters = new Set(allowed.split(''));
    for (let i = 0; i < words.length; i++) {
        let allowed = true;
        for (let j = 0; j < words[i].length; j++) {
            if (allowedLetters.has(words[i][j])) continue;
            allowed = false;
            break;
        }
        if (allowed) result++;
    }
    return result;
};
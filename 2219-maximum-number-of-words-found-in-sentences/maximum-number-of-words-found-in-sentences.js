/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let maxWordCount = 0;
    for (let i = 0; i < sentences.length; i++) {
        maxWordCount = Math.max(sentences[i].split(' ').length, maxWordCount);
    }
    return maxWordCount;
};
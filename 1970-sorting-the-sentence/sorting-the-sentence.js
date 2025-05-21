/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    let wordArray = s.split(' ');
    const wordMap = wordArray.map((x) => {
        return { word: x.slice(0, -1), value: x.at(-1) }
    })
    wordMap.sort((a, b) => {
        return a.value - b.value;
    });
    const finalWordMap = wordMap.map((x) => {
        return x.word;
    })
    return finalWordMap.join(' ');
};
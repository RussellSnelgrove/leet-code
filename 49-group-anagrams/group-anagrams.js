/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagramMap = {};
    for (let i = 0; i < strs.length; i++) {
        const sortedWord = strs[i].split('').sort().join('');
        if (anagramMap[sortedWord]) {
            anagramMap[sortedWord].push(strs[i])
        } else {
            anagramMap[sortedWord] = [strs[i]]
        }
    }
    const finalArray = [];
    for(const anagram in anagramMap) {
        finalArray.push(anagramMap[anagram]);
    }
    return finalArray;
};

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let correctLetterCount = 26;
    const ransomMap = new Map();
    for (let i = 0; i < ransomNote.length; i++) {
        if (ransomMap.has(ransomNote[i])) {
            ransomMap.set(ransomNote[i], ransomMap.get(ransomNote[i]) + 1)
        } else {
            ransomMap.set(ransomNote[i], 1)
            correctLetterCount--;
        }
    }
    let magazineMap = new Map();
    for (let i = 0; i < magazine.length; i++) {
        if (ransomMap.has(magazine[i])) {
            magazineMap.set(magazine[i], (magazineMap.get(magazine[i]) || 0) + 1)
            if (magazineMap.get(magazine[i]) === ransomMap.get(magazine[i])) correctLetterCount++;
            if (correctLetterCount === 26) return true
        }
    }
    return false;
};
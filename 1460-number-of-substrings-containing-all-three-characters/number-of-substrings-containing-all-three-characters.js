/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
    let result = 0;
    let leftPointer = 0;
    let rightPointer = 0;
    let charMap = {
        a: 0,
        b: 0,
        c: 0
    }
    while (rightPointer < s.length) {
        if (charMap[s[rightPointer]] !== undefined) charMap[s[rightPointer]] += 1;
        while (charMap.a > 0 && charMap.b > 0 && charMap.c > 0) {
            result += s.length - rightPointer;
            if (charMap[s[leftPointer]] !== undefined) charMap[s[leftPointer]] -= 1;
            leftPointer++;
        }
        rightPointer++;
    }

    return result;
};
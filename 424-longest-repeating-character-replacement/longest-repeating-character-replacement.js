/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let letterCount = new Map();
    let maxLength = 0, leftPointer = 0; mostCommonCharValue = 0;

    for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
        letterCount.set(s[rightPointer], (letterCount.get(s[rightPointer]) || 0) + 1);
        mostCommonCharValue = Math.max(mostCommonCharValue, letterCount.get(s[rightPointer]));

        while ((rightPointer - leftPointer + 1) - mostCommonCharValue > k) {
            letterCount.set(s[leftPointer], letterCount.get(s[leftPointer]) - 1);
            leftPointer++;
        }
        maxLength = Math.max(rightPointer - leftPointer + 1, maxLength);
    }
    return maxLength;
};

// Using Pointers
// var characterReplacement = function (s, k) {
//     const sArray = s.split('');
//     const tempArray = [];
//     const letterCount = {};
//     let maxLength = 0;
//     let leftPointer = 0;
//     let rightPointer = 0;

//     while (rightPointer < sArray.length) {
//         tempArray.push(sArray[rightPointer]);
//         if (letterCount[sArray[rightPointer]] === undefined) letterCount[sArray[rightPointer]]=0;
//         letterCount[sArray[rightPointer]]++;
//         let mostCommonLetterValue = Math.max(...Object.values(letterCount));
//         let kValueRequirement = tempArray.length - mostCommonLetterValue;

//         while (kValueRequirement > k) {
//             const removedValue = tempArray.shift();
//             letterCount[removedValue]--;
//             leftPointer++;
//             mostCommonLetterValue = Math.max(...Object.values(letterCount));
//             kValueRequirement = tempArray.length - mostCommonLetterValue;
//         }
//         maxLength = Math.max(maxLength, tempArray.length);
//         rightPointer++;
//     }
//     return maxLength
// };


// Brute Force
// var characterReplacement = function (s, k) {
//     let maxLength = 0;
//     const stringArray = s.split('');
//     const tempArray = [];
//     const letterCount = {};
//     for (let i = 0; i < stringArray.length; i++) {
//         tempArray.push(stringArray[i]);
//         if (letterCount[stringArray[i]] === undefined) letterCount[stringArray[i]] = 0;
//         letterCount[stringArray[i]]++;

//         let mostCommonLetterValue = Math.max(...Object.values(letterCount));
//         let kValueRequirement = tempArray.length - mostCommonLetterValue;

//         while (kValueRequirement>k){
//             const removedValue = tempArray.shift();
//             letterCount[removedValue]--;
//             mostCommonLetterValue = Math.max(...Object.values(letterCount));
//             kValueRequirement = tempArray.length - mostCommonLetterValue;
//         }
//         maxLength = Math.max(maxLength, tempArray.length);
//     }
//     return maxLength
// };

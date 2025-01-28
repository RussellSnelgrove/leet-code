/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let maxLength = 0;
    const stringArray = s.split('');
    const tempArray = [];
    const letterCount = {};
    for (let i = 0; i < stringArray.length; i++) {
        tempArray.push(stringArray[i]);
        if (letterCount[stringArray[i]] === undefined) letterCount[stringArray[i]] = 0;
        letterCount[stringArray[i]]++;
        
        let mostCommonLetterValue = Math.max(...Object.values(letterCount));
        let kValueRequirement = tempArray.length - mostCommonLetterValue;
       
        while (kValueRequirement>k){
            const removedValue = tempArray.shift();
            letterCount[removedValue]--;
            mostCommonLetterValue = Math.max(...Object.values(letterCount));
            kValueRequirement = tempArray.length - mostCommonLetterValue;
        }

        maxLength = Math.max(maxLength, tempArray.length);
    }
    return maxLength
};
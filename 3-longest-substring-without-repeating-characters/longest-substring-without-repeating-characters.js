/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;
    const arrayOfLetter = [];
    const arrayString = s.split('');
    let maxLength = 0;
    let currentLength = 0;
    for(let i = 0; i < arrayString.length; i++){
        while(arrayOfLetter.includes(arrayString[i])){
            arrayOfLetter.shift();
            currentLength--;
        }
        arrayOfLetter.push(arrayString[i]);
        currentLength++;
        if(currentLength> maxLength) maxLength = currentLength;
    }
    return maxLength;
};
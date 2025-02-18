/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function (pattern) {
    let array = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    let patternArray = pattern.split('');
    let result = ''
    for (let i = 0; i < patternArray.length; i++) {
        if (patternArray[i] === 'I') {
            result += array.shift();
        } else {
            let dCount = 1;
            while(patternArray[i+dCount] === 'D') dCount++;
            result += array[dCount];
            array.splice(dCount, 1);
        }
    }
    result += array.shift();
    return result
};
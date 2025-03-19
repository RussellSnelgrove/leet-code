/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    const resultArray = new Array(numRows).fill('');
    const sArray = s.split('');
    while (sArray.length !== 0) {
        // resultArray.forEach((row) => {
        //     row += sArray.pop();
        // })
        for (let i = 0; i < numRows; i++) {
            if (sArray.length === 0) break;
            resultArray[i] += sArray.shift();
        }
        if (sArray.length === 0) break;
        for (let i = numRows - 2; i > 0; i--) {
            if (sArray.length === 0) break;
            resultArray[i] += sArray.shift();
        }
    }
    console.log('resultArray', resultArray);
    return resultArray.join('');
};
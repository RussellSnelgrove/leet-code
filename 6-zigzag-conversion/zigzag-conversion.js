/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) return s;
    let result = '';
    for (let row = 0; row < numRows; row++) {
        const increment = 2 * (numRows - 1);
        for (let i = row; i < s.length; i += increment) {
            result += s[i];
            if (row > 0 && row < numRows - 1 && (i + increment - 2 * row) < s.length) {
                result += s[i + increment - 2 * row];
            }
        }
    }
    return result;
    // const resultArray = new Array(numRows).fill('');
    // const sArray = s.split('');
    // while (sArray.length !== 0) {
    //     // resultArray.forEach((row) => {
    //     //     row += sArray.pop();
    //     // })
    //     for (let i = 0; i < numRows; i++) {
    //         if (sArray.length === 0) break;
    //         resultArray[i] += sArray.shift();
    //     }
    //     if (sArray.length === 0) break;
    //     for (let i = numRows - 2; i > 0; i--) {
    //         if (sArray.length === 0) break;
    //         resultArray[i] += sArray.shift();
    //     }
    // }
    // console.log('resultArray', resultArray);
    // return resultArray.join('');
};
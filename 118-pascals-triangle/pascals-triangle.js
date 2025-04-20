/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const result = [[1]];
    for (let i = 1; i < numRows; i++) {
        const currentRow = [1];
        for (let j = 1; j <= i; j++) {
            if (j === i) {
                currentRow.push(1);
            } else {
                const lastArray = result.at(-1);
                const value = lastArray[j] + lastArray[j - 1];
                currentRow.push(value);
            }
        }
        result.push(currentRow);
    }
    return result;
};
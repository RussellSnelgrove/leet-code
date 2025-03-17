/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const result = [];
    const expectedLength = matrix.length * matrix[0].length;
    while (result.length < expectedLength || matrix.length > 0) {
        result.push(...matrix.shift())
        if (result.length === expectedLength) break;
        for (let i = 0; i < matrix.length; i++) {
            result.push(matrix[i].pop());
        }
        if (result.length === expectedLength) break;
        result.push(...matrix.pop().reverse())
        if (result.length === expectedLength) break;
        const temp = [];
        for (let i = 0; i < matrix.length; i++) {
            temp.push(matrix[i].shift());
        }
        result.push(...temp.reverse());
    }
    return result;
};
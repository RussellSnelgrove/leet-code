/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const matrixLength = matrix.length;
    for (let i = 0; i < matrixLength; i++) {
        for (let j = 0; j < matrixLength; j++) {
            const element = matrix[i].pop();
            matrix[matrixLength - j - 1].unshift(element);
        }
    }
};
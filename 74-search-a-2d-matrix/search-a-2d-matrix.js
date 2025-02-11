/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findValue = function (matrix, target, start, end) {
    if (start > end) return false;
    const middleIndex = start + Math.floor((end - start) / 2);
    if ((matrix[middleIndex] === target)) return true;
    if (matrix[middleIndex] < target) return findValue(matrix, target, middleIndex + 1, end);
    if (matrix[middleIndex] > target) return findValue(matrix, target, start, middleIndex - 1);
}

var findMatrix = function (matrix, target, start, end) {
    if (start > end) return false;
    const middleMatrixIndex = start + Math.floor((end - start) / 2);
    if (end === start || (matrix[middleMatrixIndex][0] <= target && matrix[middleMatrixIndex + 1][0] > target)) return matrix[middleMatrixIndex];
    if (matrix[middleMatrixIndex][0] < target) return findMatrix(matrix, target, middleMatrixIndex + 1, end);
    if (matrix[middleMatrixIndex][0] > target) return findMatrix(matrix, target, start, middleMatrixIndex - 1);
}

var searchMatrix = function (matrix, target) {
    const matrixToSearch = findMatrix(matrix, target, 0, matrix.length - 1);
    if (matrixToSearch === false) return false;
    const result = findValue(matrixToSearch, target, 0, matrixToSearch.length - 1);
    return result
};

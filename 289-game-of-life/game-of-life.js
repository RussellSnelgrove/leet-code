/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    let m = board.length;
    let n = board[0].length;
    let matrix = Array.from({ length: m }, () => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let count = 0;
            if (i > 0 && j > 0 && board[i - 1][j - 1] == 1) {
                count++;
            }
            if (i > 0 && board[i - 1][j] == 1) {
                count++;
            }
            if (i > 0 && j < n - 1 && board[i - 1][j + 1] == 1) {
                count++;
            }
            if (j > 0 && board[i][j - 1] == 1) {
                count++;
            }
            if (j < n - 1 && board[i][j + 1] == 1) {
                count++;
            }
            if (i < m - 1 && j > 0 && board[i + 1][j - 1] == 1) {
                count++;
            }
            if (i < m - 1 && board[i + 1][j] == 1) {
                count++;
            }
            if (i < m - 1 && j < n - 1 && board[i + 1][j + 1] == 1) {
                count++;
            }

            if (board[i][j] == 1) {
                if (count < 2 || count > 3) {
                    matrix[i][j] = 0;
                } else {
                    matrix[i][j] = 1;
                }
            }
            else if (board[i][j] == 0) {
                if (count == 3) {
                    matrix[i][j] = 1;
                } else {
                    matrix[i][j] = 0;
                }
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            board[i][j] = matrix[i][j];
        }
    }
};
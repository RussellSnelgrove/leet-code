var getQuadrante = function (row, column) {
    return Math.floor(row/3) * 3 + Math.floor(column / 3);
}

var isValidSudoku = function (board) {
    let row = 0;
    let column = 0;
    const quadranteMap = {};
    const columnMap = {};
    for (let row = 0; row < board.length; row++) {
        const rowMap = {};
        for (let column = 0; column < board[row].length; column++) {
            const number = board[row][column];
            if (row === 0) columnMap[column] = {};
            if (number === '.') continue;
            const quadrante = getQuadrante(row, column);
            if (quadranteMap[quadrante] === undefined) quadranteMap[quadrante] = {};
            if (rowMap[number] || columnMap[column][number] || quadranteMap[quadrante][number]) return false
            rowMap[number] = number;
            columnMap[column][number] = true;
            quadranteMap[quadrante][number] = true;
        }
    }
    return true
};
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const colZeroSet: Set<number> = new Set();
    const rowZeroSet: Set<number> = new Set();
    for (let i: number = 0; i < matrix.length; i++) {
        const row: number[] = matrix[i];
        for (let j: number = 0; j < row.length; j++) {
            if (row[j] === 0) {
                colZeroSet.add(j);
                rowZeroSet.add(i);
            }
        }
    }
    for (let i: number = 0; i < matrix.length; i++) {
        if (rowZeroSet.has(i)) {
            matrix[i] = new Array(matrix[i].length).fill(0);
            continue;
        }
        const row: number[] = matrix[i];
        for (let j: number = 0; j < row.length; j++) {
            if (colZeroSet.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
};
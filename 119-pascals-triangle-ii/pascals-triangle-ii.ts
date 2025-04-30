function getRow(rowIndex: number): number[] {
    const pascalsTriangle: number[][] = [[1], [1, 1]];
    for (let i: number = 2; i <= rowIndex; i++) {
        const newRow: number[] = [];
        const lastRow: number[] = pascalsTriangle.at(-1);
        for (let j: number = 0; j < i; j++) {
            if (j === 0) {
                newRow.push(1);
                continue;
            }
            newRow.push(lastRow[j - 1] + lastRow[j]);
        }
        newRow.push(1);
        pascalsTriangle.push(newRow);
    }
    return pascalsTriangle[rowIndex];
    // let currentRow: number[] = [];
    // for (let i: number = 0; i < rowIndex; i++) {
    //     const newRow: number[] = [];
    //     for (let j: number = 0; j <= i; j++) {
    //         if (j === 0) {
    //             newRow.push(1);
    //             continue;
    //         } else {
    //             newRow.push(currentRow[j - 1] + currentRow[j]);
    //             if (j === i) newRow.push(1);
    //         }
    //     }
    //     console.log(newRow);
    //     currentRow = newRow;
    // }
    // return pascalsTriangle.at(-1);
};
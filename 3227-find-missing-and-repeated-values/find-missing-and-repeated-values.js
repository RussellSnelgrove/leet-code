/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    const newArray = [];
    for (let i = 0; i < grid.length; i++) {
        newArray.push(...grid[i]);
    }
    newArray.sort();
    let missingNumber = 0;
    let dupNumber = 0;
    const gridSet = new Set(newArray);
    for (let i = 1; i < newArray.length+1; i++) {
        if(newArray[i] === newArray[i-1]) dupNumber = newArray[i];
        if(!gridSet.has(i)) missingNumber = i;
    }
    return [dupNumber, missingNumber]
};
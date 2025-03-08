/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    let heightMap = heights.map((x, i) => [x, names[i]]);
    heightMap.sort((a, b) => b[0] - a[0]);
    const finalArray = []
    for (let i = 0; i < heightMap.length; i++) {
        finalArray.push(heightMap[i][1]);
    }
    return finalArray;
};
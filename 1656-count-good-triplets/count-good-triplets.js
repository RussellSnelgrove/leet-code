/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
    let counter = 0;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                const aValue = Math.abs(arr[i] - arr[j]);
                const bValue = Math.abs(arr[j] - arr[k]);
                const cValue = Math.abs(arr[i] - arr[k]);
                if (aValue <= a && bValue <= b && cValue <= c) counter++;
            }
        }
    }
    return counter;
};
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    console.log
    const newArray = arr.filter((x, index) => {
        console.log('x', x, 'fn(x)', fn(x, index));
        return fn(x, index)
    })
    console.log('newArray', newArray);
    return newArray;
};

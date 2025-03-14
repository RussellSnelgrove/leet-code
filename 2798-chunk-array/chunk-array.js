/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const result = [];

    while(arr.length > 0){
        result.push(arr.splice(0, size))
    }
    return result
};

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    const sqrtVal = Math.round(Math.sqrt(num));
    return num === sqrtVal * sqrtVal;
};
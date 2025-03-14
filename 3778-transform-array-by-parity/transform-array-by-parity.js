/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function (nums) {
    const result = []
    for (let i = 0; i < nums.length; i++) {
        (nums[i] % 2 === 1) ? result.push(1) : result.unshift(0);  
    }
    return result;
};
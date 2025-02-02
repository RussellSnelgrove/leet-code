/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let maxRotations = nums.length;
    let countInARow = 0;
    if (nums.length <=1) return true;
    for (let i = 1; i < 2 * nums.length; i++) {
        if (nums[i % maxRotations] >= nums[(i - 1) % maxRotations]) countInARow++;
        if (nums[i % maxRotations] < nums[(i - 1) % maxRotations]) countInARow = 0;
        if (countInARow === maxRotations-1) return true;
    }
    return false
};


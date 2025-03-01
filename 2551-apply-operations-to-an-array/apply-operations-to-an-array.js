/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] === 0 && i < nums.length - count) {
            nums.splice(i, 1);
            nums.push(0);
            count++;
        }
    }
    return nums;
};
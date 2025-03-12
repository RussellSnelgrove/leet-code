/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    let negNums = 0;
    let posNums = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) posNums++;
        if (nums[i] < 0) negNums++;
    }
    return Math.max(negNums, posNums);
};
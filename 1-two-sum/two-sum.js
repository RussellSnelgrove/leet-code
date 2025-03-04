/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const numsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (numsMap.get(target - nums[i]) !== undefined) return [numsMap.get(target - nums[i]), i];
        numsMap.set(nums[i], i);
    }
    // update
    return false;
};
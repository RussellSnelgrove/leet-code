/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const numsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const value = target - nums[i];
        if (numsMap.has(value)) return [numsMap.get(value), i];
        numsMap.set(nums[i], i);
    }
    return false;
};
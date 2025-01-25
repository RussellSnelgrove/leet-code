/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    const numsHashMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (numsHashMap.has(diff)) return [numsHashMap.get(diff), i]
        numsHashMap.set(nums[i], i);
    }
};
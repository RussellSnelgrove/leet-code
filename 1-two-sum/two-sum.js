/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const numsMap = new Map();
    for (let i = 0; i<nums.length; i++){
        const num2 = target-nums[i];
        if (numsMap.get(num2) !== undefined) {
            return [numsMap.get(num2), i];
        } else {
            numsMap.set(nums[i], i);
        }
    }
    return [];
};
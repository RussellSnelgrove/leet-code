/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const numsSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        numsSet.has(nums[i]) ? numsSet.delete(nums[i]) : numsSet.add(nums[i]);
    }
    const iterator = numsSet.values();
    return iterator.next().value;
};
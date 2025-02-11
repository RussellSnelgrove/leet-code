/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchTarget = function (target, nums, start, end) {
    if (start > end) return -1
    const middleIndex = start + Math.floor((end-start)/2)
    if (nums[middleIndex] === target) return middleIndex;
    if(nums[middleIndex] > target) return searchTarget(target, nums, start, middleIndex-1);
    if(nums[middleIndex] < target) return searchTarget(target, nums, middleIndex+1, end);
}
var search = function (nums, target) {
    return searchTarget(target, nums, 0, nums.length - 1)
};
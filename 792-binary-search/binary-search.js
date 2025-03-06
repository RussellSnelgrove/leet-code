/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var binarySearch = function (nums, target, left, right) {
    const midIndex = left + Math.floor((right - left) / 2);
    if (nums[midIndex] === target) return midIndex;
    if(left >= right) return -1;
    if (nums[midIndex] > target) return binarySearch(nums, target, left, midIndex - 1);
    if (nums[midIndex] < target) return binarySearch(nums, target, midIndex + 1, right);
    // if(left === right )
}
var search = function (nums, target) {
    return binarySearch(nums, target, 0, nums.length-1);
    // Cheat way
    // return nums.indexOf(target);
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var searchForElement = function (nums, left, right) {
    const midIndex = left + Math.floor((right - left) / 2);
    if (nums[midIndex - 1] !== undefined && nums[midIndex - 1] > nums[midIndex]) return searchForElement(nums, left, midIndex - 1);
    if (nums[midIndex + 1] !== undefined && nums[midIndex + 1] > nums[midIndex]) return searchForElement(nums, midIndex + 1, right);
    return midIndex;
    // if (right - left < 1 ) return (nums[right] > nums[left]) ? right : left;
    // if (nums[midIndex] < left) return searchForElement(nums, left, midIndex - 1);
    // if (nums[midIndex] < right) return searchForElement(nums, midIndex + 1, right);
    // return searchForElement(nums, left + 1, right - 1)
}
var findPeakElement = function (nums) {
    return searchForElement(nums, 0, nums.length - 1);
};
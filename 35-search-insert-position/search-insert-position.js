/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var binarySearch = function (nums, target, lPointer, rPointer) {
    if (rPointer < lPointer) return lPointer;
    const middleIndex = lPointer + Math.floor((rPointer - lPointer) / 2);
    if (nums[middleIndex] === target) return middleIndex;
    if (nums[middleIndex] > target) return binarySearch(nums, target, lPointer, middleIndex-1);
    if (nums[middleIndex] < target) return binarySearch(nums, target, middleIndex+1, rPointer);
}

var searchInsert = function (nums, target) {
    const index = binarySearch(nums, target, 0, nums.length-1);
    return index;
};

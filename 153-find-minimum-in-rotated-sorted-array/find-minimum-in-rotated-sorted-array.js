/**
 * @param {number[]} nums
 * @return {number}
 */
var modifiedBinarySearch = function (nums, leftPointer, rightPointer, currentMin) {
    const middleIndex = leftPointer + Math.floor((rightPointer - leftPointer) / 2)
    if (leftPointer >= rightPointer) {
        if (leftPointer===rightPointer) return Math.min(currentMin, nums[middleIndex]);
        return currentMin
    }
    const currentValue = nums[middleIndex];
    const minValue = Math.min(currentMin, currentValue);
    if (currentValue > nums[rightPointer]) return modifiedBinarySearch(nums, middleIndex + 1, rightPointer, minValue);
    if (currentValue < nums[rightPointer]) return modifiedBinarySearch(nums, leftPointer, middleIndex - 1, minValue);
}

var findMin = function (nums) {
    return modifiedBinarySearch(nums, 0, nums.length - 1, Infinity)
};

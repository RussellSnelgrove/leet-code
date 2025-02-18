/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let leftPointer = 0;
    for (let i = 0; i < nums.length; i++) {
        if (leftPointer < 2 || nums[i] !== nums[leftPointer - 2]){
            nums[leftPointer] = nums[i];
            leftPointer++;
        }
    }
    return leftPointer;
};
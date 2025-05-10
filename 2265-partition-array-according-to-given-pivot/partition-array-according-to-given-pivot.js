/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    const greaterThan = [];
    const lessThan = [];
    const pivotArry = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            lessThan.push(nums[i]);
        } else if (nums[i] > pivot) {
            greaterThan.push(nums[i]);
        } else {
            pivotArry.push(nums[i]);
        }
    }
    return [...lessThan, ...pivotArry, ...greaterThan];
};
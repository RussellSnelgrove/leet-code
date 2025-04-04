/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const array = [];
    let currentMultiple = 1;
    for (let i = 0; i < nums.length; i++) {
        array.push(currentMultiple);
        currentMultiple *= nums[i];
    }
    currentMultiple = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        array[i] *= currentMultiple;
        currentMultiple *= nums[i];
    }
    return array;
};
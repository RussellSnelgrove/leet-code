/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    let elementSum = 0;
    let digitSum = 0;
    for (let i = 0; i < nums.length; i++) {
        elementSum += nums[i];
        const numString = String(nums[i]);
        for (let j = 0; j < numString.length; j++) {
            digitSum += parseInt(numString[j]);
        }
    }
    return Math.abs(elementSum - digitSum);
};
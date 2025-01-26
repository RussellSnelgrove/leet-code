/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const toTheLeftArray = [1];
    const resultArray = [];
    for (let i = 0; i < nums.length; i++) {
        toTheLeftArray[i] = (toTheLeftArray[i-1] ?? 1) * nums[i ];
    }
    let toTheRight = 1;
    for (let i = nums.length - 1; i !== -1; i--) {
        resultArray[i] = toTheRight * (toTheLeftArray[i - 1] ?? 1);
        toTheRight *= nums[i];
    }
    return resultArray;
};
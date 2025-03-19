/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    var flipNum = function (index) {
        nums[index] = (nums[index] + 1) % 2;
    }
    let operationCount = 0;
    for (let i = 0; i < nums.length-2; i++) {
        if(nums[i] === 0) {
            flipNum(i);
            flipNum(i+1);
            flipNum(i+2);
            operationCount++;
        }
    }
    if (nums.at(-1) === 1 && nums.at(-2) === 1) return operationCount;
    return -1;
}; 
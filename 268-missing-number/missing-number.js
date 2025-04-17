/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let totalCount = 0;
    let totalValue = 0;
    for(let i = 0; i< nums.length;i++){
        totalValue += i;
        totalCount += nums[i];
    }
    totalValue += nums.length;
    return totalValue - totalCount;
};
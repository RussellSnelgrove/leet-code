/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let result = 0
    let numsMap = {}
    for (let i = 0; i < nums.length; i++) {
        if(numsMap[nums[i]] !== undefined) {
            result += numsMap[nums[i]];
            numsMap[nums[i]]++;
        } else {
            numsMap[nums[i]] = 1;
        }
    }

    return result;
};
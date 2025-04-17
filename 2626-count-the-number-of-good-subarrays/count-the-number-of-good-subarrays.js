/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function (nums, k) {
    let numsPair = 0;
    let leftPointer = 0;
    let result = 0;
    let numsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (!numsMap.has(num)) numsMap.set(num, 0);
        numsMap.set(num, numsMap.get(num) + 1);
        numsPair += numsMap.get(num) - 1;

        while (numsPair >= k) {
            result += nums.length - i;
            const leftValue = nums[leftPointer];
            const change = numsMap.get(leftValue) - 1;
            numsPair -= change;
            numsMap.set(leftValue, change);
            leftPointer++;
        }
    }
    return result;
};
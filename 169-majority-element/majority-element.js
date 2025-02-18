/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const numsSet = {}
    let majorityElement;
    for (let i = 0; i < nums.length; i++) {
        numsSet[nums[i]] ? numsSet[nums[i]]++ : numsSet[nums[i]] = 1;
        if(majorityElement === undefined) majorityElement = nums[i]
        if (numsSet[majorityElement] && numsSet[nums[i]] > numsSet[majorityElement]) majorityElement = nums[i];
    }
    return majorityElement
};
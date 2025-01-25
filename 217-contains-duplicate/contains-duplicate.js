/**
 * @param {number[]} nums
 * @return {boolean}
 */
// brute force 
var containsDuplicate = function(nums) {
    const hashSet = new Set();
    for (let i = 0; i < nums.length; i++ ){
        if (hashSet.has(nums[i])) return true
        hashSet.add(nums[i]);
    }
    return false;
};
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// brute force 
var containsDuplicate = function(nums) {
    const hashMap = new Map();
    for (let i = 0; i < nums.length; i++ ){
        if (hashMap.has(nums[i])) return true
        hashMap.set(nums[i], i);
    }
    return false;
};
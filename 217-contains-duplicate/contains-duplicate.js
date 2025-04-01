/**
 * @param {number[]} nums
 * @return {boolean}
 */
 
var containsDuplicate = function(nums) {
    return new Set(nums).size < nums.length;
    // save each element to a list

};
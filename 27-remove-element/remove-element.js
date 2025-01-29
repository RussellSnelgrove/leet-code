/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    nums.sort();
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === undefined) return nums.length
        if(nums[i] === val){
            while (nums[i] === val) nums.splice(i, 1);
        }
    }
    return nums.length
};
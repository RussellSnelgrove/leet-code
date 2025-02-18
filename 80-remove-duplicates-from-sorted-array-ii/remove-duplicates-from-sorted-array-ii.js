/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length <= 2) return nums.length;
    let lastIndex = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) lastIndex = i;
        while (i - lastIndex > 1) {
            nums.splice(i, 1);
            if (nums[i] !== nums[i - 1]) lastIndex = i;
        }
    }
    return nums.length
};
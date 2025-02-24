/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if (k > nums.length) {
        for (let i = 0; i < k; i++) {
            const element = nums.pop();
            nums.unshift(element);
        }
    } else {
        const array = nums.splice(nums.length - k, k);
        nums.unshift(...array)

    }
};
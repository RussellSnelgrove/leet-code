/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    // two options
    // option1 loop through and pop then unshift
    // option2 splice last k elements then concat first half to second
    // option 1 uses less memory but runs longer
    if (k > nums.length) {
        for (let i = 0; i < k; i++) {
            nums.unshift(nums.pop())
        }
    } else {
        const array = nums.splice(nums.length - k, k)
        nums.unshift(...array)
    }

    // excceed run time
    // for (let i = 0; i < k; i++) {
    //     nums.unshift(nums.pop())
    // }
};
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let currentJumpDistance = nums[0]
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > currentJumpDistance) currentJumpDistance = nums[i];
        if (currentJumpDistance === 0) return false;
        currentJumpDistance--;
    }
    return true;
};
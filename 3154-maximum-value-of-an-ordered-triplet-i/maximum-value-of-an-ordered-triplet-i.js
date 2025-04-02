/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
    let max = -1;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                max = Math.max(max, (nums[i] - nums[j]) * nums[k]);
            }
        }
    }

    if (max <= 0) return 0;
    return max;
};
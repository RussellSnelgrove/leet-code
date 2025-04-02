/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
    let max = -1;
    let i = 0
    for (let j = i + 1; j < nums.length - 1; j++) {
        if(nums[j] > nums[i]){
            i = j;
            continue;
        }
        for (let k = j + 1; k < nums.length; k++) {
            max = Math.max(max, (nums[i] - nums[j]) * nums[k]);
        }
    }

    if (max <= 0) return 0;
    return max;
};
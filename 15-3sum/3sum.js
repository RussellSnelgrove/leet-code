/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => { return a - b });
    const resultArray = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const currentValue = nums[left] + nums[right];
            if (0 < (currentValue + nums[i])) {
                right--;
            } else if (0 > currentValue + nums[i]) {
                left++;
            } else {
                resultArray.push([nums[i], nums[left], nums[right]]);
                left++;
                while(nums[left] === nums[left-1]) left++;
            }
        }

    }
    return resultArray;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let pointer1 = 0;
    let pointer2 = 0;
    while (true) {
        pointer1 = nums[pointer1];
        pointer2 = nums[nums[pointer2]];
        if (pointer1 === pointer2) break
    }
    pointer2 = 0;
    while (true) {
        pointer1 = nums[pointer1];
        pointer2 = nums[pointer2];
        if (pointer1 === pointer2) break
    }
    return pointer1;
};
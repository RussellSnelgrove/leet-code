/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let array = [];
    const halfWayPoint = nums.length/2;
    for (let i = 0; i < n; i++) {
        array.push(nums[i]);
        array.push(nums[halfWayPoint+i]);
    }
    return array;
};
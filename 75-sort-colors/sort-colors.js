/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let elementsSorted = 0;
    let index = 0;
    while (elementsSorted < nums.length) {
        if (nums[index] === 0) {
            nums.unshift(...nums.splice(index, 1))
            index++;
            // go to next element since behind is sorted
        } else if (nums[index] === 1){
            index++
            // go to next element since elements behind are sorted
        } else {
            nums.push(...nums.splice(index, 1))
            // dont go to next element since element in positioon is not sorted
        }
        elementsSorted++;
    }
    console.log(nums)
    return nums;
};
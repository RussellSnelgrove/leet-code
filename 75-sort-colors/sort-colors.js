/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                const temp = nums[j];
                nums[j] = nums[i];
                nums[i] = temp;
            }
        }
    }
    // let elementsSorted = 0;
    // let index = 0;
    // while (elementsSorted < nums.length) {
    //     if (nums[index] === 0) {
    //         nums.unshift(...nums.splice(index, 1))
    //         index++;
    //         // go to next element since behind is sorted
    //     } else if (nums[index] === 1){
    //         index++
    //         // go to next element since elements behind are sorted
    //     } else {
    //         nums.push(...nums.splice(index, 1))
    //         // dont go to next element since element in positioon is not sorted
    //     }
    //     elementsSorted++;
    // }
    // return nums;
};
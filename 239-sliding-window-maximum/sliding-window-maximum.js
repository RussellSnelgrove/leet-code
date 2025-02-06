/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const resultArray = [];
    const numArray = [];
    let leftPointer = 0, rightPointer = 0;

    while (rightPointer < nums.length) {
        while (numArray.length && nums[numArray.at(-1)] < nums[rightPointer]) {
            numArray.pop();
        }
        numArray.push(rightPointer);

        if (leftPointer > numArray.at(0)) {
            numArray.shift();
        }

        if ((rightPointer + 1) >= k) {
            resultArray.push(nums[numArray.at(0)]);
            leftPointer++;
        }
        rightPointer++;
    }

    return resultArray;
};
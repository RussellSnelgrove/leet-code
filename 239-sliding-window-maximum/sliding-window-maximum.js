/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const resultArray = [];
    // const output = new Array(n - k + 1);
    const numDeque = new Deque();
    let leftPointer = 0, rightPointer = 0;

    while (rightPointer < nums.length) {
        while (numDeque.size() && nums[numDeque.back()] < nums[rightPointer]) {
            numDeque.popBack();
        }
        numDeque.pushBack(rightPointer);

        if (leftPointer > numDeque.front()) {
            numDeque.popFront();
        }

        if ((rightPointer + 1) >= k) {
            resultArray.push(nums[numDeque.front()]);
            leftPointer++;
        }
        rightPointer++;
    }

    return resultArray;
};
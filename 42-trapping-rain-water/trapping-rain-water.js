/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let rightPointer = height.length - 1;
    let leftPointer = 0;
    let maxRight = height[rightPointer];
    let maxLeft = height[leftPointer];
    let totalWater = 0;

    while (leftPointer < rightPointer) {
        if (height[leftPointer] > maxLeft) maxLeft = height[leftPointer];
        if (height[rightPointer] > maxRight) maxRight = height[rightPointer];
    
        if (height[leftPointer] > height[rightPointer]) {
            if (height[rightPointer] < maxRight) totalWater += maxRight - height[rightPointer];
            rightPointer--;
        } else {
            if (height[leftPointer] < maxLeft) totalWater += maxLeft - height[leftPointer];
            leftPointer++;
        }
    }
    return totalWater;
};
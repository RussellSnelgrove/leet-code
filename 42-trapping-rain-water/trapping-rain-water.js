/**
 * @param {number[]} height
 * @return {number}
 */
// using Arrays but the arrays use O(n) memory
// var trap = function (height) {
//     const maxLeftArray = [];
//     const maxRightArray = [];
//     let maxLeft = 0;
//     let maxRight = 0;
//     let waterTrapped = 0;
//     for (let i = 0; i < height.length; i++) {
//         maxLeftArray[i] = maxLeft;
//         if (height[i] > maxLeft) maxLeft = height[i];
//     }
//     for (let i = height.length - 1; i >= 0; i--) {
//         maxRightArray[i] = maxRight;
//         if (height[i] > maxRight) maxRight = height[i];
//     }
//     for (let i = 0; i < height.length; i++) {
//         const value = Math.min(maxLeftArray[i], maxRightArray[i]) - height[i];
//         if (value > 0 ) waterTrapped += value;
//     }
//     return waterTrapped;
// };

// using pointers using O(1) memory
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
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let rightPointer = height.length - 1;
    let leftPointer = 0;
    let maxValue = 0;
    while (leftPointer < rightPointer) {
        const x = rightPointer-leftPointer;
        const y = Math.min(height[rightPointer], height[leftPointer]);
        (y === height[leftPointer]) ? leftPointer++ : rightPointer--;
        const area = y*x;
        maxValue = Math.max(area, maxValue);
    }
    return maxValue;
};
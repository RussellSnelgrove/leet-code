/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const maxLeftArray = [];
    const maxRightArray = [];
    let maxLeft = 0;
    let maxRight = 0;
    let waterTrapped = 0;
    for (let i = 0; i < height.length; i++) {
        maxLeftArray[i] = maxLeft;
        if (height[i] > maxLeft) maxLeft = height[i];
    }
    for (let i = height.length - 1; i >= 0; i--) {
        maxRightArray[i] = maxRight;
        if (height[i] > maxRight) maxRight = height[i];
    }
    for (let i = 0; i < height.length; i++) {
        const value = Math.min(maxLeftArray[i], maxRightArray[i]) - height[i];
        if (value > 0 ) waterTrapped += value;
    }
    return waterTrapped;
};
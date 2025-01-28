/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const sortedArray = nums.sort((a, b) => { return a - b });
    const resultArray = [];
    for (let i = 0; i < sortedArray.length - 2; i++) {
        if (sortedArray[i] > 0) break;
        if (i > 0 && sortedArray[i] === sortedArray[i - 1]) continue;

        let left = i + 1;
        let right = sortedArray.length - 1;
        while (left < right) {
            const currentValue = sortedArray[left] + sortedArray[right];
            if (0 < (currentValue + sortedArray[i])) {
                right--;
            } else if (0 > currentValue + sortedArray[i]) {
                left++;
            } else {
                resultArray.push([sortedArray[i], sortedArray[left], sortedArray[right]]);
                left++;
                while(sortedArray[left] === sortedArray[left-1]) left++;
            }
        }

    }
    return resultArray;
};

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0
    let right = numbers.length - 1;
    while (left < right) {
        const currentValue = numbers[left] + numbers[right];
        if (currentValue > target) {
            right--;
        } else if (target > currentValue) {
            left++;
        } else {
            return [left+1, right+1];
        }
    }

    // Using Hash Map
    // Problem is that the space used is O(n) pointers will be O(1)
    // const numberSet = new Map()
    // for(let i = 0; i < numbers.length; i++ ){
    //     if (numberSet.has(target - numbers[i])){
    //         return [numberSet.get(target - numbers[i]), i+1];
    //     }
    //     numberSet.set(numbers[i], i + 1);
    // }
};

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    const numberSet = new Map()
    for(let i = 0; i < numbers.length; i++ ){
        if (numberSet.has(target - numbers[i])){
            return [numberSet.get(target - numbers[i]), i+1];
        }
        numberSet.set(numbers[i], i + 1);
    }
};

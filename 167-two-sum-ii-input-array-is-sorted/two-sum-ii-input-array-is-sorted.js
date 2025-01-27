/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    const numberSet = new Set(numbers);
    for(let i = 0; i < numbers.length; i++ ){
        if (numberSet.has(target - numbers[i])){
            const index2 = numbers.lastIndexOf(target - numbers[i]);
            if (index2 !== i) return [i+1, index2+1];
        }
    }
};

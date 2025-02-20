/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
    let numberLength = nums[0].length;
    let numberSet = new Set(nums);
    function generateBinary(binary){
        if(binary.length === numberLength){
            if (!numberSet.has(binary)) return binary;
            return null;
        }
        let result = generateBinary(binary+'0');
        if (result) return result;
        return generateBinary(binary+'1');
    }

    return generateBinary('');
    // convert all nums to ints, sort then increment until you find a missing number
    // return that binary
    // O(2n)

    // go through each element of the array.
    // create a hash map of how many 1's and 0's are in each index
    // create a string where it uses the number least used in each index
    // return that string
    // O(n*h) h is the number of chars in the string
    // const binaryHash = {}
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 0; j < nums[i].length; j++) {
    //         binaryHash[j][nums[i][j]] =
    //     }
    // }
};
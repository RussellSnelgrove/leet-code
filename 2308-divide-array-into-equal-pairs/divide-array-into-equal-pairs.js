/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let matchingRequired = 0;
    const numsMap = {}
    for (let i = 0; i< nums.length; i++){
        if(numsMap[nums[i]] === undefined) {
            numsMap[nums[i]] = 1;
            matchingRequired += 1;
        } else {
            numsMap[nums[i]] += 1;
            matchingRequired += (numsMap[nums[i]] % 2 === 1) ? 1 : -1;  
        }
    }
    console.log('numsMap', numsMap)
    return matchingRequired === 0;
};
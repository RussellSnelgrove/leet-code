/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    // map an object with number and count
    // sort it by frequency
    const numsMap = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (numsMap[num] === undefined) numsMap[num] = 0;
        numsMap[num] += 1;
    }
    var array = Object.keys(numsMap).map((key) => [key, numsMap[key]]);
    array.sort((a, b) => a[1] - b[1]);
    const result = [];
    for(let i = 0; i<k; i++){
        result.push(parseInt(array.pop()[0]));
    }
    return result;
};
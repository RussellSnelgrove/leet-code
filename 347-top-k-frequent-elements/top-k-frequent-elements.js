/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const res = [];
    const hashNumFrequency = {};
    for (const num in nums){
        hashNumFrequency[nums[num]] = (hashNumFrequency[nums[num]] || 0) + 1;
    }
    const bucketOfFrequency = Array.from({ length: nums.length + 1 }, () => []);

    for ( const num in hashNumFrequency){
      bucketOfFrequency[hashNumFrequency[num]].push(parseInt(num));
    }
    for(let i = bucketOfFrequency.length-1; i > 0; i--){
      for (const n of bucketOfFrequency[i]){
        res.push(n);
        if(res.length ===k) return res;
      }
    }

    // const result = {};
    // for (const num in nums){
    //     result[num] = (result[num] || 0) +1;
    // }
    // for (let i = 0; i < nums.length; i++) {
    //     if (result[nums[i]] === undefined) result[nums[i]] = 0;
    //     result[nums[i]]++;
    // }

    // const sortedObject = Object.fromEntries(
    //     Object.entries(unsortedObject).sort(([, a], [, b]) => b - a)
    // );

    //     return Object.values(result);
};
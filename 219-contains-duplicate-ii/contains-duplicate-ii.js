/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const numsSet = new Set;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (numsSet.has(num)) return true
        numsSet.add(num)
        if (numsSet.size <= k) continue;
        numsSet.delete(nums[i-k]);
    }
    return false
};
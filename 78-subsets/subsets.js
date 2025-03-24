/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const result = [];
    const subset = [];
    function dfs(i) {
        if (i >= nums.length) {
            result.push([...subset]);
            return;
        }
        subset.push(nums[i]);
        dfs(i + 1);
        subset.pop();
        dfs(i + 1);
        // result.push(currentSet);
        // dfs(index+1, currentSet);
        // console.log('currentSet', currentSet);
        // dfs(index+1, currentSet.push(nums[index]));
    }
    dfs(0);
    return result;
};
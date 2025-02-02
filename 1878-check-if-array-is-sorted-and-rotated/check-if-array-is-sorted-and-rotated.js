/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let maxRotations = nums.length;
    const compareString = nums.join('-');
    nums.sort((a,b)=>{return a-b});
    for (let i = 0; i < maxRotations; i++) {
        const element = nums.pop();
        nums.unshift(element);
        if (nums.join('-') === compareString) return true;
    }
    return false
};

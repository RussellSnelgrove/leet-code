/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let pointer = 0;
    while(pointer < nums.length){
        if(nums[pointer] !== val){
            pointer++;
            continue;
        } else {
            nums.splice(pointer, 1);
        }
    }
    return nums.length;
};
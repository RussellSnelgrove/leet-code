/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    if(!(nums[0] + nums[1]  > nums[2] && nums[0] + nums[2]  > nums[1] && nums[1] + nums[2]  > nums[0])) return 'none';
    const side1 = nums[0] + nums[1];
    const side2 = nums[0] + nums[2];
    const side3 = nums[1] + nums[2];

    if(side1 === side2 && side2 === side3) return 'equilateral';
    if(side1 === side2 || side2 === side3 || side1 === side3) return 'isosceles';
    return 'scalene';
};
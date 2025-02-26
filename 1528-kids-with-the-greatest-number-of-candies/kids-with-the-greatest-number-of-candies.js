/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    const maxNumber = Math.max(...candies);
    const outputArray = [];
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= maxNumber) {
            outputArray.push(true);
        } else {
            outputArray.push(false);
        }
    }
    return outputArray;
};
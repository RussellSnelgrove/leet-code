/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let maxValue = 0;
    for (let i = 0; i < accounts.length; i++) {
        const currentArray = accounts[i];
        let currentValue = 0;
        for (let j = 0; j < currentArray.length; j++) {
            currentValue += currentArray[j]
        }
        maxValue = Math.max(maxValue, currentValue);
    }
    return maxValue;
};
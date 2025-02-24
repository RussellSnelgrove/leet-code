/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let left = 0;
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[left] > prices[i]) {
            left = i;
            continue;
        }
        if (prices[i] - prices[left] > profit) profit = prices[i] - prices[left];
    }
    return profit;
};
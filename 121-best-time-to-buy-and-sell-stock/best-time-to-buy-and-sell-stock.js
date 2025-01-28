/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let leftPointer = 0;
    let currentMaxProfit = 0;
    for(let rightPointer=1; rightPointer<prices.length; rightPointer++){
        if (prices[rightPointer] < prices[leftPointer]) {
            leftPointer=rightPointer;
            continue;
        }
        if (prices[rightPointer] - prices[leftPointer] > currentMaxProfit) currentMaxProfit=prices[rightPointer] - prices[leftPointer];
    }
    return currentMaxProfit;
};
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    const totalKids = ratings.length;
    const candyDistribution = new Array(totalKids).fill(1);
    for (let i = 1; i < totalKids; i++) {
        if (ratings[i] > ratings[i - 1]) candyDistribution[i] = candyDistribution[i - 1] + 1;
    }

    for (let i = totalKids - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1] && candyDistribution[i] <= candyDistribution[i + 1]) candyDistribution[i] = candyDistribution[i + 1] + 1;
    }

    let totalCandy = 0;
    for (let i = 0; i < candyDistribution.length; i++) totalCandy += candyDistribution[i];
    return totalCandy;
};

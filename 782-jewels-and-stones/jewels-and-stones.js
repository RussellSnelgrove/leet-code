/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    jewels.split('');
    stones.split('');
    let jewelsCount = 0;
    for (let i = 0; i < stones.length; i++) if (jewels.includes(stones[i])) jewelsCount++;
    return jewelsCount;
};
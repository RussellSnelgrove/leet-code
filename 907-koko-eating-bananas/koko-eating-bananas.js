/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var findValue = function (piles, target, start, end, test) {
    if (start > end) return test;
    let cycles = 0;
    let value = start + Math.floor((end - start) / 2);
    for (let i = 0; i < piles.length; i++) {
        cycles += Math.ceil(piles[i] / value);
    }
    if (cycles <= target) return findValue(piles, target, start, value - 1, value);
    if (cycles > target) return findValue(piles, target, value + 1, end, test);
}

var minEatingSpeed = function (piles, h) {

    return findValue(piles, h, 0, Math.max(...piles), 0);
};

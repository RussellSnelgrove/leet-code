/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let nString = String(n);
    const numberSet = new Set();
    numberSet.add(n);
    while (nString !== '1') {
        let value = 0;
        for (let i = 0; i < nString.length; i++) {
            value += Math.pow(parseInt(nString[i]), 2);
        }
        if (numberSet.has(value)) return false;
        numberSet.add(value);
        nString = String(value);
    }
    return true;
};
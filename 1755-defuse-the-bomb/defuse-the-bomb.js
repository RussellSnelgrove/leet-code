/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    if (k === 0) return new Array(code.length).fill(0);
    const result = [];
    const kAb = Math.abs(k);
    for (let i = 0; i < code.length; i++) {
        let value = 0;
        for (let j = 1; j <= kAb; j++) {
            if (k > 0) value += code[(i + j) % code.length];
            if (k < 0) value += code.at(i - j);
        }
        result.push(value);
    }
    console.log(result)
    return result;
};
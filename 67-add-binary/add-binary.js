/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    const loopLen = Math.max(a.length, b.length);
    const aLen = a.length-1;
    const bLen = b.length-1;
    let string = '';
    let carry = 0;
    for (let i = 0; i < loopLen; i++) {
        let value = 0;
        if (a[aLen - i] === '1') value++;
        if (b[bLen - i] === '1') value++;
        if (carry === 1) value++;
        if (value > 1) {
            carry = 1;
            string = (value === 2) ? '0' + string : '1' + string;
        } else {
            carry = 0;
            string = String(value) + string;
        }
    }
    return (carry) ? '1' + string : string;
};
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    while (a !== 0) {
        let carry = (a & b) << 1; //carry
        b = a ^ b;//sum without carry
        a = carry;
    }
    return b;
};
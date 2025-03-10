/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    let value = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i].includes('++')) value++;
        if (operations[i].includes('--')) value--;
    }
    return value;
};
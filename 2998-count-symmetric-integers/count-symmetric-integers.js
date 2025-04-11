/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
    let count = 0;
    for (let i = low; i <= high; i++) {
        const numString = String(i);
        if (numString.length % 2 === 1) continue;
        numString.length / 2
        const firstHalf = numString.slice(0, numString.length / 2);
        const secondHalf = numString.slice(numString.length / 2);
        let firstHalfValue = 0;
        let secondHalfValue = 0;
        for (let j = 0; j < firstHalf.length; j++) {
            firstHalfValue += parseInt(firstHalf[j]);
            secondHalfValue += parseInt(secondHalf[j]);
        }
        if (firstHalfValue === secondHalfValue) count++;
    }
    return count;
};
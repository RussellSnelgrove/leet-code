/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
    let left = 1;
    let right = ranks[0] * cars * cars;
    let result = -1;

    const repairCars = function (time) {
        let count = 0;
        ranks.forEach((rank) => {
            count += parseInt(Math.sqrt(time / rank))
        })
        return count;
    }

    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);
        let repaired = repairCars(middle);
        if (repaired >= cars) {
            result = middle;
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return result;
};
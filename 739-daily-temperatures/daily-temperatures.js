/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const stackOfTemps = [];
    const result = new Array(temperatures.length);
    for (let i = 0; i < temperatures.length; i++) {
        if (stackOfTemps.length > 0) {
            while (temperatures[i] > stackOfTemps?.at(-1)?.temp) {
                const temperature = stackOfTemps.pop();
                result[temperature.index] = i - temperature.index;
            }
        }
        stackOfTemps.push({ temp: temperatures[i], index: i });
    }
    while (stackOfTemps.length > 0) {
        const temperature = stackOfTemps.pop();
        result[temperature.index] = 0;
    }
    return result;
};
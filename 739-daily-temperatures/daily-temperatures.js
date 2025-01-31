/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const stackOfTemps = [];
    const result = new Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
        if (stackOfTemps.length > 0) {
            while (temperatures[i] > stackOfTemps?.at(-1)?.temp) {
                const temperature = stackOfTemps.pop();
                result[temperature.index] = i - temperature.index;
            }
        }
        stackOfTemps.push({ temp: temperatures[i], index: i });
    }
    return result;
};
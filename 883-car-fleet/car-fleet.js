/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    let arrayOfCarPairing = position.map((p, i) => [p, speed[i]]);
    let numberOfFleets = 0;
    arrayOfCarPairing.sort((element1, element2) => (element2[0] > element1[0]) ? -1 : 1)
    let lastValue = -Infinity;
    while(arrayOfCarPairing.length>0){
        car = arrayOfCarPairing.pop();
        const value = (target-car[0])/car[1]
        if (value > lastValue) {
            numberOfFleets++
            lastValue = value;
        };
    }

    return numberOfFleets;
};
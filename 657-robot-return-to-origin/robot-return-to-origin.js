/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    const location = [0, 0];
    for (let i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case 'R':
                location[0]++;
                break;
            case 'L':
                location[0]--;
                break;
            case 'U':
                location[1]++;
                break;
            case 'D':
                location[1]--;
                break;
        }
    }
    return location[0] === 0 && location[1] === 0;
};
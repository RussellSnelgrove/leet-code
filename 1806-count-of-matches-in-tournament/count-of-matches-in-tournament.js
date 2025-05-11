/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
    let teamsCompeting = n;
    let matches = 0;
    while (teamsCompeting > 1) {
        if (teamsCompeting % 2 === 0) {
            teamsCompeting = teamsCompeting/2;
            matches += teamsCompeting;
        } else {
            matches += (teamsCompeting-1)/2;
            teamsCompeting = ((teamsCompeting-1)/2)+1;
        }
    }
    return matches;
};
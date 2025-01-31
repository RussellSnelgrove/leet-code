/**
 * @param {number} n
 * @return {string[]}
 */
 var backtrack = function(openN, closedN, n, res, stack) {
    if (openN === closedN && openN === n) {
        res.push(stack);
        return;
    }

    if (openN < n) {
        backtrack(openN + 1, closedN, n, res, stack + '(');
    }
    if (closedN < openN) {
        backtrack(openN, closedN + 1, n, res, stack + ')');
    }
}

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const parenthesisArray = [];
    backtrack(0, 0, n, parenthesisArray, '');
    return parenthesisArray;
}
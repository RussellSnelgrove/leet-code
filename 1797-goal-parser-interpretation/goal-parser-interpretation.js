/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let result = command.replace(/\(\)/g, "o");
    result = result.replace(/\(/g, "");
    result = result.replace(/\)/g, "");
    return result;
};
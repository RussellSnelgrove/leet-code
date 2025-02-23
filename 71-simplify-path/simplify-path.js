/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const pathArray = path.split('/');
    let pathString = '';
    let skipCount = 0;
    while (pathArray.length > 0) {
        const pathElement = pathArray.pop();

        switch (pathElement) {

            case "":
            case ".":
                break;
            case "..":
                skipCount++;
                break;
            default:
                if (pathElement !== '..' && skipCount > 0) {
                    skipCount--;
                    continue;
                }
                pathString = '/' + pathElement + pathString;
        }
    }
    if (pathString === '') return '/'
    return pathString;
};
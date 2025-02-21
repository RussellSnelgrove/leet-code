/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (haystack === needle) return 0;
    for (let i = 0; i < haystack.length; i++) {
        if(needle[0] === haystack[i]){
            if (needle.length === 1) return i;
            let needlePointer = 0;
            while(needlePointer < needle.length && needle[needlePointer] === haystack[i+needlePointer]){
                needlePointer++;
            }
            if (needlePointer === needle.length) return i;
        }
    }
    return -1;
};
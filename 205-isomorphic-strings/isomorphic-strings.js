/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const sLetterMap = new Map()
    const tLetterMap = new Map()
    for (let i = 0; i < s.length; i++) {
        if (sLetterMap.has(s[i])) {
            if (sLetterMap.get(s[i]) !== t[i]) return false;
        }
        sLetterMap.set(s[i], t[i])
        if (tLetterMap.has(t[i])) {
            if (tLetterMap.get(t[i]) !== s[i]) return false;
        }
        tLetterMap.set(t[i], s[i])

    }
    return true;
};
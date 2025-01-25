/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const sMap = {};
    const tMap = {};

    for (let i = 0; i < s.length; i++){
        sMap[s[i]] = 1 + (sMap[s[i]] || 0 )
        tMap[t[i]] = 1 + (tMap[t[i]] || 0 )
    }

    for (const key in sMap) {
        if(sMap[key] !== tMap[key]) return false;
    }
    return true

    // sorting uses less memory but sorts lists twice
    // if (s.length !== t.length) return false;
    // const stringS = s.split('').sort().join('');
    // const stringT = t.split('').sort().join('');
    // return stringS === stringT;
};
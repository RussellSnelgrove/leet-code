/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function (s, t) {
    if (!s || !t) {
        return "";
    }

    let dictT = new Map();
    for (let c of t) {
        dictT.set(c, (dictT.get(c) || 0) + 1);
    }

    let required = dictT.size;
    let l = 0, r = 0;
    let formed = 0;

    let windowCounts = new Map();
    let ans = [-1, 0, 0];

    while (r < s.length) {
        let c = s.charAt(r);
        windowCounts.set(c, (windowCounts.get(c) || 0) + 1);

        if (dictT.has(c) && windowCounts.get(c) === dictT.get(c)) {
            formed++;
        }

        while (l <= r && formed === required) {
            c = s.charAt(l);

            if (ans[0] === -1 || r - l + 1 < ans[0]) {
                ans[0] = r - l + 1;
                ans[1] = l;
                ans[2] = r;
            }

            windowCounts.set(c, windowCounts.get(c) - 1);
            if (dictT.has(c) && windowCounts.get(c) < dictT.get(c)) {
                formed--;
            }

            l++;
        }

        r++;
    }

    return ans[0] === -1 ? "" : s.substring(ans[1], ans[2] + 1);
};


// var minWindow = function (s, t) {
//     let minWindowString = '';
//     if (s.length < t.length) return minWindowString;
//     if (s.length === t.length && s === t) return t;
//     const tMap = {};
//     for (let i = 0; i < t.length; i++) tMap[t[i]] = (tMap[t[i]] || 0) + 1;

//     for (let startPoint = 0; startPoint < s.length; startPoint++) {
//         const startChar = s[startPoint];
//         if (tMap[startChar] === undefined) continue;
//         let charsToMatch = Object.keys(tMap).length;
//         const sMap = {};
//         let secondChar = startPoint;
//         for (let pointer = startPoint; pointer < s.length; pointer++) {

//             const character = s[pointer];
//             sMap[character] = (sMap[character] || 0) + 1;
//             if (secondChar === startPoint && character!==startChar && tMap[character] !== undefined) secondChar = pointer;
//             if (tMap[character] !== undefined && sMap[character] === tMap[character]) charsToMatch--;
//             // if characters match then we have a substring containing value;
//             if (charsToMatch === 0) {
//                 const substring = s.substring(startPoint, pointer+1);
//                 if (minWindowString === '' || substring.length < minWindowString.length) {
//                     minWindowString = substring;
//                     startPoint = secondChar-1;
//                     break;
//                 }
//             }
//         }
//         if (charsToMatch !== 0) break;
//     }
//     return minWindowString;
// };
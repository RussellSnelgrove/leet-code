/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function (digits) {
    const letterCombos = [];
    if (digits.length === 0) return letterCombos;

    const digitMap = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "qprs",
        "8": "tuv",
        "9": "wxyz"
    };

    var numberCombos = function (index, combo) {
        if (digits.length === combo.length) {
            letterCombos.push(combo);
        } else {
            for (const c of digitMap[digits[index]]) {
                numberCombos(index + 1, combo + c);
            }
        }

    }
    // const numberCombos = (i, curStr) => {
    //     if (curStr.length === digits.length) {
    //         letterCombos.push(curStr);
    //         return;
    //     }
    //     for (const c of digitToChar[digits[i]]) {
    //         numberCombos(i + 1, curStr + c);
    //     }
    // }
    numberCombos(0, '')
    return letterCombos;
};
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const symbols = ['+', '-', '/', '*'];
    let numberStack = [];
    for (let i = 0; i < tokens.length; i++) {
        const tokenValue = tokens[i];
        if (symbols.includes(tokenValue)) {
            // symbols
            const value1 = numberStack.pop();
            const value2 = numberStack.pop();
            switch (tokenValue) {
                case '+':
                    numberStack.push(value1 + value2);
                    continue;
                case '-':
                    numberStack.push(value2 - value1);
                    continue;
                case '/':
                    numberStack.push(parseInt(value2 / value1));
                    continue;
                case '*':
                    numberStack.push(value1 * value2);
                    continue;
            }

        } else {
            // number
            numberStack.push(parseInt(tokenValue));
        }
    }
    return numberStack[0];
};

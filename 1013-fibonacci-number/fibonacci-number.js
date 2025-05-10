/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let x = 0;
    let y = 1;
    let z = 0;
    if(n === 0) return 0;
    if(n === 1) return 1;
    for(let i = 0 ;i<n-1;i++){
        z = x + y;
        x = y;
        y = z;
    }
    return z;
};
function reverse(x: number): number {
    let string1: string = x.toString();
    string1 = string1.split('').reverse().join('');
    const result: number = parseInt(string1);
    if (result > 2147483647 || result < -2147483648) return 0;
    
    return x < 0 ? result * -1 : result; 
};
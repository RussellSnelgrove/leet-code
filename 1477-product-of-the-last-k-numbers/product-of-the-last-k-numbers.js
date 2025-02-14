
var ProductOfNumbers = function() {
    this.nums = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    this.nums.push(num);
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    const lastKElements = this.nums.slice(-k);
    let result = 1;
    for(let i = 0; i < lastKElements.length; i++){
        result *= lastKElements[i];
    }
    return result;
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
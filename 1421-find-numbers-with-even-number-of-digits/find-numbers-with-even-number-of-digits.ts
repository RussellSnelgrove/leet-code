function findNumbers(nums: number[]): number {
    let result: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        const isEven: boolean = String(nums[i]).length % 2 === 0;
        if (isEven) result++;
    }
    return result;
};
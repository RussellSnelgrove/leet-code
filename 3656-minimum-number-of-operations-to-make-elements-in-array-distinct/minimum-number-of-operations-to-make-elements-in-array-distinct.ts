function minimumOperations(nums: number[]): number {
    let numSet = new Set<number>(nums);
    let operations = 0;
    while (nums.length > 0) {
        if (nums.length === numSet.size) return operations;
        nums.splice(0, 3);
        numSet = new Set<number>(nums);
        operations++;
    }
    return operations;
};
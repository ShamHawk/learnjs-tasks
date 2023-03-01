function getMaxSubSum(arr) {
    let sumPositive = 0;
    let sumNegative = 0;
    for (let elem of arr) {
        sumNegative += elem;
        sumPositive = Math.max(sumPositive, sumNegative)
        if (sumNegative < 0) sumNegative = 0;
    }
    return sumPositive
}

console.log ( getMaxSubSum([-1, 2, 3, -9]) );
console.log ( getMaxSubSum([-1, 2, 3, -9, 11]) );
console.log ( getMaxSubSum([-2, -1, 1, 2]) );
console.log ( getMaxSubSum([100, -9, 2, -3, 5]) );
console.log ( getMaxSubSum([1, 2, 3]) );
console.log ( getMaxSubSum([-1, -2, -3]) );
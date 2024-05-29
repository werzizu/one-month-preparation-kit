function diagonalDifference(arr) {
    // Write your code here
    console.log(arr)
    let leftToRightDiagSumm = 0;
    let rightToLeftDiagSumm = 0;
    let matrixNum = arr.length;
    for(let i = 0; i < arr.length; i++){
        leftToRightDiagSumm += arr[i][i];
        rightToLeftDiagSumm += arr[i][arr.length - i - 1];
    }
    let diff = Math.abs(leftToRightDiagSumm - rightToLeftDiagSumm);
    return diff;
}
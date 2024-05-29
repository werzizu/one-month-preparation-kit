/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */
let a = [1, 1, 2]

function lonelyinteger(a) {
    // Write your code here

    let uniqueNum;
    for (let i = 0; i < a.length; i ++){
        if(!a.slice(0, i).concat(a.slice(i+1, a.length)).includes(a[i])){
            uniqueNum = a[i];
        }
    }

    return uniqueNum;
}

lonelyinteger(a);

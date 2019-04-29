// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result = A && (A.length > 0) ? A:[];
    let iter = K ? K : 0, i= 0;
    // console.log('result,iter=',result,iter);
    if (result.length > 0)
    while (i < iter) {
        let char = result.pop();
        // console.log('char=',char);
        result = [char,...result];
        // console.log('result=',result);
        i++;
    }
    return result;
}
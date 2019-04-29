// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A = A ? A : [];
    let sum = 0;
    let expectedSum = ((A.length+1) * (A.length+2))/2
    // console.log("A=",A)
    // let missing=1;
    // console.log("missing,current=",missing,current)
    for (let k=0;k < A.length;k++){
        // console.log("k,A[k],current=",k,A[k],current)
        sum+=A[k];
    }
    // console.log("missing=",missing)
    return expectedSum-sum;
}
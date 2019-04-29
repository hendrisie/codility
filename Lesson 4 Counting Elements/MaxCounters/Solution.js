// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const increase = (arr, X, baseNumber) => {
    const curVal = arr[X - 1] ? arr[X - 1] : 0;
    arr[X - 1] = Math.max(curVal, baseNumber) + 1;
    // console.log("arr,X,baseNumber=",arr,X,baseNumber);
    return [arr, arr[X-1]];
};

// const maxCounter = (arr, X) => {
//     let i=0;
//     while (i < arr.length){
//         arr[i] = X;
//         i++;
//     }
// };

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arr = [], highestNumber = 0, temp = 0, baseNumber=0;
    arr.length = N;
    // console.log("initial arr=",arr);
    // initialize arr to N size with each val = 0
    // while(i < N){
    //     arr[i] = 0;
    // }
    for (const digit in A) {
        if (A[digit] === N+1) {
            baseNumber=highestNumber;
            // console.log("baseNumber=",baseNumber);
            continue;
            // arr = maxCounter(arr, highestNumber);
        }
        if (A[digit]>=1 && A[digit] <= N) {
            [arr, temp] = increase(arr, A[digit], baseNumber);
            if (temp > highestNumber) highestNumber = temp;
            temp = 0;
        }
    }
    for(let idx=0;idx<N;idx++){
        const curVal = arr[idx] ? arr[idx] : 0;
        arr[idx] = Math.max(baseNumber,curVal);
    }
    // console.log("final arr=",arr)
    return arr;
}
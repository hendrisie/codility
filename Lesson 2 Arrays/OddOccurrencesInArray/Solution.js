// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A = A && A.length > 0 ? A : [];
    A.sort();
    let first, result;
    for (const val of A){
        if (!first) {
            first = val;
            result = val;
            continue;
        }
        if (val !== first) {
            break;
        } else {
            first = null;
        }
    }
    return result;
}
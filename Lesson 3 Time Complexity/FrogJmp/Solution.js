// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    X = X ? X : 0;
    Y = Y ? Y : 0;
    D = D ? D : 0;

    let distance = Y-X;
    let jumpCount = Math.ceil(distance/D);
    return jumpCount
}
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function convertBinary(num){
    let result="";
    const arr=[];
    if (typeof(num) === 'number'){
        let val = num;
        while (val > 0){
            arr.push(val%2);
            val = Math.floor(val/2);
        }
    }
    result = arr.reverse().join('');
    return result;
}

function solution(N){
    const binary=convertBinary(N);
    // console.log("binary=",binary);
    let maxGap = 0, currentGap=null;
    for(const digit of binary){
        // console.log("digit=",digit);
        if(digit === '1'){
            if (maxGap < currentGap) maxGap=currentGap;
            // console.log("set maxGap=",maxGap);
            currentGap=0;
            continue;
        }
        currentGap++;
        // console.log("increment currentGap=",currentGap);
    }
    return maxGap;
}
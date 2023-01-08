//짝수의 합

function solution(n) {
    let sum = 0;
    for(let i = 2; i <=n; i++){
        if(i%2 === 0){
            sum = sum + i;
        }
    }
    return sum;
}
//순서쌍의 개수

function solution(n) {
    let answer = 0;
    for(let a=1; a<=n; a++){
        if(n % a === 0){
            answer++;
     }
    }
    return answer;
}
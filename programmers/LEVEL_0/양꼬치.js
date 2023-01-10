//양꼬치 (틸트 문법, math 함수 공부)

function solution(n, k) {
    let serv = parseInt(n/10);
    k = k - serv;
    let answer = ((12000 * n ) + (2000 * k));

    return answer;
}
// 가까운 수

function solution(array, n) {
    
    let answer = array.sort((a,b)=>a-b).map(x=>Math.abs(n-x));
    return array[answer.indexOf(Math.min.apply(null, answer))];
}
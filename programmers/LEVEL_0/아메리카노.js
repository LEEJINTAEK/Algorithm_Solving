//아이스 아메리카노 

function solution(money) {
    let answer = [];
    let cup = parseInt(money / 5500);
    let rem = money % 5500;
    answer.push(cup,rem)
    return answer;
}
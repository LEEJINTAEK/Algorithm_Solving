//특정 문자 제거하기

function solution(my_string, letter) {
    let answer = my_string.split(letter).join('');
    return answer;
}
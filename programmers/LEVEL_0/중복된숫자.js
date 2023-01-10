//중복된 숫자 개수 filter..함수
function solution(array, n) {
    let result = 0;
    for(let i = 0; i<array.length; i++){
        if(array[i] === n){
            result++;
        }
    }
    return result;
}
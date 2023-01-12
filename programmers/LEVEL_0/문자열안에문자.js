//문자열 안에 문자열

function solution(str1, str2) {
    if(str1.includes(str2) === true ){
        return 1; 
    }
    else 
        return 2;
}
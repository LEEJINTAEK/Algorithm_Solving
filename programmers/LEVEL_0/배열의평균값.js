//배열의평균값
function solution(numbers) {
    let result = numbers.reduce((pre,crr) => pre + crr,0);
    return result / numbers.length;
}
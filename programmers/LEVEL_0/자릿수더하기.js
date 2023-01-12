//자릿수 더하기 
//형변환

// function solution(n) {
//     return n.toString().split('').map(x => +x).reduce((a , b) => a + b,0);
// }

function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0); //reduce 내에 형변환
}

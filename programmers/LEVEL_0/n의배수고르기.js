//n의 배수 고르기

// function solution(n, numlist) {
//     let result = [];
//    for(let i = 0; i<numlist.length; i++){
//        if(numlist[i] % n === 0){
//             result.push(numlist[i]);
//         }
//    }
//        return result;
// }

function solution(n, numlist) {
  return numlist.filter((num) => num % n === 0);
}

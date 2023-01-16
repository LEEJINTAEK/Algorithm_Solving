//배열 원소의 길이 map 숙지
// function solution(strlist) {
//     let array=[];
//     for(let i = 0; i<strlist.length; i++){
//         array[i] = strlist[i].length
//     }
//     return array;
// }

function solution(strlist) {
  return strlist.map((x) => x.length);
}

// 배열의 유사도 filter...

// function solution(s1, s2) {
//     let count = 0;
//     for(let i = 0; i<s1.length; i++){
//         for(let j= 0; j<s2.length; j++){
//             if(s1[i]===s2[j]){
//                 count++;
//             }
//         }
//     }
//     return count;
// }

function solution(s1, s2) {
    const answer = s1.filter((x) => s2.includes(x));
    return answer.length;
}
//짝수 홀수 개수 foreach=forof , filter
// function solution(num_list) {
//     let a = 0;
//     let b = 0;
//     let result = [];
//     for (let i = 0; i<num_list.length; i++){
//         if(num_list[i] % 2 === 0){
//             a++;
//         }
//         else {
//             b++;
//         }
//     }
//     result.push(a,b);
//     return result;
// }

function solution(num_list) {
    var answer = [0,0];

    for(let a of num_list){
        answer[a%2] += 1
    }

    return answer;
}
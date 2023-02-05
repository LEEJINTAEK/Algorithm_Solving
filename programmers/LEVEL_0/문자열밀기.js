//풀이 1
function solution(A, B) {
  let count = 0;
  let time = 0;
  while (A !== B && A.length >= time) {
    A = A.split("");
    let tem = A.pop();
    A.unshift(tem);
    A = A.join("");
    count++;
    time++;
  }
  return A === B ? count : -1;
}
//풀이 2
let solution = (a, b) => (b + b).indexOf(a);

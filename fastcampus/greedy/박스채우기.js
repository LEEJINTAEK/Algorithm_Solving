const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// x보다 작거나 같으면서 가장 가까운 2^i를 찾는 함수
function nearestSquare(x) {
  let i = 1;
  while (2 ** i <= x) i += 1;
  return i - 1;
}
let length = Number(input[0].split(" ")[0]);
let width = Number(input[0].split(" ")[1]);
let height = Number(input[0].split(" ")[2]);
let cubes = Array(20).fill(0);
let n = Number(input[1]);
for (let i = 2; i <= n + 1; i++) {
  let a = Number(input[i].split(" ")[0]);
  let b = Number(input[i].split(" ")[1]);
  cubes[a] = b;
}

let size = 19;
size = nearestSquare(length);
size = Math.min(size, nearestSquare(width));
size = Math.min(size, nearestSquare(height));
let res = 0;
let used = 0;
for (let i = size; i >= 0; i--) {
  used *= 8; // 채널, 너비, 높이가 2씩 줄었으므로 큐브의 개수는 8배 증가
  cur = 2 ** i; // 현재의 정육면체 큐브의 길이
  // 채워넣어야 할 큐브의 개수 계산
  let required =
    parseInt(length / cur) * parseInt(width / cur) * parseInt(height / cur) -
    used;
  let usage = Math.min(required, cubes[i]); // 이번 단계에서 넣을 수 있는 큐브의 개수
  res += usage;
  used += usage;
}
if (used == length * width * height) console.log(res); // 박스를 가득 채운 경우
else console.log(-1); // 박스를 가득 채우지 못한 경우

//
//
//

// const [length, width, height] = input[0].split(" ").map(Number);
// const n = Number(input[1]);
// const cubes = Array(20).fill(0);
// let answer = 0;

// for (let i = 0; i < n; i++) {
//   const [cubeSize, count] = input[i + 2].split(" ").map(Number);
//   cubes[cubeSize] = count;
// }
// function fillBox(l, w, h) {
//   if (l === 0 || w === 0 || h === 0) {
//     return 0;
//   }
//   for (let i = 19; i >= 0; i--) {
//     const size = Math.pow(2, i);
//     if (l >= size && w >= size && h >= size && cubes[i] > 0) {
//       cubes[i] -= 1;
//       return (
//         fillBox(l - size, w, h) +
//         fillBox(size, w - size, h) +
//         fillBox(size, size, h - size) +
//         1
//       );
//     }
//   }
//   return -1;
// }

// answer = fillBox(length, width, height);
// console.log(answer === -1 ? -1 : answer);

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["7", "15 11 4 8 5 2 4"];
const n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
arr = arr.reverse();

//이진탐색, LIS
const tmp = [0];

const lowerBound = (arr, target, start, end) => {
  while (start < end) {
    const mid = parseInt((start + end) / 2);

    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return end;
};

for (const x of arr) {
  if (tmp[tmp.length - 1] < x) {
    tmp.push(x);
  } else {
    const idx = lowerBound(tmp, x, 0, tmp.length);
    tmp[idx] = x;
  }
}

tmp.shift();
console.log(n - tmp.length);

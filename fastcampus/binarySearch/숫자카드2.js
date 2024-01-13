const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);
const haveArr = input[1].split(" ").map(Number);
const m = Number(input[2]);
const searchArr = input[3].split(" ").map(Number);

haveArr.sort((a, b) => a - b);
const answer = [];

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
const upperBound = (arr, target, start, end) => {
  while (start < end) {
    const mid = parseInt((start + end) / 2);
    if (arr[mid] <= target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return end;
};

const countByRange = (arr, searchNum) => {
  const right = upperBound(arr, searchNum, 0, n);
  const left = lowerBound(arr, searchNum, 0, n);
  return right - left;
};

for (let i = 0; i < m; i++) {
  const cnt = countByRange(haveArr, searchArr[i]);
  answer.push(cnt);
}

console.log(answer.join(" "));

//
//
//
//
//시간초과

// const check = {};
// for (let i = 0; i < haveArr.length; i++) {
//   if (!searchArr.includes(haveArr[i])) {
//     continue;
//   }
//   check[haveArr[i]] = (check[haveArr[i]] || 0) + 1;
// }
// const answer = [];
// for (const key of searchArr) {
//   check[key] ? answer.push(check[key]) : answer.push(0);
// }
// console.log(answer.join(" "));

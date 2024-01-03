let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
function palindrome(x) {
  return x == x.split("").reverse().join("");
}
const testCases = Number(input[0]);
for (let tc = 1; tc <= testCases; tc++) {
  const data = input[tc];
  if (palindrome(data)) {
    console.log(0);
    continue;
  } // 회문인 경우

  // 회문이 아닌 경우, 유사 회문인지 검사
  let found = false;
  const n = data.length; // 문자열의 길이
  for (let i = 0; i < parseInt(n / 2); i++) {
    if (data[i] != data[n - i - 1]) {
      if (
        palindrome(data.slice(0, i) + data.slice(i + 1, n)) ||
        palindrome(data.slice(0, n - i - 1) + data.slice(n - i, n))
      ) {
        found = true;
      }

      break;
    }
  }
  if (found) {
    console.log(1);
    continue;
  }
  console.log(2); // 회문도 유사 회문도 아닌 경우
}

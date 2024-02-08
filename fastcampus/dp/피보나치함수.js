const file = require("fs").readFileSync("/dev/stdin");
const input = file.toString().split("\n");
// const input = ["3", "0", "1", "3"];
const testCase = Number(input[0]);

//상향식
for (let tc = 1; tc <= testCase; tc++) {
  const num = Number(input[tc]);

  if (num === 0) {
    console.log(1, 0);
    continue;
  }
  const dp = Array(40).fill(0);
  dp[1] = 1;
  for (let i = 2; i <= num; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  console.log(dp[num - 1], dp[num]);
}

//하향식
// for (let tc = 1; tc <= testCase; tc++) {
//   let [zero, one] = [0, 0];
//   const num = Number(input[tc]);
//   fibo(num);

//   function fibo(num) {
//     if (num === 0) {
//       zero += 1;
//       return 0;
//     }
//     if (num === 1) {
//       one += 1;
//       return 1;
//     }

//     return fibo(num - 1) + fibo(num - 2);
//   }
//   console.log(`${zero} ${one}`);
// }

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

const pibo = [0, 1];
while (pibo[pibo.length - 1] < 1e9) {
  pibo.push(pibo[pibo.length - 1] + pibo[pibo.length - 2]);
}

for (let tc = 1; tc <= input[0]; tc++) {
  let num = input[tc];
  let i = pibo.length - 1;
  const answer = [];
  while (num > 0) {
    if (num >= pibo[i]) {
      num -= pibo[i];
      answer.push(pibo[i]);
    }
    i -= 1;
  }

  answer.sort((a, b) => a - b);
  console.log(answer.join(" "));
}

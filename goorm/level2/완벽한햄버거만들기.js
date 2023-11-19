function solution(n, el) {
  let nextPoint = 1;
  let flag = false;
  for (let i = 0; i < el.length - 1; i++) {
    if (!flag && el[nextPoint] < el[i]) {
      flag = true;
    }

    if (flag && el[nextPoint] > el[i]) {
      return 0;
    }

    nextPoint += 1;
  }
  return el.reduce((a, b) => a + b);
}

const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
let data;
rl.on("line", (line) => {
  if (!input) {
    input = Number(line);
  } else if (!data) {
    data = line.split(" ").map((x) => +x);
  } else {
    rl.close();
  }
});

rl.on("close", () => {
  console.log(solution(input, data));
});

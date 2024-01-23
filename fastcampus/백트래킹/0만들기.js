const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["2", "3", "7"];
const testCase = Number(input[0]);

for (let tc = 1; tc <= testCase; tc++) {
  const n = Number(input[tc]);

  function dfs(depth, str) {
    if (depth === n) {
      if (eval(str.split(" ").join("")) === 0) {
        console.log(str);
      }
      return;
    }

    for (const c of [" ", "+", "-"]) {
      const nextDepth = depth + 1;
      dfs(nextDepth, str + c + nextDepth);
    }
  }

  dfs(1, "1");
  console.log();
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["4 2"];
const [n, m] = input[0].split(" ").map(Number);
const check = Array.from({ length: n + 1 }, () => false);
const register = [];
const answer = [];

function dfs(depth, arr) {
  if (arr.length === m) {
    const registerStr = arr.sort((a, b) => a - b).join("");
    if (!register.includes(registerStr)) {
      answer.push(arr.join(" "));
      register.push(registerStr);
    }
    return;
  }

  for (let i = depth + 1; i <= n; i++) {
    if (!check[i]) {
      check[i] = true;
      dfs(depth, [...arr, i]);
      check[i] = false;
    }
  }
}

for (let i = 1; i <= n; i++) {
  dfs(i, [i]);
}
console.log(answer.join("\n"));

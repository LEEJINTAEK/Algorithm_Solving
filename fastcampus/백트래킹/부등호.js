// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = ["2", "< >"];
const k = Number(input[0]);
const compare = input[1].split(" ");
const check = Array.from({ length: k + 1 }, () => false);

let [min, max] = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
let [minStr, maxStr] = ["", ""];

function dfs(tmp, depth) {
  if (depth === k) {
    const numStr = tmp.join("");
    const cal = Number(numStr);

    if (min > cal) {
      min = cal;
      minStr = numStr;
    }
    if (max < cal) {
      max = cal;
      maxStr = numStr;
    }
    return;
  }

  for (let next = 0; next <= k; next++) {
    let flag = false;

    if (!check[next]) {
      if (compare[depth] === "<") {
        flag = tmp[tmp.length - 1] < next;
      }
      if (compare[depth] === ">") {
        flag = tmp[tmp.length - 1] > next;
      }
      if (flag) {
        check[next] = true;
        dfs([...tmp, next], depth + 1);
        check[next] = false;
      }
    }
  }
}

for (let i = 0; i <= k; i++) {
  check[i] = true;
  dfs([i], 0);
  check[i] = false;
}

console.log(`${maxStr}
${minStr}`);

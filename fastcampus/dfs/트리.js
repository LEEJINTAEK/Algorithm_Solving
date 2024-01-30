const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = [
//   "6 3",
//   "1 2",
//   "2 3",
//   "3 4",
//   "6 5",
//   "1 2",
//   "2 3",
//   "3 4",
//   "4 5",
//   "5 6",
//   "6 6",
//   "1 2",
//   "2 3",
//   "1 3",
//   "4 5",
//   "5 6",
//   "6 4",
//   "0 0",
// ];

let test = 0;
let curCase = 1;

while (test < input.length) {
  const [n, m] = input[test].split(" ").map(Number);

  if (n === 0 && m === 0) {
    break;
  }

  const adj = Array.from({ length: n + 1 }, () => []);
  const check = Array.from({ length: n + 1 }, () => false);

  for (let i = test + 1; i <= test + m; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    adj[a].push(b);
    adj[b].push(a);
  }
  adj;

  function isCycle(cur, pre) {
    check[cur] = true;

    for (const next of adj[cur]) {
      if (!check[next]) {
        if (isCycle(next, cur)) {
          return true;
        }
      } else if (next !== pre) {
        return true;
      }
    }

    return false;
  }

  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    if (!check[i]) {
      if (!isCycle(i, 0)) {
        cnt += 1;
      }
    }
  }

  if (cnt > 1) {
    console.log(`Case ${curCase}: A forest of ${cnt} trees.`);
  }
  if (cnt === 1) {
    console.log(`Case ${curCase}: There is one tree.`);
  }
  if (cnt === 0) {
    console.log(`Case ${curCase}: No trees.`);
  }

  //다음 테스트
  test += m + 1;
  curCase += 1;
}

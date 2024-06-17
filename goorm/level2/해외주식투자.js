function solution(impormation) {
  const sale = [];
  let number = 1;
  for (const [v, w] of impormation) {
    const value = Math.floor(v * w * 10);
    sale.push([value, number]);
    number += 1;
  }
  sale.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return b[0] - a[0];
  });

  return sale.map((x) => x[1]).join(" ");
}

// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let n = 0;
  let impormation = [];
  let cnt = 0;
  for await (const line of rl) {
    if (cnt === 0) {
      n = Number(line);
    }
    if (cnt >= 1 && cnt <= n) {
      impormation.push(line.split(" ").map(Number));
    }
    cnt += 1;
    if (cnt > n) {
      rl.close();
    }
  }
  console.log(solution(impormation));
  process.exit();
})();

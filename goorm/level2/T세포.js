function solution(n) {
  const b = n.toString(2);
  let cur = b.length - 1;
  const answer = [];

  for (const bit of b) {
    if (bit === "1") {
      answer.push(cur);
    }
    cur -= 1;
  }

  answer.sort((a, b) => a - b);
  console.log(answer.length + "\n" + answer.join(" "));
}

// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let n;
  for await (const line of rl) {
    n = Number(line);
    rl.close();
  }
  solution(n);
  process.exit();
})();

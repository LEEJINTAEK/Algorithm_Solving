function solution(n) {
  const items = [14, 7, 1];
  let answer = 0;
  for (let i = 0; i < items.length; i++) {
    answer += Math.floor(n / items[i]);
    n %= items[i];
  }
  return answer;
}

//런타임 에러
function error(n) {
  const ITEMS = { bandage: 1, medicine: 7, painkiller: 14 };
  let answer = Number.MAX_SAFE_INTEGER;
  function dfs(cnt, ache) {
    if (cnt >= answer) {
      return;
    }
    if (ache < 0) {
      return;
    }
    if (ache === 0) {
      answer = Math.min(cnt, answer);
      return;
    }
    for (const i in ITEMS) {
      dfs(cnt + 1, ache - ITEMS[i]);
    }
  }
  dfs(0, n);

  return answer;
}

const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", (line) => {
  if (!input) {
    input = Number(line);
  } else {
    rl.close();
  }
});

rl.on("close", () => {
  console.log(solution(input));
});

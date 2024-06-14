//1. 장마가 시작되면 M일 동안 온다.
//2. i일 마다 si번 부터 ei번 까지 물 높이 1 증가한다.
//3. 장마 시작된 지 3배수 마다 작동한다.
//4. 배수 시스템은 작동 날짜를 기준으로 2일 이내에 비가 내린 위치에만 작동
//5. 작동하면 물 높이가 1만큼 감소한다.
//6. 땅 높이 = 물의 높이, 따라서 쌓인 물의 높이를 구하라.
function solution(n, m, land, rain) {
  const check = Array.from({ length: n }, () => 0);
  for (let i = 1; i <= m; i++) {
    const [s_i, e_i] = rain[i - 1];
    //비 내림
    for (let j = s_i; j <= e_i; j++) {
      land[j - 1] += 1;
      check[j - 1] += 1;
    }

    if (i % 3 === 0) {
      for (let j = 1; j <= n; j++) {
        if (check[j - 1] > 0) {
          land[j - 1] -= 1;
        }
        check[j - 1] = 0;
      }
    }
  }

  return land.join(" ");
}

// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let n, m, land;
  let rain = [];
  let cnt = 0;
  for await (const line of rl) {
    if (cnt === 0) {
      [n, m] = line.split(" ").map(Number);
    }
    if (cnt === 1) {
      land = line.split(" ").map(Number);
    }
    if (cnt >= 2) {
      rain.push(line.split(" ").map(Number));
    }
    cnt += 1;
    if (cnt === m + 2) {
      rl.close();
    }
  }
  console.log(solution(n, m, land, rain));
  process.exit();
})();

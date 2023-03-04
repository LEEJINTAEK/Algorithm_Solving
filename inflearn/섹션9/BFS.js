// 이진트리 넓이우선탐색(BFS)
// 아래 그림과 같은 이진트리를 넓이우선탐색해 보세요.
// 1
// 2 3
// 4 5 6 7
// 넓이 우선 탐색 : 1 2 3 4 5 6 7

function solution() {
  let answer = "";
  let q = [];
  q.push(1);
  while (q.length) {
    let v = q.shift();
    answer += v + " ";
    for (let x of [v * 2, v * 2 + 1]) {
      if (x > 7) break;
      q.push(x);
    }
  }
  return answer;
}

console.log(solution());

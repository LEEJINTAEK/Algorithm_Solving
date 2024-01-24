//그리디 알고리즘
function solution(number, k) {
  const answer = [];

  for (let i = 0; i < number.length; i++) {
    const current = number[i];
    while (answer.length > 0 && answer[answer.length - 1] < current && k > 0) {
      answer.pop();
      k -= 1;
    }
    answer.push(current);
  }

  // 작은 값이 계속 쌓였을 때
  while (k > 0) {
    answer.pop();
    k -= 1;
  }

  return answer.join("");
}

//dfs(시간초과)

function solution(number, k) {
  const check = Array.from({ length: number.length }, () => false);
  let answer = Number.MIN_SAFE_INTEGER;
  function dfs(depth, str) {
    if (str.length === number.length - k) {
      answer = Math.max(Number(str), answer);
      return;
    }

    for (let i = depth + 1; i < number.length; i++) {
      if (!check[i]) {
        check[i] = true;
        dfs(i, str + number[i]);
        check[i] = false;
      }
    }
  }

  for (let i = 0; i < number.length; i++) {
    dfs(i, number[i]);
  }

  return answer.toString();
}

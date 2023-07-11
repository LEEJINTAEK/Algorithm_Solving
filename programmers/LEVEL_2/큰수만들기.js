//그리디 알고리즘
function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    const current = number[i];

    while (stack.length > 0 && stack[stack.length - 1] < current && k > 0) {
      stack.pop();
      k -= 1;
    }

    stack.push(current);
  }

  while (k > 0) {
    stack.pop();
    k -= 1;
  }

  return stack.join("");
}

//dfs(시간초과)
function solution(number, k) {
  const answer = [];

  function dfs(idx, numStr) {
    if (numStr.length === number.length - k) {
      answer.push(numStr);
      return;
    }

    if (idx === number.length) {
      return;
    }

    dfs(idx + 1, numStr + number[idx]);
    dfs(idx + 1, numStr);
  }

  dfs(0, "");

  return answer.sort((a, b) => b - a)[0];
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function solution(numbers) {
  const answer = new Set();
  const visited = Array(numbers.length).fill(false);

  function dfs(cur, idx) {
    const num = Number(cur);
    if (isPrime(num)) {
      answer.add(num);
    }
    if (idx === numbers.length) {
      return;
    }
    for (let i = 0; i < numbers.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        dfs(cur + numbers[i], idx + 1);
        dfs(numbers[i] + cur, idx + 1);
        visited[i] = false;
      }
    }
  }
  dfs("", 0);

  return answer.size;
}

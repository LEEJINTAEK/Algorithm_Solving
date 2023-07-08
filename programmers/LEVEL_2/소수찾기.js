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

  function combi(str, cur, i) {
    const n = Number(cur);
    if (isPrime(n)) {
      answer.add(n);
    }

    if (i === str.length) {
      return;
    }

    for (let j = 0; j < str.length; j++) {
      if (!visited[j]) {
        visited[j] = true;
        combi(str, cur + str[j], i + 1);
        combi(str, str[j] + cur, i + 1);
        visited[j] = false;
      }
    }
  }

  combi(numbers, "", 0);

  return answer.size;
}

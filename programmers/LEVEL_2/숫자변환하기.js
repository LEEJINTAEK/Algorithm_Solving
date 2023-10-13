function solution(x, y, n) {
  let test = [x];
  let cnt = 0;
  if (x === y) {
    return 0;
  }

  while (1) {
    const set = new Set();
    cnt += 1;

    test.forEach((val) => {
      if (val + n <= y) {
        set.add(val + n);
      }
      if (val * 2 <= y) {
        set.add(val * 2);
      }
      if (val * 3 <= y) {
        set.add(val * 3);
      }
    });

    if (set.size === 0) {
      return -1;
    }

    if (set.has(y)) {
      return cnt;
    }

    test = [...set];
  }
}

//BFS
function solution1(x, y, n) {
  if (x === y) {
    return 0;
  }
  let q = [[x, 0]];
  let visited = new Set();

  let front = 0;
  let rear = 1;

  while (front < rear) {
    let [cur, cnt] = q[front++];
    let nextNumber;

    if (cur === y) {
      return cnt;
    }
    if (cur > y) {
      continue;
    }

    nextNumber = cur + n;
    if (!visited.has(nextNumber)) {
      visited.add(nextNumber);
      q[rear++] = [nextNumber, cnt + 1];
    }

    nextNumber = cur * 2;
    if (!visited.has(nextNumber)) {
      visited.add(nextNumber);
      q[rear++] = [nextNumber, cnt + 1];
    }

    nextNumber = cur * 3;
    if (!visited.has(nextNumber)) {
      visited.add(nextNumber);
      q[rear++] = [nextNumber, cnt + 1];
    }
  }
  return -1;
}

//DP
function solution2(x, y, n) {
  if (x === y) {
    return 0;
  }

  let dp = Array(y + 1).fill(Infinity);
  dp[x] = 0;

  for (let i = x; i <= y; i++) {
    if (dp[i] === Infinity) {
      continue;
    }

    if (i + n <= y) {
      dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
    }

    if (i * 2 <= y) {
      dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
    }

    if (i * 3 <= y) {
      dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
    }
  }

  return dp[y] === Infinity ? -1 : dp[y];
}

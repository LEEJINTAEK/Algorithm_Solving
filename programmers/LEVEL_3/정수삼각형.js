function solution(triangle) {
  return Math.max(
    ...triangle.reduce(
      (dp, raw) => {
        return raw.map((v, i) => {
          return (
            Math.max(i === 0 ? 0 : dp[i - 1], i === dp.length ? 0 : dp[i]) + v
          );
        });
      },
      [0]
    )
  );
}

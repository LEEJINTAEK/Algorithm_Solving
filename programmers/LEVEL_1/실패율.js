function solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    const reach = stages.filter((stage) => stage >= i).length;
    const current = stages.filter((stage) => stage === i).length;
    result.push([i, current / reach]);
  }
  return result.sort((a, b) => b[1] - a[1]).map((stage) => stage[0]);
}

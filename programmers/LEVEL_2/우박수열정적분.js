function colabo(k) {
  if (k % 2 === 0) {
    return k / 2;
  } else {
    return k * 3 + 1;
  }
}

function solution(k, ranges) {
  const graph = [];
  while (k !== 1) {
    graph.push(k);
    k = colabo(k);
  }
  graph.push(k);

  const n = graph.length - 1;

  const integrals = [];

  for (let [a, b] of ranges) {
    let sum = 0;

    if (a === 0 && b === 0) {
      for (let i = 0; i < n; i++) {
        sum += (graph[i] + graph[i + 1]) / 2;
      }
    } else {
      if (a > n + b) {
        integrals.push(-1);
        continue;
      }
      for (let i = a; i < n + b; i++) {
        sum += (graph[i] + graph[i + 1]) / 2;
      }
    }
    integrals.push(sum);
  }

  return integrals;
}

//풀이 1
function solution(d, budget) {
  let sum = 0;
  let count = 0;
  d.sort((a, b) => a - b);
  for (const money of d) {
    if (sum < budget) {
      sum += money;
      count += 1;
    }
    if (sum > budget) {
      return count - 1;
    }
  }

  return count;
}

//풀이2
function solution2(d, budget) {
  return d
    .sort((a, b) => a - b)
    .map((x) => (x <= budget ? (budget = budget - x) : false))
    .filter((x) => x !== false).length;
}

//풀이3
function solution3(d, budget) {
  d.sort((a, b) => a - b);

  while (d.reduce((a, b) => a + b, 0) > budget) d.pop();

  return d.length;
}

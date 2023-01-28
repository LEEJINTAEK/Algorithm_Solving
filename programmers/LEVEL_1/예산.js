//풀이
function solution1(d, budget) {
  return d
    .sort((a, b) => a - b)
    .map((x) => (x <= budget ? (budget = budget - x) : false))
    .filter((x) => x !== false).length;
}

//풀이2
function solution2(d, budget) {
  d.sort((a, b) => a - b);

  while (d.reduce((a, b) => a + b, 0) > budget) d.pop();

  return d.length;
}

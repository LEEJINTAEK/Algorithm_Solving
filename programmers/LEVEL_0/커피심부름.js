function solution(order) {
  return order
    .map((coffe) => (coffe.includes("latte") ? 5000 : 4500))
    .reduce((a, b) => a + b, 0);
}

//풀이 1
function solution1(num, total) {
  let firstIndex = Math.ceil(total / num - Math.floor(num / 2));

  return Array(num)
    .fill(firstIndex)
    .map((x, i) => x + i);
}

//풀이 2
function solution2(num, total) {
  const a = ((2 * total) / num + 1 - num) / 2;
  return Array(num)
    .fill()
    .map((_, i) => i + a);
}

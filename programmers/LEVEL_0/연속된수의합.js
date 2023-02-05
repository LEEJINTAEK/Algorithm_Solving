//풀이 1
function solution1(num, total) {
  //인덱스[0] 규칙
  let firstIndex = Math.ceil(total / num - Math.floor(num / 2));
  //위 규칙 값에서, 자신의 인덱스 더하기
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

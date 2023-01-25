//풀이 1
function solution1(numbers, k) {
  return numbers[(2 * (k - 1)) % numbers.length];
}
//풀이 2
function solution2(numbers, k) {
  return numbers[(--k * 2) % numbers.length];
}

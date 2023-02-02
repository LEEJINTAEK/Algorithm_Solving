//풀이 1
function solution(s) {
  return [...s].map((x, i) => {
    let count = s.slice(0, i).lastIndexOf(x);
    return count < 0 ? count : i - count;
  });
}

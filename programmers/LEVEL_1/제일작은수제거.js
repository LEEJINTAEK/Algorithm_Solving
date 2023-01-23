// 내림차순 -> pop이용 안됨...
//풀이 1
function solution1(arr) {
  return arr.length === 1
    ? [-1]
    : arr.filter((x) => Math.min.apply(null, arr) !== x);
}
//풀이 2
function solution2(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}

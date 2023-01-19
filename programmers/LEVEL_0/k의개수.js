// k의 개수

//풀이 1
function solution(i, j, k) {
  let array = [];
  for (let a = i; a <= j; a++) {
    array.push(a);
  }
  return array
    .join("")
    .split("")
    .filter((x) => x == k).length;
}

//풀이 2
function solution(i, j, k) {
  let a = "";
  for (i; i <= j; i++) {
    a += i;
  }

  return a.split(k).length - 1;
}

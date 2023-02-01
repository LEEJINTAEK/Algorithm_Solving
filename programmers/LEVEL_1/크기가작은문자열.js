//풀이 1
function solution1(t, p) {
  let array = t.split("");
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let a = [];
    let temp = [];
    for (let j = 0; j < p.length; j++) {
      if (t.length) temp.push(array[i + j]);
    }
    a = temp.join("");
    result.push(a);
  }
  return result.filter((x) => x.length === p.length && x <= p).length;
}
//풀이 2
function solution2(t, p) {
  return t
    .split("")
    .map((num, index) => t.slice(index, index + p.length))
    .filter((item) => item.length === p.length && item <= p).length;
}

//풀이 3
function solution(t, p) {
  let count = 0;
  let i = 0;

  while (i - 1 + p.length < t.length) {
    if (t.slice(i, i + p.length) <= p) count++;
    i++;
  }

  return count;
}

//숫자 찾기

// 풀이 1
function solution(num, k) {
  if (num.toString().includes(k)) {
    return num.toString().indexOf(k) + 1;
  } else return -1;
}

// 풀이 2
function solution(num, k) {
  return (
    num
      .toString()
      .split("")
      .map((el) => Number(el))
      .indexOf(k) + 1 || -1
  );
}

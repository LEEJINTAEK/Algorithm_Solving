//풀이 1
// 에라토스테네스의 체
// 주어진 숫자가 101일때 2부터 101의 제곱근(10) 까지 차례대로 각각의 배수들을 모두 삭제 시키고 남은 숫자가 소수(2~101사이의)이다.
function solution1(n) {
  let arr = Array.from({ length: n + 1 })
    .fill(true)
    .fill(false, 0, 2);
  for (let i = 2; Math.pow(i, 2) <= n; i++) {
    if (arr[i]) {
      for (let j = Math.pow(i, 2); j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr.filter((num) => num === true).length;
}

//풀이 2
function solution2(n) {
  const s = new Set();
  for (let i = 1; i <= n; i += 2) {
    s.add(i);
  }
  s.delete(1);
  s.add(2);
  for (let j = 3; j < Math.sqrt(n); j++) {
    if (s.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }

  return s.size;
}

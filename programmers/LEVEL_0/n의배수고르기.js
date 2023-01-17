//n의 배수 고르기

//풀이 1
function solution(n, numlist) {
  let result = [];
  for (let i = 0; i < numlist.length; i++) {
    if (numlist[i] % n === 0) {
      result.push(numlist[i]);
    }
  }
  return result;
}

//풀이 2
function solution(n, numlist) {
  return numlist.filter((num) => num % n === 0);
}

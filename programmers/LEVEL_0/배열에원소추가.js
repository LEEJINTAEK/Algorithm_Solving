function solution(arr) {
  let xArr = [];
  for (const num of arr) {
    for (let i = 1; i <= num; i++) {
      xArr.push(num);
    }
  }
  return xArr;
}

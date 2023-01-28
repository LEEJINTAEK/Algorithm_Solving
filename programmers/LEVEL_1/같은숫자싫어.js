//풀이 1
function solution1(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    if (arr[i] !== arr[j]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

//풀이 2
function solution2(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}

//풀이 1
function solution1(my_string) {
  let answer = [];
  let acc = 1;
  for (const x of my_string.split(" ")) {
    if (x === "+") {
      acc = 1;
    } else if (x === "-") {
      acc = -1;
    } else {
      answer.push(x * acc);
    }
  }
  return answer.reduce((a, b) => a + b, 0);
}

//풀이 2
function solution2(my_string) {
  return eval(my_string);
}

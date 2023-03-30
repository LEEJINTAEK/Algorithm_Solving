//풀이 1
function solution(my_string) {
  let stack = [];
  const string = my_string.split(" ");
  let acc = 1;
  for (const number of string) {
    number === "-"
      ? (acc = -1)
      : number === "+"
      ? (acc = 1)
      : stack.push(number * acc);
  }

  return stack.reduce((a, b) => a + b);
}

//풀이 2
function solution2(my_string) {
  return eval(my_string);
}

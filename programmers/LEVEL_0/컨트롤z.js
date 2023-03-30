// 컨트롤 제트

//풀이 1
function solution(s) {
  let stack = [];
  s = s.split(" ");
  for (const num of s) {
    num === "Z" ? stack.pop() : stack.push(Number(num));
  }

  return stack.reduce((a, b) => a + b, 0);
}

//풀이 2
function solution(s) {
  const stack = [];

  s.split(" ").forEach((target) => {
    if (target === "Z") stack.pop();
    else stack.push(+target);
  });

  return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}

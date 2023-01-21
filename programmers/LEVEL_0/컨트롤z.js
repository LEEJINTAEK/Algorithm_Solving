// 컨트롤 제트

function solution(s) {
  const stack = [];

  s.split(" ").forEach((target) => {
    if (target === "Z") stack.pop();
    else stack.push(+target);
  });

  return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}

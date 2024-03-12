function solution(expression) {
  const priorities = [
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["*", "+", "-"],
    ["*", "-", "+"],
  ];

  const calculate = (a, b, op) => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
    }
  };

  const compute = (expression, ops) => {
    let temp = expression.split(/(\D)/);
    for (let op of ops) {
      while (temp.includes(op)) {
        const idx = temp.indexOf(op);
        temp.splice(
          idx - 1,
          3,
          calculate(Number(temp[idx - 1]), Number(temp[idx + 1]), op)
        );
      }
    }
    return Math.abs(temp[0]);
  };

  let answer = Number.MIN_SAFE_INTEGER;
  for (let ops of priorities) {
    const result = compute(expression, ops);
    answer = Math.max(answer, result);
  }

  return answer;
}

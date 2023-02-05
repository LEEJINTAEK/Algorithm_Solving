//풀이 1
function solution(quiz) {
  let answer = [];
  return quiz.map((x) => {
    const [calc, result] = x.split(" = ");
    const sign = calc.includes("+") ? 1 : -1;
    const [a, b] = calc.split(sign === 1 ? " + " : " - ");

    return Number(a) + Number(b) * sign === Number(result) ? "O" : "X";
  });
}

//풀이 2
function solution(quiz) {
  return quiz
    .map((el) => el.split(" = "))
    .map((el) => {
      return eval(el[0]) == el[1] ? "O" : "X";
    });
}

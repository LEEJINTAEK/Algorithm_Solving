//풀이 1
function solution(quiz) {
  let result = [];
  for (let i = 0; i < quiz.length; i++) {
    let cal = [];
    let copy = quiz[i].split(" ");
    let answer;
    let acc = 1;
    for (let n of copy) {
      if (n === "-") {
        acc = -1;
      }
      if (n === "+") {
        acc = 1;
      }
      if (n === "=") {
        answer = Number(copy[copy.length - 1]);
        break;
      }
      if (!isNaN(n)) {
        cal.push(Number(n * acc));
      }
    }
    cal.reduce((a, b) => a + b, 0) === answer
      ? result.push("O")
      : result.push("X");
  }

  return result;
}

//풀이 2
function solution2(quiz) {
  let answer = [];
  return quiz.map((x) => {
    const [calc, result] = x.split(" = ");
    const sign = calc.includes("+") ? 1 : -1;
    const [a, b] = calc.split(sign === 1 ? " + " : " - ");

    return Number(a) + Number(b) * sign === Number(result) ? "O" : "X";
  });
}

//풀이 3
function solution3(quiz) {
  return quiz
    .map((el) => el.split(" = "))
    .map((el) => {
      return eval(el[0]) == el[1] ? "O" : "X";
    });
}

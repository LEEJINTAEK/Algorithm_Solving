//햄버거 만들기

//풀이 1
function solution(ingredient) {
  let answer = 0;
  let i = 0;
  for (let i = 0; i < ingredient.length; i++) {
    if (ingredient.slice(i, i + 4).join("") === "1231") {
      answer++;
      ingredient.splice(i, 4);
      i -= 3;
    }
  }
  return answer;
}
//풀이 2
function solution2(ingredient) {
  let stk = [];
  let count = 0;
  for (let i = 0; i < ingredient.length; i++) {
    stk.push(ingredient[i]);
    if (
      stk[stk.length - 1] === 1 &&
      stk[stk.length - 2] === 3 &&
      stk[stk.length - 3] === 2 &&
      stk[stk.length - 4] === 1
    ) {
      count++;
      stk.splice(-4);
    }
  }
  return count;
}

//풀이 1
function solution(food) {
  //인덱스를 문자로 바꾸고 반복
  let half = food
    .map((x, i) => (i > 0 ? i.toString().repeat(parseInt(x / 2)) : ""))
    .join("");

  return half + 0 + [...half].reverse().join("");
}

//풀이 2
function solution(food) {
  var answer = "";
  let arr = [];

  food.map((f, i) => {
    f = f % 2 == 0 ? f : f - 1;
    for (let j = 0; j < f / 2; j++) {
      arr.push(i);
    }
  });

  answer = arr.join("") + 0 + arr.reverse().join("");

  return answer;
}

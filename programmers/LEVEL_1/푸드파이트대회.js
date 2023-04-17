//풀이 1
function solution(food) {
  let halfPos = food
    .map((eat, i) => (i > 0 ? i.toString().repeat(parseInt(eat / 2)) : ""))
    .join("");

  return halfPos + 0 + [...halfPos].reverse().join("");
}

//풀이 2
function solution2(food) {
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

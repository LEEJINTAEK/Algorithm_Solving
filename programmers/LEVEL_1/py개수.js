//풀이 1

function solution1(s) {
  let answer = s.toLowerCase().split("");
  let pArray = answer.filter((x) => x === "p");
  let yArray = answer.filter((x) => x === "y");
  return pArray.length === yArray.length;
}

//풀이 2
function solution2(s) {
  //함수를 완성하세요
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

//풀이 3
function solution3(s) {
  return s.match(/p/gi).length == s.match(/y/gi).length;
}

// 가위 바위 보

// 풀이 1
function solution(rsp) {
  return rsp
    .split("")
    .map((x) => (x === "0" ? "5" : x === "5" ? "2" : "0"))
    .join("");
}

// 풀이 2
function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  var answer = [...rsp].map((v) => arr[v]).join("");
  return answer;
}

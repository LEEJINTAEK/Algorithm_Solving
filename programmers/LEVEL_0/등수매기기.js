//풀이 1
function solution(score) {
  let array = score.map((x) => x.reduce((acc, cur) => acc + cur, 0) / 2);
  let convert = array.slice().sort((a, b) => b - a);
  return array.map((x) => convert.indexOf(x) + 1);
}
//풀이 2
function solution(score) {
  return score.map((el) => {
    return (
      score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
    );
  });
}

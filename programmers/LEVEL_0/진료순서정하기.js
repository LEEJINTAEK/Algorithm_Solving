// 진료 순서 정하기

function solution(emergency) {
  let sorted = emergency.slice().sort((a, b) => b - a);
  return emergency.map((patient) => sorted.indexOf(patient) + 1);
}

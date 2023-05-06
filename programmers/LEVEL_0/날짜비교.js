function solution(date1, date2) {
  return new Date(date1) < new Date(date2) ? 1 : 0;
}

function solution(date1, date2) {
  return Number(date1.join("")) < Number(date2.join("")) ? 1 : 0;
}

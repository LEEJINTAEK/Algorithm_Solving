function solution(s) {
  return (s.length === 4 || s.length === 6) && !s.match(/[^0-9]/g)
    ? true
    : false;
}

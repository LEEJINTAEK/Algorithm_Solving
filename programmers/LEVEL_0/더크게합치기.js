function solution(a, b) {
  let mux1 = "" + a + b;
  let mux2 = "" + b + a;
  return +mux1 >= +mux2 ? +mux1 : +mux2;
}

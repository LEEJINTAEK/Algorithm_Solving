function solution(myString) {
  return [...myString]
    .map((str) => (str.charCodeAt() < "l".charCodeAt() ? (str = "l") : str))
    .join("");
}

function solution(numbers) {
  if (Number(numbers.slice().join("")) === 0) {
    return "0";
  }

  return numbers
    .map(String)
    .sort((a, b) => (b + a).localeCompare(a + b))
    .join("");
}

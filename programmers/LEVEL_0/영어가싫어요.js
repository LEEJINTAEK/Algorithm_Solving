//영어가 싫어요

function solution(numbers) {
  const num = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for (const [key, value] of Object.entries(num)) {
    numbers = numbers.replaceAll(key, value);
  }
  return Number(numbers);
}

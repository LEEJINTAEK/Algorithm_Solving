//풀이 1
function solution1(s) {
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < numbers.length; i++) {
    s = s.split(numbers[i]).join(i);
  }

  return Number(s);
}

//풀이 2
function solution2(s) {
  let numbers = {
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

  for (let [key, value] of Object.entries(numbers)) {
    s = s.replace(RegExp(key, "g"), value);
  }

  return Number(s);
}

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function solution(s, skip, index) {
  alphabet.filter((check) => !skip.includes(check));

  return s
    .split("")
    .map(
      (check) => alphabet[(alphabet.indexOf(check) + index) % alphabet.length]
    )
    .join("");
}

const solution2 = (s, skip, index) => {
  let ans = "";
  const matched = "abcdefghijklmnopqrstuvwxyz".match(
    new RegExp(`[^${skip}]`, "g")
  );
  for (const c of s) {
    const newIdx = matched.indexOf(c) + index;
    ans += matched[newIdx % matched.length];
  }

  return ans;
};

console.log(solution2("aukks", "wbqd", 5));

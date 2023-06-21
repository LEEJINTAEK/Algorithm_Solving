function solution(msg) {
  //setting
  const alph = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let dir = new Map();
  for (let i = 1; i <= 26; i++) {
    dir.set(alph[i - 1], i);
  }
  //algorism
  let output = [];
  let j = 1;
  let i = 0;
  while (i < msg.length) {
    while (j <= msg.length && dir.has(msg.slice(i, j))) {
      j += 1;
    }
    output.push(dir.get(msg.slice(i, j - 1)));
    alph.push(1);
    dir.set(msg.slice(i, j), alph.length);
    i = j - 1;
  }
  return output;
}

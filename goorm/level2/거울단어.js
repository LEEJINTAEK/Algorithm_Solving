function solution(words) {
  const mirrorMap = {
    b: "d",
    d: "b",
    p: "q",
    q: "p",
    s: "z",
    z: "s",
    i: "i",
    l: "l",
    m: "m",
    n: "n",
    o: "o",
    u: "u",
    v: "v",
    w: "w",
    x: "x",
  };
  for (const word of words) {
    let s = "";
    let possible = true;
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (c in mirrorMap) {
        s += mirrorMap[c];
      } else {
        possible = false;
      }
    }
    if (!possible) {
      console.log("Normal");
      continue;
    }

    if (word === s.split("").reverse().join("")) {
      console.log("Mirror");
    } else {
      console.log("Normal");
    }
  }
}

// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let n;
  let cnt = 1;
  const words = [];
  for await (const line of rl) {
    if (!n) {
      n = Number(line);
      continue;
    }
    if (cnt <= n) {
      words.push(line);
    }
  }
  solution(words);
  process.exit();
})();

2;
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
23;
24;
25;
26;
27;
28;
29;
function solution(dart) {
  const numStack = [];

  const numArray = dart
    .replace(/[^0-9]/g, " ")
    .split(" ")
    .filter((v) => v);
  const strArray = dart
    .replace(/[0-9]/g, "")
    .split("")
    .filter((v) => v.trim());

  while (numArray.length) {
    let num = numArray.shift();
    let str = strArray.shift();

    num = num ** { S: 1, D: 2, T: 3 }[str];

    if (["*", "#"].includes(strArray[0])) {
      str = strArray.shift();

      num *= "*" == str ? 2 : -1;

      if ("*" == str) {
        numStack[numStack.length - 1] *= 2;
      }
    }

    numStack.push(num);
  }

  return numStack.reduce((acc, v) => acc + v, 0);
}

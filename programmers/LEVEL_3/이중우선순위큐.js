function solution(operations) {
  operations = operations.map((operation) => operation.split(" "));

  let numQ = [];
  for (const [x, num] of operations) {
    if (x === "I") {
      numQ.push(Number(num));
    }
    if (x === "D") {
      if (!numQ.length) {
        continue;
      }
      if (num === "1") {
        numQ = numQ.filter((n) => n !== Math.max(...numQ));
      }
      if (num === "-1") {
        numQ = numQ.filter((n) => n !== Math.min(...numQ));
      }
    }
  }
  return [Math.max(...numQ) | 0, Math.min(...numQ) | 0];
}

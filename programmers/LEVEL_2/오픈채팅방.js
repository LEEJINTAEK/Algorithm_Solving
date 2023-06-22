function solution(record) {
  const record1 = record.map((x) => x.split(" "));
  let userMap = new Map();
  for (const x of record1) {
    if (x[0] === "Enter" || x[0] === "Change") {
      userMap.set(x[1], x[2]);
    }
  }

  return record1
    .map((x) => {
      if (x[0] === "Enter") {
        return `${userMap.get(x[1])}님이 들어왔습니다.`;
      }
      if (x[0] === "Leave") {
        return `${userMap.get(x[1])}님이 나갔습니다.`;
      }
      if (x[0] === "Change") {
        return 1;
      }
    })
    .filter((x) => x !== 1);
}

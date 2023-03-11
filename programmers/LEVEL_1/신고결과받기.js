function solution2(id_list, report, k) {
  const reports = [...new Set(report)].map((user) => user.split(" "));

  let reported = new Map();
  for (const worse of reports) {
    reported.set(worse[1], reported.get(worse[1]) + 1 || 1);
  }

  let reporter = new Map();
  for (const user of reports) {
    if (reported.get(user[1]) >= k) {
      reporter.set(user[0], reporter.get(user[0]) + 1 || 1);
    }
  }
  return id_list.map((a) => reporter.get(a) || 0);
}

console.log(
  solution2(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);

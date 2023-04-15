//풀이1
function solution1(name, yearning, photo) {
  let personObj = {};
  for (let i = 0; i < name.length; i++) {
    personObj[name[i]] = yearning[i];
  }

  return photo.map((value) =>
    value
      .map((person) => (personObj[person] ? personObj[person] : 0))
      .reduce((a, b) => a + b, 0)
  );
}

//풀이2
function solution2(name, yearning, photo) {
  return photo.map((v) =>
    v.reduce((a, c) => (a += yearning[name.indexOf(c)] ?? 0), 0)
  );
}

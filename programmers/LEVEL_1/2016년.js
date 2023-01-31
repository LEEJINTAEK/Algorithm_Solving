//풀이 1
function solution1(a, b) {
  const Days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return Days[new Date(2016, a - 1, b, +9).getDay()];
}

//풀이 2
function solution2(a, b) {
  const monthDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const weekDay = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];

  let days = b;
  for (let i = 0; i < a - 1; i++) days += monthDay[i];

  return weekDay[days % 7];
}

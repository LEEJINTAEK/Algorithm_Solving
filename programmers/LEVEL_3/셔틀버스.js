function solution(n, t, m, timetable) {
  const crewArrivalTime = timetable
    .map((time) => {
      const [hour, minute] = time.split(":");
      return Number(hour) * 60 + Number(minute);
    })
    .sort((a, b) => a - b);
  let busArrivalTime = 540;
  let lastBusTime = busArrivalTime + (n - 1) * t;

  for (let i = 1; i <= n; i++) {
    if (i === n) {
      if (crewArrivalTime[0] <= lastBusTime && crewArrivalTime.length >= m) {
        lastBusTime = crewArrivalTime[m - 1] - 1;
      }
    }
    for (let j = 1; j <= m; j++) {
      if (crewArrivalTime[0] <= busArrivalTime) {
        crewArrivalTime.shift();
      } else {
        break;
      }
    }
    busArrivalTime += t;
  }

  const [hour, minute] = [Math.floor(lastBusTime / 60), lastBusTime % 60];

  return (
    (hour < 10 ? "0" + hour : hour) +
    ":" +
    (minute < 10 ? "0" + minute : minute)
  );
}

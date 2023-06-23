function solution(fees, records) {
  const [time, fee, addTime, addFee] = fees;
  const parkingLot = new Map();

  const getTimeDiff = (startTime, endTime) => {
    const [startHour, startMinute] = startTime.split(":").map(Number);
    const [endHour, endMinute] = endTime.split(":").map(Number);

    return endHour * 60 + endMinute - (startHour * 60 + startMinute);
  };

  const cal = new Map();
  let cnt = 0;
  records = records.map((x) => x.split(" "));
  for (const car of records) {
    cnt += 1; //입차활동
    if (car[2] === "IN") {
      parkingLot.set(car[1], car[0]);
    }
    if (car[2] === "OUT") {
      const t = getTimeDiff(parkingLot.get(car[1]), car[0]);
      cal.has(car[1])
        ? cal.set(car[1], cal.get(car[1]) + t)
        : cal.set(car[1], t);
      parkingLot.delete(car[1]);
    }

    //~24
    if (cnt === records.length) {
      for (const x of parkingLot) {
        const t = getTimeDiff(x[1], "23:59");
        cal.has(x[0]) ? cal.set(x[0], cal.get(x[0]) + t) : cal.set(x[0], t);
      }
    }
  }
  let answer = [];
  let a = [];
  //계산
  for (const [number, acc] of cal) {
    records;
    if (acc <= time) {
      answer.push([number, fee]);
    } else {
      answer.push([number, fee + Math.ceil((acc - time) / addTime) * addFee]);
    }
  }

  return answer.sort((a, b) => a[0] - b[0]).map((n) => n[1]);
}

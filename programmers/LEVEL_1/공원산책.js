//오류
function solution(park, routes) {
  const rowLen = park.length;
  const colLen = park[0].length;
  routes = routes.map((x) => x.split(" "));

  let rowPoint, colPoint;
  for (let i = 0; i < park.length; i++) {
    if (park[i].includes("S")) {
      rowPoint = i;
      colPoint = park[i].indexOf("S");
      break;
    }
  }

  for (const route of routes) {
    const direction = route[0];
    const distance = parseInt(route[1]);

    if (direction === "E") {
      let tmp = colPoint;
      let flag = true;
      for (let i = 0; i < distance; i++, tmp++) {
        if (tmp >= colLen || park[rowPoint][tmp] === "X") {
          flag = false;
          break;
        }
      }
      if (flag && colPoint + distance < colLen) {
        colPoint += distance;
      }
    }
    if (direction === "S") {
      let tmp = rowPoint;
      let flag = true;
      for (let i = 0; i < distance; i++, tmp++) {
        if (tmp >= rowLen || park[tmp][colPoint] === "X") {
          flag = false;
          break;
        }
      }
      if (flag && rowPoint + distance < rowLen) {
        rowPoint += distance;
      }
    }
    if (direction === "W") {
      let tmp = colPoint;
      let flag = true;
      for (let i = 0; i < distance; i++, tmp--) {
        if (tmp < 0 || park[rowPoint][tmp] === "X") {
          flag = false;
          break;
        }
      }
      if (flag && colPoint - distance >= 0) {
        colPoint -= distance;
      }
    }
    if (direction === "N") {
      let tmp = rowPoint;
      let flag = true;
      for (let i = 0; i < distance; i++, tmp--) {
        if (tmp < 0 || park[tmp][colPoint] === "X") {
          flag = false;
          break;
        }
      }
      if (flag && rowPoint - distance >= 0) {
        rowPoint -= distance;
      }
    }
  }
  return [rowPoint, colPoint];
}

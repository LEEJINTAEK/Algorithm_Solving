function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);
  let cnt = 1;
  let exit = routes[0][1];
  for (let i = 1; i < routes.length; i++) {
    if (routes[i][0] > exit) {
      cnt += 1;
      exit = routes[i][1];
    }
  }
  return cnt;
}

function solution(n) {
  const answer = [];

  function hanoi(n, start, via, end) {
    if (n === 1) {
      // 원판이 하나일 때는 바로 옮기면 됨
      answer.push([start, end]);
    } else {
      // n-1개의 원판을 중간 기둥(via)으로 옮김
      hanoi(n - 1, start, end, via);

      // 가장 큰 원판을 목표 기둥(end)으로 옮김
      answer.push([start, end]);

      // 중간 기둥(via)에 있는 n-1개의 원판을 목표 기둥(end)으로 옮김
      hanoi(n - 1, via, start, end);
    }
  }

  // 하노이 탑 이동 수행
  hanoi(n, 1, 2, 3);

  return answer;
}

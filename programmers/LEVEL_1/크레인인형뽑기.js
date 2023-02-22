//크레인 인형뽑기 게임

function solution(board, moves) {
  let answer = 0;
  let stack = [];
  moves.forEach((x) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][x - 1] !== 0) {
        let temp = board[i][x - 1];
        board[i][x - 1] = 0;
        if (temp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(temp);
        break;
      }
    }
  });
  return answer;
}

//풀이 1

function solution1(array, commands) {
  return commands.map(
    (command) =>
      array.slice(command[0] - 1, command[1]).sort((a, b) => a - b)[
        command[2] - 1
      ]
  );
}

//풀이 2

function solution2(array, commands) {
  let answer = [];
  for (const command of commands) {
    let stack = [];
    // 2-> array[2]가 아닌 array[1]
    for (let i = command[0] - 1; i < command[1]; i++) {
      stack.push(array[i]);
    }
    answer.push(stack.sort((a, b) => a - b)[command[2] - 1]);
  }
  return answer;
}

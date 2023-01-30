function solution(array, commands) {
  return commands.map(
    (x) =>
      array
        .slice(x[0] - 1, x[1])
        .sort((a, b) => a - b)
        .slice(x[2] - 1, x[2])[0]
  );
}

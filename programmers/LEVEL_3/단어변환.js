//dfs 풀이
function solutionDFS(begin, target, words) {
  let step = Number.MAX_SAFE_INTEGER;
  const visited = Array(words.length).fill(false);

  if (!words.includes(target)) {
    return 0;
  }

  function check(curWord, nextWord) {
    let diffCnt = 0;
    for (let i = 0; i < curWord.length; i++) {
      if (curWord[i] !== nextWord[i]) {
        diffCnt += 1;
        if (diffCnt > 1) {
          return false;
        }
      }
    }

    return true;
  }

  function dfs(word, cnt) {
    if (word === target) {
      step = Math.min(step, cnt);
      return;
    }

    for (let i = 0; i < words.length; i++) {
      if (!visited[i] && check(word, words[i])) {
        visited[i] = true;
        dfs(words[i], cnt + 1);
        visited[i] = false;
      }
    }
  }
  dfs(begin, 0);

  return step;
}

//bfs 풀이

function solution(begin, target, words) {
  if (!words.includes(target)) {
    return 0;
  }

  const visited = Array(words.legnth).fill(false);

  function check(curWord, nextWord) {
    let diffCnt = 0;
    for (let i = 0; i < curWord.length; i++) {
      if (curWord[i] !== nextWord[i]) {
        diffCnt += 1;
        if (diffCnt > 1) {
          return false;
        }
      }
    }
    return true;
  }

  const queue = [[begin, 0]];

  while (queue.length) {
    const [word, step] = queue.shift();

    if (word === target) {
      return step;
    }
    for (let i = 0; i < words.length; i++) {
      if (!visited[i] && check(word, words[i])) {
        visited[i] = true;
        queue.push([words[i], step + 1]);
      }
    }
  }
}

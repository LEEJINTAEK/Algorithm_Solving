//dfs
function solution(word) {
  const alph = ["A", "E", "I", "O", "U"];
  const dict = {};
  let cnt = 0;

  const dfs = (curWord, depth) => {
    if (depth > 5) {
      return;
    }
    dict[curWord] = cnt;
    cnt += 1;

    for (let i = 0; i < alph.length; i++) {
      const nextWord = curWord + alph[i];
      dfs(nextWord, depth + 1);
    }
  };

  dfs("", 0);

  return dict[word];
}

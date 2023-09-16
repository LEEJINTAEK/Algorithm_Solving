function solution(word) {
  const vowel = ["A", "E", "I", "O", "U"];
  const dict = {};
  let num = 0;

  function dfs(curWord, len) {
    if (len > 5) {
      return;
    }

    dict[curWord] = num;
    num += 1;

    for (let i = 0; i < vowel.length; i++) {
      dfs(curWord + vowel[i], len + 1);
    }
  }
  dfs("", 0);

  return dict[word];
}

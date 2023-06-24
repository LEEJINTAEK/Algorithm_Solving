function solution(skill, skill_trees) {
  const seq = new Map();
  skill.split("").forEach((x, i) => seq.set(x, i));
  let answer = 0;

  for (const trees of skill_trees) {
    const treeSeq = new Map();

    let i = 0;
    for (const tree of trees) {
      if (seq.has(tree)) {
        treeSeq.set(tree, i);
        i += 1;
      }
    }

    let succ = true;
    for (const [key, value] of treeSeq) {
      if (value !== seq.get(key)) {
        succ = !succ;
        break;
      }
    }
    if (succ) {
      answer += 1;
    }
  }
  return answer;
}

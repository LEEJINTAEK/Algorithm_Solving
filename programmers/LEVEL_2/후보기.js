function solution(relation) {
  const [rows, cols] = [relation.length, relation[0].length];
  const sets = [];

  for (let i = 1; i < Math.pow(2, cols); i++) {
    const tempSet = new Set();
    for (let row = 0; row < rows; row++) {
      let temp = "";
      for (let col = 0; col < cols; col++) {
        if (i & Math.pow(2, col)) {
          temp += relation[row][col];
        }
      }
      tempSet.add(temp);
    }
    if (tempSet.size === rows) {
      sets.push(i);
    }
  }

  for (let i = 0; i < sets.length; i++) {
    for (let j = i + 1; j < sets.length; j++) {
      if ((sets[i] & sets[j]) === sets[i]) {
        sets.splice(j, 1);
        j -= 1;
      }
    }
  }

  return sets.length;
}

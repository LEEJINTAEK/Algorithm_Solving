//풀이 1
function solution1(spell, dic) {
  return dic.filter((x) => spell.every((a) => x.includes(a))).length > 0
    ? 1
    : 2;
}

//풀이 2
function solution2(p, d) {
  return d.some((s) => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}

//풀이 1
function solution1(spell, dic) {
  return dic.filter((x) => spell.every((a) => x.includes(a))).length > 0
    ? 1
    : 2;
}

//풀이 2
function solution(spell, dic) {
  return dic.some(
    (check) => spell.sort().toString() === [...check].sort().toString()
  )
    ? 1
    : 2;
}

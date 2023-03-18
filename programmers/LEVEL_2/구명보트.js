function solution(people, limit) {
  let count = 0;
  let sP = 0;
  let eP = people.length - 1;

  people.sort((a, b) => b - a);

  while (sP < eP) {
    const sum = people[sP] + people[eP];

    if (sum > limit) {
      sP++;
    } else {
      sP++;
      eP--;
    }

    count++;
  }

  if (sP === eP) {
    count++;
  }

  return count;
}

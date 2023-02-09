function solution(number, limit, power) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; Math.pow(j, 2) <= i; j++) {
      if (Math.pow(j, 2) == i) count++;
      else if (i % j == 0) count += 2;
    }
    if (count > limit) count = power;
    answer += count;
  }
  return answer;
}

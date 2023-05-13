function solution(picture, k) {
  let answer = [];
  picture
    .map((str) => [...str].map((x) => x.repeat(k)).join(""))
    .forEach((str) => {
      for (let i = 0; i < k; i++) {
        answer.push(str);
      }
    });

  return answer;
}

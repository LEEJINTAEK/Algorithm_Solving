function solution(new_id) {
  const id = new_id
    .toLowerCase()
    .replace(/[^\w\-\.]/g, "") //영어,숫자,언더스코어",.,-"제외한 모든 문자 제거
    .replace(/\.{2,}/g, ".") // "." 최소 2개 이상이면 "."하나로
    .replace(/^\.|\.$/g, "") //처음 "." or  끝 "." 제거
    .padEnd(1, "a")
    .slice(0, 15)
    .replace(/\.$/g, ""); // 끝 "." 제거
  return id.padEnd(3, id[id.length - 1]);
}

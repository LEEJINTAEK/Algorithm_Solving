//배열 회전 시키기

function solution(numbers, direction) {
  if (direction === "right") {
    numbers.unshift(numbers.pop()); //pop한 [ ] 첫 인덱스부터
  } else if (direction === "left") {
    numbers.push(numbers.shift()); //shifth한 [0] 푸쉬
  }
  return numbers;
}

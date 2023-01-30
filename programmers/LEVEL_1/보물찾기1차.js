function solution(n, arr1, arr2) {
  //비트연산자(OR) , padStart
  return arr1.map((x, i) =>
    (x | arr2[i])
      .toString(2)
      .padStart(n, "0")
      .replace(/1/g, "#")
      .replace(/0/g, " ")
  );
}

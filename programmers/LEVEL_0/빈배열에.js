function solution(arr, flag) {
  let answer = "";
  flag.forEach((bool, i) => {
    return bool
      ? (answer += arr[i].toString().repeat(arr[i] * 2))
      : (answer = answer.slice(0, answer.length - arr[i]));
  });

  return [...answer].map((n) => +n);
}

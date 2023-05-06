function solution(myString, pat) {
  let match = [];
  let count = 0;
  myString = [...myString];

  for (let i = 0; i < myString.length; i++) {
    match.push(myString[i]);
    if (match.length === pat.length) {
      if (match.join("") === pat) {
        count += 1;
      }
      match.shift();
    }
  }

  return count;
}

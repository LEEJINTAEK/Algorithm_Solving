function solution1(my_string) {
  my_string = my_string.split(" ");
  let answer = [];
  for (const str of my_string) {
    if (str !== "") {
      answer.push(str);
    }
  }
  return answer;
}

function solution2(my_string) {
  return my_string.split(" ").filter((str) => str);
}

function solution(my_string, queries) {
  const charArray = my_string.split("");

  queries.forEach((query) => {
    const [start, end] = query;
    for (let i = start, j = end; i < j; i++, j--) {
      const temp = charArray[i];
      charArray[i] = charArray[j];
      charArray[j] = temp;
    }
  });

  return charArray.join("");
}

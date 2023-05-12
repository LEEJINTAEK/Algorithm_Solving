function solution(str_list) {
  for (const str of str_list) {
    if (str === "l") {
      return str_list.filter((_, i) => str_list.indexOf(str) > i);
    }
    if (str === "r") {
      return str_list.filter((_, i) => str_list.indexOf(str) < i);
    }
  }

  return [];
}

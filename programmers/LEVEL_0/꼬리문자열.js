function solution(str_list, ex) {
  return str_list.filter((str) => (str.includes(ex) ? "" : str)).join("");
}

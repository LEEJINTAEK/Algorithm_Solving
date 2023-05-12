function solution(my_string, overwrite_string, s) {
  let addString = my_string.slice(0, s) + overwrite_string;
  return addString + my_string.slice(addString.length);
}

function solution1(num_list) {
  const [a, b] = [...num_list].reverse();
  return [...num_list, a > b ? a - b : a * 2];
}

function solution2(num_list) {
  num_list[num_list.length - 1] > num_list[num_list.length - 2]
    ? num_list.push(
        num_list[num_list.length - 1] - num_list[num_list.length - 2]
      )
    : num_list.push(num_list[num_list.length - 1] * 2);
  return num_list;
}

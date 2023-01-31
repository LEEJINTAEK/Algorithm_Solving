function solution(nums) {
  const way1 = nums.length / 2;
  const way2 = [...new Set(nums)].length;
  return way1 > way2 ? way2 : way1;
}

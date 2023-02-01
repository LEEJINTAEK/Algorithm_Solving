//풀이 1
function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
function solution(nums) {
  let numArray = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        numArray.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  return numArray.filter((num) => isPrime(num)).length;
}

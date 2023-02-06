const gradient = function (arr1, arr2) {
    return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
  }
  function solution(dots) {
    if (gradient(dots[0], dots[1]) === gradient(dots[2], dots[3])) return 1;
    if (gradient(dots[0], dots[2]) === gradient(dots[1], dots[3])) return 1;
    if (gradient(dots[0], dots[3]) === gradient(dots[1], dots[2])) return 1;
    return 0;
  }
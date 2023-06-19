function primeDis(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function prime(n, i, count) {
  for (let j = 0; j < n.length - i; j++) {
    const nStr = n.slice(j, j + i + 1);
    if (!nStr.includes("0")) {
      if (primeDis(Number(nStr))) {
        if (n[j + i + 1] === "0" && n[j - 1] === "0") {
          count += 1;
        } else if (n[j + i + 1] === "0" && n[j - 1] === undefined) {
          count += 1;
        } else if (n[j + i + 1] === undefined && n[j - 1] === "0") {
          count += 1;
        } else if (n[j + i + 1] === undefined && n[j - 1] === undefined) {
          count += 1;
        }
      }
    }
  }
  return count;
}

function solution(n, k) {
  n = n.toString(k);
  let count = 0;
  for (let i = 0; i < n.length; i++) {
    count += prime(n, i, 0);
  }

  return count;
}

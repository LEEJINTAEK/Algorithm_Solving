//풀이 1
function solution1(arr) {
  const answer = [0, 0];

  const compress = (row, col, size) => {
    const first = arr[row][col];
    let compressible = true;

    for (let i = row; i < row + size; i++) {
      for (let j = col; j < col + size; j++) {
        if (arr[i][j] !== first) {
          compressible = false;
          break;
        }
      }
      if (!compressible) {
        break;
      }
    }

    if (compressible) {
      answer[first] += 1;
    } else {
      const newSize = size / 2;
      compress(row, col, newSize);
      compress(row + newSize, col, newSize);
      compress(row, col + newSize, newSize);
      compress(row + newSize, col + newSize, newSize);
    }
  };
  compress(0, 0, arr.length);

  return answer;
}

//풀이 2
function solution2(arr) {
  const quadZip = (row, col, n) => {
    if (n < 2) return arr[row][col] ? [0, 1] : [1, 0];
    let cnt0 = 0,
      cnt1 = 0;
    n >>= 1;
    for (let [i, j] of [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ]) {
      let [zero, one] = quadZip(row + i * n, col + j * n, n);
      cnt0 += zero;
      cnt1 += one;
    }
    if (cnt0 === 0) return [0, 1];
    if (cnt1 === 0) return [1, 0];
    return [cnt0, cnt1];
  };
  return quadZip(0, 0, arr.length);
}

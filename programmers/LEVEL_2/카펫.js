function solution(brown, yellow) {
  for (let w = 1; w <= yellow; w++) {
    if (yellow % w === 0) {
      const h = yellow / w;
      const totalBrown = (w + 2) * 2 + h * 2;
      if (totalBrown === brown) {
        return [h + 2, w + 2];
      }
    }
  }
  return [];
}

// function solution(brown, yellow) {
//   let area = brown + yellow;

//   for (let i = parseInt(Math.sqrt(area)); i >= 3; i--) {
//     if (area % i === 0) {
//       let j = area / i;
//       if ((i - 2) * (j - 2) === yellow) {
//         return i >= j ? [i, j] : [j, i];
//       }
//     }
//   }
// }

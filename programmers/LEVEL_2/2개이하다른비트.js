function solution(numbers) {
  return numbers.map((num, i) => {
    const zeroIdx = num.toString(2).split("").reverse().indexOf("0");
    if (zeroIdx === -1) {
      return num + Math.pow(2, num.toString(2).length - 1);
    }
    return num + Math.ceil(Math.pow(2, zeroIdx - 1));
  });
}

// 시간초과(xor)
function countDifferentBits(num, nextNum) {
  let count = 0;
  let xor = num ^ nextNum;

  while (xor !== 0) {
    count += 1;
    xor &= xor - 1;
  }

  return count;
}

function solution2(numbers) {
  const answer = [];

  for (let number of numbers) {
    let x = number;
    let cnt = 0;

    while (true) {
      x += 1;
      cnt = countDifferentBits(number, x);

      if (cnt <= 2) {
        answer.push(x);
        break;
      }
    }
  }

  return answer;
}

//시간 초과
function solution3(numbers) {
  return numbers.map((number) => {
    let x = number.toString(2);
    let i = number + 1;
    while (1) {
      const compare = i.toString(2);
      x = x.padStart(compare.length, "0");
      let cnt = 0;
      for (let j = 0; j < compare.length; j++) {
        if (x[j] !== compare[j]) {
          cnt += 1;
        }
        if (cnt > 2) {
          break;
        }
      }
      if (cnt > 0 && cnt <= 2) {
        return i;
      } else {
        i += 1;
      }
    }
  });
}

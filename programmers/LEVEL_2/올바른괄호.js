//풀이 1
function solution1(s) {
  let stack = [];
  for (let x of s) {
    if (x === "(") {
      stack.push(x);
    } else {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length > 0 ? false : true;
}

//풀이 2

function solution2(s) {
  let cum = 0;
  for (let paren of s) {
    cum += paren === "(" ? 1 : -1;
    if (cum < 0) {
      return false;
    }
  }
  return cum === 0 ? true : false;
}

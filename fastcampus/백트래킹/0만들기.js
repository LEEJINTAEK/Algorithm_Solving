const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["2", "3", "7"];
const testCase = Number(input[0]);

for (let tc = 1; tc <= testCase; tc++) {
  const n = Number(input[tc]);

  function dfs(depth, str) {
    if (depth === n) {
      if (eval(str.split(" ").join("")) === 0) {
        console.log(str);
      }
      return;
    }

    for (const c of [" ", "+", "-"]) {
      const nextDepth = depth + 1;
      dfs(nextDepth, str + c + nextDepth);
    }
  }

  dfs(1, "1");
  console.log();
}

//
//
//파이썬

// test_case = int(input())

// for _ in range(test_case):
//   n = int(input())
//   nums = [str(i) for i in range(1,n+1)]
//   def dfs(arr,depth):
//     if depth == n-1:
//       expreesion = ''
//       for i in range(0,n-1):
//         expreesion += nums[i] + arr[i]
//       expreesion += nums[n-1] + ''
//       if eval(expreesion.replace(' ','')) == 0:
//         print(expreesion)

//       return

//     for op in [' ','+','-']:
//       arr.append(op)
//       dfs(arr,depth+1)
//       arr.pop()

//   dfs([],0)
//   print('')

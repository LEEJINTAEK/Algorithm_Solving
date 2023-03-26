// 가장 짧은 문자거리
// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출
// 력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다.
// 문자열의 길이는 100을 넘지 않는다.
// ▣ 출력설명
// 첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.
// ▣ 입력예제 1
// teachermode e
// ▣ 출력예제 1
// 1 0 1 2 1 0 1 2 2 1 0

//풀이 1
function solution(s, t) {
  let sum1 = 0;
  let sum2 = 0;
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    sum1++;
    if (s[i] === t) {
      sum1 = 0;
    }
    answer.push(sum1);
  }
  for (let j = s.length - 1; j >= 0; j--) {
    sum2++;
    if (s[j] === t) {
      sum2 = 0;
    }
    if (answer[j] > sum2) {
      answer[j] = sum2;
    }
  }
  
  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));

//풀이 2
function solution2(s, t) {
  let answer = [];
  let p = 1000;
  for (const x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    }
    if (x !== t) {
      p += 1;
      answer.push(p);
    }
  }

  p = 1000; //초기화
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
    }
    if (s[i] !== t) {
      p += 1;
      answer[i] = Math.min(answer[i], p);
    }
  }

  return answer;
}

let str2 = "teachermode";
console.log(solution2(str2, "e"));

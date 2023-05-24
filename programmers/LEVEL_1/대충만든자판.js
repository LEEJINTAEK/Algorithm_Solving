//해결
function solution(keymap, targets) {
  let map = new Map();
  keymap.forEach((keys, i) => {
    [...keys].forEach((key, cnt) => {
      if (map.has(key)) {
        if (map.get(key) > cnt) {
          map.set(key, cnt);
        }
      } else {
        map.set(key, cnt);
      }
    });
  });

  let answer = targets.map((target) => {
    let press = 0;
    for (const char of [...target]) {
      if (map.has(char)) {
        press += map.get(char) + 1;
      } else {
        press = -1;
        break;
      }
    }
    return press;
  });
  return answer;
}

//풀이2
function solution2(keymap, targets) {
  const answer = [];
  const map = {};
  for (const items of keymap) {
    items
      .split("")
      .map(
        (item, index) =>
          (map[item] = map[item] < index + 1 ? map[item] : index + 1)
      );
  }
  for (const items of targets) {
    answer.push(
      items.split("").reduce((cur, item) => (cur += map[item]), 0) || -1
    );
  }
  return answer;
}

//테스트 1~11 실패
function solutionFail1(keymap, targets) {
  let map = new Map();
  keymap.forEach((keys, i) => {
    [...keys].forEach((key, cnt) => {
      if (map.has(key)) {
        if (map.get(key) > cnt) {
          map.set(key, cnt);
        }
      } else {
        map.set(key, cnt);
      }
    });
  });

  for (const keys of map.entries()) {
    targets = targets.map((targetKeys) =>
      targetKeys.replaceAll(keys[0], keys[1] + 1)
    );
  }

  return targets.map(
    (n) => [...n].map((str) => Number(str)).reduce((a, b) => a + b, 0) || -1
  );
}

//테스트 14~23 실패
function solutionFail2(keymap, targets) {
  let map = new Map();
  keymap.forEach((keys, i) => {
    [...keys].forEach((key, cnt) => {
      if (map.has(key)) {
        if (map.get(key) > cnt) {
          map.set(key, cnt);
        }
      } else {
        map.set(key, cnt);
      }
    });
  });

  return targets.map((target) => {
    let pressCount = 0;
    [...target].forEach((char) => {
      if (map.has(char)) {
        pressCount += map.get(char) + 1;
      } else {
        pressCount = -1;
        return;
      }
    });
    return pressCount;
  });
}

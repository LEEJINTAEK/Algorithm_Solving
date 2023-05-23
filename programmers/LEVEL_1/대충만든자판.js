//테스트 1~11 실패
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

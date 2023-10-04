//이분검색
function canCross(stones, k, mid) {
  let consecutive = 0;
  for (let i = 0; i < stones.length; i++) {
    if (stones[i] <= mid) {
      consecutive += 1;
    } else {
      consecutive = 0;
    }

    if (consecutive >= k) {
      return false;
    }
  }

  return true;
}
function solution(stones, k) {
  let left = 1;
  let right = 200000000; //<< 설정 잘못하면 런타임 에러

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    canCross(stones, k, mid) ? (left = mid + 1) : (right = mid - 1);
  }

  return left;
}

//실행시간 초과
function solution(stones, k) {
  let max = Number.MIN_SAFE_INTEGER;
  let friends = 0;
  while (1) {
    let len = 1; //기본 한 칸
    for (let i = 0; i < stones.length; i++) {
      if (stones[i] === 0) {
        len += 1; //건너뛰기
      } else {
        len = 1;
        stones[i] -= 1;
      }
      max = Math.max(max, len);
    }
    if (max > k) {
      break;
    }
    friends += 1;
  }
  return friends;
}

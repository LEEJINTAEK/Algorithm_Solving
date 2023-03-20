//LRU

function solution(cacheSize, cities) {
  let cache = Array.from({ length: cacheSize }, () => 0);
  let sum = 0;

  cities
    .map((x) => x.toLowerCase())
    .forEach((el) => {
      let hit = -1;

      for (let i = 0; i < cacheSize; i++) {
        if (el === cache[i]) {
          hit = i;
        }
      }

      if (hit === -1) {
        for (let i = cacheSize - 1; i >= 1; i--) {
          cache[i] = cache[i - 1];
        }
        sum += 5;
      } else {
        for (let i = hit; i >= 1; i--) {
          cache[i] = cache[i - 1];
        }
        sum += 1;
      }

      cache[0] = el;
    });

  return sum;
}

//큐 활용

function solution2(cacheSize, cities) {
  const MISS = 5,
    HIT = 1;

  if (cacheSize === 0) return MISS * cities.length;

  let answer = 0,
    cache = [];

  cities.forEach((city) => {
    city = city.toUpperCase();

    let idx = cache.indexOf(city);

    if (idx > -1) {
      cache.splice(idx, 1);
      answer += HIT;
    } else {
      if (cache.length >= cacheSize) cache.shift();
      answer += MISS;
    }

    cache.push(city);
  });

  return answer;
}

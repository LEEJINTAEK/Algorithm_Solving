function getMulti(str) {
  const multiSet = [];
  for (let i = 0; i < str.length - 1; i++) {
    const el = str.slice(i, i + 2).toLowerCase();
    if (/^[a-z]+$/.test(el)) {
      multiSet.push(el);
    }
  }
  return multiSet;
}
function solution(str1, str2) {
  const multiSet1 = getMulti(str1);
  const multiSet2 = getMulti(str2);

  let setMap1 = new Map();
  let setMap2 = new Map();

  if (multiSet1.length === 0 && multiSet2.length === 0) {
    return 65536;
  }

  for (const el of multiSet1) {
    setMap1.has(el) ? setMap1.set(el, setMap1.get(el) + 1) : setMap1.set(el, 1);
  }
  for (const el of multiSet2) {
    setMap2.has(el) ? setMap2.set(el, setMap2.get(el) + 1) : setMap2.set(el, 1);
  }

  let union = 0;
  let intersection = 0;

  for (const [key, value] of setMap1) {
    if (setMap2.has(key)) {
      intersection += Math.min(value, setMap2.get(key));
      union += Math.max(value, setMap2.get(key));
      setMap2.delete(key);
    } else {
      union += value;
    }
  }
  for (const [key, value] of setMap2) {
    union += value;
  }

  return Math.floor((intersection / union) * 65536);
}

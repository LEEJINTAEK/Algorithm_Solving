function solution(m, musicinfos) {
  function convertTimeToMinutes(time) {
    const [hour, minute] = time.split(":").map(Number);
    return hour * 60 + minute;
  }

  function getMelodyWithinTime(melody, time) {
    let result = "";
    const melodyLength = melody.length;
    for (let i = 0; i < time; i++) {
      result += melody[i % melodyLength];
    }

    return result;
  }

  let answer = "(None)";
  let maxPlayTime = 0;

  m = m.replace(/(C|D|F|G|A)#/g, (_, x) => x.toLowerCase());

  for (const musicinfo of musicinfos) {
    const [start, end, name, melody] = musicinfo.split(",");
    const playTime = convertTimeToMinutes(end) - convertTimeToMinutes(start);
    const melodyWithinTime = getMelodyWithinTime(
      melody.replace(/(C|D|F|G|A)#/g, (_, x) => x.toLowerCase()),
      playTime
    );

    if (melodyWithinTime.includes(m)) {
      if (playTime > maxPlayTime) {
        answer = name;
        maxPlayTime = playTime;
      }
    }
  }

  return answer;
}

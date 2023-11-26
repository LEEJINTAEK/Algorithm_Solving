function isSort(plans) {
  plans = plans.map(([name, start, playTime]) => {
    const time = start.split(":");
    return {
      name: name,
      start: Number(time[0] * 60) + Number(time[1]),
      playTime: Number(playTime),
    };
  });
  plans.sort((a, b) => a.start - b.start);

  return plans;
}
function solution(plans) {
  const sortedPlan = isSort(plans);
  const ingTask = [];
  const finished = [];
  let idx = 0;
  for (let i = sortedPlan[0].start; i < 24 * 60; i++) {
    if (ingTask.length !== 0) {
      const lastTask = ingTask[ingTask.length - 1];
      lastTask.playTime -= 1;
      if (lastTask.playTime === 0) {
        ingTask.pop();
        finished.push(lastTask.name);
      }
    }

    if (i === sortedPlan[idx]?.start) {
      ingTask.push(sortedPlan[idx]);
      idx += 1;
    }
  }

  return [...finished, ...ingTask.map((task) => task.name).reverse()];
}

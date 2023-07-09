function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge = [];
  let totalWeight = 0;

  while (truck_weights.length > 0 || bridge.length > 0) {
    time += 1;

    // 다리에 있는 트럭이 다리를 모두 건너면 해당 트럭을 제거하고 총 무게에서 감소시킴
    if (bridge.length > 0 && time - bridge[0].time === bridge_length) {
      totalWeight -= bridge.shift().weight;
    }

    // 다리에 트럭이 올라갈 수 있는 경우
    if (truck_weights.length > 0 && totalWeight + truck_weights[0] <= weight) {
      const truckWeight = truck_weights.shift();
      bridge.push({ weight: truckWeight, time: time });
      totalWeight += truckWeight;
    }
  }

  return time;
}

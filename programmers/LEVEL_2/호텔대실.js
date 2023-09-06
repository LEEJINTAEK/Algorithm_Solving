function solution(book_time) {
  // 1. 시간 변환
  const bookLength = book_time.length;
  for (let i = 0; i < bookLength; i++) {
    const [startTime, endTime] = book_time[i];
    const [hourS, minuteS] = startTime.split(":");
    const [hourE, minuteE] = endTime.split(":");
    book_time[i][0] = Number(hourS) * 60 + Number(minuteS);
    book_time[i][1] = Number(hourE) * 60 + Number(minuteE);
  }
  // 2. 오름 차순 정렬
  book_time.sort((a, b) => a[0] - b[0]);

  // 3. 첫 시간 집어넣기
  let startTime = book_time[0][0];
  let endTime = book_time[0][1];
  const interval = 10;
  const cleanRooms = [endTime + interval]; // 후보 배열에 interval 분 더해서 집어넣기
  let answer = 1;

  // 4. 답 구하자
  for (let i = 1; i < bookLength; i++) {
    const [currentStartTime, currentEndTime] = [
      book_time[i][0],
      book_time[i][1],
    ];

    let creatRoom = true;
    // cleanRooms 에서 다음 사건이 일어날수 있는지 확인한다.
    for (let j = 0; j < cleanRooms.length; j++) {
      if (cleanRooms[j] <= currentStartTime) {
        startTime = currentStartTime;
        endTime = currentEndTime;
        cleanRooms.splice(j, 1); // 대실완료
        cleanRooms.push(endTime + interval);
        creatRoom = false; // 방 안만들어도 됨
        break;
      }
    }
    // 기존의 방들이 꽉 차있거나, 청소중인 경우 새로운 방을 연다.
    if (creatRoom) {
      startTime = currentStartTime;
      endTime = currentEndTime;
      answer += 1;
      // cleanRooms에 endTime + interval 을 push한다.(청소 끝난 시간(입실 가능한 시간))
      cleanRooms.push(endTime + interval);
    }
  }
  return answer;
}

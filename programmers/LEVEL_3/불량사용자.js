function solution(user_id, banned_id) {
  let answer = [];
  let visited = new Array(user_id.length).fill(false);

  function isMatch(banned, user) {
    // 길이가 다르면 매칭 불가능
    if (banned.length !== user.length) {
      return false;
    }
    for (let i = 0; i < banned.length; i++) {
      if (banned[i] !== "*" && banned[i] !== user[i]) {
        return false;
      }
    }
    return true;
  }

  function dfs(idx) {
    if (idx === banned_id.length) {
      // 현재 선택된 제재 아이디 목록을 정렬하여 문자열로 변환 후 answer에 추가
      const sortedIds = visited
        .map((val, index) => (val ? user_id[index] : ""))
        .sort()
        .join("");

      if (!answer.includes(sortedIds)) {
        answer.push(sortedIds);
      }
      return;
    }

    for (let i = 0; i < user_id.length; i++) {
      if (!visited[i] && isMatch(banned_id[idx], user_id[i])) {
        visited[i] = true;
        dfs(idx + 1);
        visited[i] = false;
      }
    }
  }

  dfs(0);
  return answer.length;
}

function solution(tickets) {
  const answer = [];

  const dfs = (airport, tickets, path) => {
    const newPath = [...path, airport];

    if (tickets.length === 0) {
      answer.push(newPath);
      return;
    }

    for (const i in tickets) {
      const ticket = tickets[i];
      if (ticket[0] === airport) {
        const newTickets = [...tickets];
        newTickets.splice(i, 1);
        dfs(ticket[1], newTickets, newPath);
      }
    }
  };
  dfs("ICN", tickets, []);
  answer.sort();

  return answer[0];
}

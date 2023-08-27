function solution(today, terms, privacies) {
  const map = {};
  terms = terms.map((x) => x.split(" "));
  for (const term of terms) {
    map[term[0]] = +term[1];
  }
  privacies = privacies.map((x) => x.split(" "));
  today = today.split(".").map((x) => +x);

  const terminate = [];
  let num = 0;
  for (const pri of privacies) {
    num += 1;
    const date = pri[0].split(".").map((x) => +x);
    let dd = date[2];
    let mm = date[1];
    let yy = date[0];

    for (let i = 1; i < map[pri[1]] * 28; i++) {
      dd += 1;
      if (dd > 28) {
        mm += 1;
        dd = 1;
      }
      if (mm > 12) {
        yy += 1;
        mm = 1;
      }
    }

    if (
      yy < today[0] ||
      (yy === today[0] && mm < today[1]) ||
      (yy === today[0] && mm === today[1] && dd < today[2])
    ) {
      terminate.push(num);
    }
  }
  return terminate;
}

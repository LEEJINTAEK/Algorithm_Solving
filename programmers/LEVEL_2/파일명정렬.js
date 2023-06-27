//풀이 1
function solution1(files) {
  const parsedFiles = [];

  for (const file of files) {
    const parsedFile = {
      head: "",
      number: "",
      tail: "",
    };

    let idx = 0;

    while (idx < file.length && !/^\d$/.test(file[idx])) {
      parsedFile.head += file[idx];
      idx++;
    }

    while (
      idx < file.length &&
      /^\d$/.test(file[idx]) &&
      parsedFile.number.length < 5
    ) {
      parsedFile.number += file[idx];
      idx++;
    }

    parsedFile.tail = file.slice(idx);

    parsedFiles.push(parsedFile);
  }

  parsedFiles.sort((a, b) => {
    const aHead = a.head.toLowerCase();
    const bHead = b.head.toLowerCase();
    const aNum = Number(a.number);
    const bNum = Number(b.number);

    if (aHead === bHead) {
      if (aNum === bNum) {
        return (
          files.indexOf(a.head + a.number + a.tail) -
          files.indexOf(b.head + b.number + b.tail)
        );
      }
      return aNum - bNum;
    }

    return aHead.localeCompare(bHead);
  });

  return parsedFiles.map((file) => file.head + file.number + file.tail);
}

//풀이 2
function solution2(files) {
  const re = /^([a-zA-Z-\. ]+)([0-9]+)(.*)$/;
  let dict = [];
  files.forEach((entry, idx) => {
    let [fn, head, num] = entry.match(re);
    dict.push({ fn, head: head.toLowerCase(), num: parseInt(num), idx });
  });

  return dict
    .sort((a, b) => {
      if (a.head > b.head) return 1;
      if (a.head < b.head) return -1;
      if (a.num > b.num) return 1;
      if (a.num < b.num) return -1;
      return a.idx - b.idx;
    })
    .map((e) => e.fn);
}

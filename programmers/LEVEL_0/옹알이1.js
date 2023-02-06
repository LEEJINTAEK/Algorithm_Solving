function solution(babbling) {
  const language = /aya|ye|woo|ma/g;
  return (
    babbling.length - babbling.filter((x) => x.replace(language, "")).length
  );
}

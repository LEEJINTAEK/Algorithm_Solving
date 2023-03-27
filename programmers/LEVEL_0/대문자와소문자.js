//대문자와 소문자

function solution(my_string) {
  return [...my_string]
    .map((alph) =>
      alph === alph.toUpperCase() ? alph.toLowerCase() : alph.toUpperCase()
    )
    .join("");
}

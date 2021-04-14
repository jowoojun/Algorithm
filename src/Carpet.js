function solution(brown, yellow) {
  for(var i = 3;(i - 2)*(brown/2 - i) !== yellow; i++)

  return [brown/2 - i + 2, i];
}
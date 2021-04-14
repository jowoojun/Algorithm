function solution(brown, yellow) {
  var i = 3;
  while((i - 2)*(brown/2 - i) !== yellow){
    i++
  }

  return [brown/2 - i + 2, i];
}
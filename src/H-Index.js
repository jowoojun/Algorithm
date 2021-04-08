function solution(citations) {
  var answer = 0;
  citations.sort((a, b) => b - a)
  for(var i = 0; i < citations.length; i++){
    if (i >= citations[i]){
      answer = i
      break
    }
  }
  if(i == citations.length) {
    return i;
  }
  return answer;
}
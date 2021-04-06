function solution(progresses, speeds) {
  var answer = [];
  while(progresses.length){
    let cnt = 0
    progresses = progresses.map((progresses, i) => progresses + speeds[i])
    while(progresses[0] >= 100){
      progresses.shift()
      speeds.shift()
      cnt += 1
    }
      
    if(cnt != 0){    
      answer.push(cnt)
    }
  }
  return answer;
}
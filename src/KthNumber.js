function solution(array, commands) {
  var answer = [];
  for(let command of commands){
    let list = array.slice(command[0]-1, command[1])
    let selectedNumber = list.sort((o1, o2)=> o1 - o2)[command[2]-1]
    answer.push(selectedNumber)
  }
  return answer;
}
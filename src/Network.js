function solution(n, computers) {
  var answer = 0;
  var visited = Array(n).fill(false)

  const bfs = (i) => {
    if(visited[i] === true){
      return 0
    }
    visited[i] = true
    for(var j = 0; j < computers[i].length; j++){
      if(computers[i][j] === 1){
        bfs(j, computers)
      }
    }
    return 1
  }

  for(var i = 0; i < n; i++){
    if(visited[i] === false)
      answer += bfs(i)
  }

  return answer;
}
function solution(priorities, location) {
  var q = priorities.map((t,i)=>([ t, i === location ]));

  var cnt = 0;
  while(true){
      var cur = q.shift();
      if(q.some(t => t[0] > cur[0])){
          q.push(cur);
      }else{
          cnt++;
          if(cur[1])
            return cnt;
      }
  }
}

console.log(solution([1, 1, 9, 1, 1, 1]	, 0))
function solution(bridge_length, weight, truck_weights) {
  var answer = 0;

  var num_trucks = truck_weights.length;
  var on_board = []
  var passed = []
  var sum = 0;
  while(num_trucks > passed.length){
    if(on_board.length){
      if(on_board[0][1] >= bridge_length){
        sum -= on_board[0][0]
        passed.push(on_board.shift()[0])
      }
      for(let truck of on_board){
        truck[1] += 1
      }
    }
    if(sum + truck_weights[0] <= weight){
      sum += truck_weights[0]
      on_board.push([truck_weights.shift(), 1])
    }
    answer++;
  }
  return answer;
}
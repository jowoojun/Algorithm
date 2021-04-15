function solution(numbers, target) {
  if(numbers.length === 0){
    if(target === 0){
      return 1
    }else{
      return 0
    }
  }else{
    let temp_arr = numbers.slice(1)
    return solution(temp_arr, target+numbers[0]) + solution(temp_arr, target-numbers[0])
  }
}
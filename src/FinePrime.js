function solution(numbers) {
  let primeNumbers = new Set()
  const permutator = (arr, str) => {
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        const temp = [...arr]
        temp.splice(i, 1)
        permutator(temp, str + arr[i])
      }
    }

    if(str.length > 0){
      primeNumbers.add(Number(str))
    }
  }
  
  const arr_num = numbers.split("")
  permutator(arr_num, "")
  
  const checkPrime = (num) => {
    let start = 2
    while (start <= Math.sqrt(num)) {
      if (num % start++ < 1)
        return false
    }
    return num > 1
  }

  return new Array(...primeNumbers)
    .map((p) => { if(checkPrime(p)) return p })
    .filter(e => e != undefined)
    .length;
}
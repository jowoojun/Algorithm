function solution(numbers) {
  let list = numbers.map((n) => String(n))
  list.sort((a,b) => Number(b+a) - Number(a+b))
  return (Number(list[0]))? list.join('') : String(0)
}
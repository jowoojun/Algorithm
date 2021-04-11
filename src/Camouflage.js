function solution(clothes) {
  var hmap = new Map()
  for(let clothe of clothes){
    if(hmap.has(clothe[1])){
      hmap.set(clothe[1], hmap.get(clothe[1])+1)
    }else{
      hmap.set(clothe[1], 1)
    }
  }
  const reducer = (accumulator, currentValue) => accumulator * (currentValue + 1)
  return [ ...hmap.values() ].reduce(reducer, 1) - 1
}
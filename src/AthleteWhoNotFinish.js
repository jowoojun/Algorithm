function solution(participants, completions) {
  var hmap = new Map()
  for(let participant of participants){
    if(hmap.has(participant)){
      hmap.set(participant, hmap.get(participant)+1)
    }else{
      hmap.set(participant, 1)
    }
  }

  for(let completion of completions){
    if(hmap.has(completion)){
      hmap.set(completion, hmap.get(completion)-1)
    }
  }
  
  return [...hmap.entries()]
      .filter(({ 1 : v }) => v === 1)
      .map(([k]) => k)[0];
}
function solution(genres, plays) {
  var answer = []
  var hmap = new Map()
  genres.map((genre, i) => {
    if(hmap.has(genre)){
      var [sum, list] = hmap.get(genre)
      hmap.set(genre, [sum + plays[i], list.concat([[plays[i], i]])])
    }else{
      hmap.set(genre, [plays[i], [[plays[i], i]]])
    }
  })

  const sortedGenreList = [...hmap.values()].sort((a, b) => b[0] - a[0])
  const sortedPlaysInfo = sortedGenreList.map((playsInfo) => playsInfo[1].sort((a, b) => b[0] - a[0]))
  for(let playsInfo of sortedPlaysInfo){
    const two = playsInfo.splice(0, 2)
    two.map((t) => answer.push(t[1]))
  }

  return answer;
}
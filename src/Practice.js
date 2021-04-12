function solution(answers) {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let grades = [0,0,0];
  for(let i = 0; i < answers.length; i++){
      if(answers[i] === arr1[i % 5])
          grades[0]++;
      if(answers[i] === arr2[i % 8])
          grades[1]++;
      if(answers[i] === arr3[i % 10])
          grades[2]++;
  }

  let max_grade = Math.max(...grades);
  return grades
    .map((g, i) => { if(g === max_grade) return i+1 })
    .filter(e => e != undefined);
}
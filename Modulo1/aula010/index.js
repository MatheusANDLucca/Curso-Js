let varA = 'A';  // B
let varB = 'B';  // C
let varC = 'C';  // A

const varAA = varA;
varA = varB
varB = varC
varC = varAA

console.log(varA, varB, varC);
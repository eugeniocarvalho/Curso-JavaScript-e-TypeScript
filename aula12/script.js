let varA = 'A';
let varB = 'B';
let varC = 'C';
let tmp = varA;

// varA = varB
// varB = varC
// varC = tmp

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC)
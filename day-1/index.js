const { input } = require('./input.json');

let solution;

for (val in input) {
  const num = 2020 - input[val];
  if (input.includes(num)) {
    solution = num * input[val];
  }
}

console.log(solution);

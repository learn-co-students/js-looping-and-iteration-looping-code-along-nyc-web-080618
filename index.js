// Code your solutions in this file
let employees = [ ];

function printBadges(employees){
  for (let i = 0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`);
  }
  return employees;
}



function tailsNeverFails(){
  let tailCount = 0;
  while (Math.random() >= 0.5){
    tailCount ++;
  }
    return `You got ${tailCount} tails in a row!`;
}

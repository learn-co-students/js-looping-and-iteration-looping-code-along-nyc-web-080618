// Code your solutions in this file
const arr = ["Ada", "Brendan", "Ali"]

function printBadges(arr){
  for (var i = 0; i < arr.length; i++){
    console.log(`Welcome ${arr[i]}! You are employee #${i + 1}.`);
  }
  return arr
}


function maybeTrue(){
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let i = 0;
  while (maybeTrue()) {
    i += 1;
  }
  return `You got ${i} tails in a row!`
}

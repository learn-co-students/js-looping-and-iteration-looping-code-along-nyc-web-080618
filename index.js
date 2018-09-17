// Code your solutions in this file
function printBadges(array){
  for(let i = 0; i<array.length; i++){
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`)
  }
  return array

}


function tailsNeverFails(){
  let x = true
  let count = 0
  while (x === true){
    if (Math.random() >=0.50){
      x = true
      count++

    }else{
      x = false
    }
  }
  return `You got ${count} tails in a row!`

}

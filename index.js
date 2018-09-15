function printBadges(array){
  for (var i = 0; i < array.length; i++){
    var year = i + 1
    console.log("Welcome " + array[i] + "! You are employee #" + year + ".")
  }
  return array
}

function tailsNeverFails () {
  let tails = 0;
  while (Math.random() >= 0.5) {
    tails++;
  }
  return "You got ${tails} tails in a row!";
}

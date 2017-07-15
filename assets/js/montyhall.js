var door1 = document.getElementById('js--door1');
var door2 = document.getElementById('js--door2');
var door3 = document.getElementById('js--door3');
var previous;

var doors = [door1, door2, door3];
var random = 0;

var doorPrizes = ["https://www.youtube.com/watch?v=DRMBxnxWiNQ", "../img/congratulation.jpg", "https://www.youtube.com/watch?v=DRMBxnxWiNQ"];

for(var i = 0; i < doorPrizes.length; i++) {
  random = Math.floor(Math.random()*2);

  getPrize(doors[i]);
}

function getPrize(door) {
  if(previous == doorPrizes[1] && doorPrizes[random] == previous) {
    door.href = doorPrizes[0];
  }
  else {
    door.href = doorPrizes[random];
  }
  previous = doorPrizes[random];
}

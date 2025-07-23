//all the heights i must sort
let barHeights = [20, 30, 10, 70, 50, 40, 200, 300, 210, 220, 230, 240, 250, 90, 80, 100, 60, 190, 180, 170, 160, 260, 270, 280, 290, 150, 140, 130, 120, 110];

function setup() {
  createCanvas(400, 400);

  //TODO Run your sorting algorithm here!
  for (let x = 0; x < barHeights.length; x++){
    for (let y = 1; y < barHeights.length - x; y++){
      if(barHeights[y] > barHeights[y-1]){
        switchThem(y, y-1)
      }
    }
  }
}

function switchThem(first, next){
  let temp = barHeights[first];
  barHeights[first] = barHeights[next]
  barHeights[next] = temp
}

function draw() {
  background(0);

  //draw the bars of the array
  for (let i = 0; i < barHeights.length; i++) {
    console.log(barHeights[i]);
    fill(67, 57, 121);
    rect(50 + i * 10, 350 - barHeights[i], 10, barHeights[i]);
  }
}

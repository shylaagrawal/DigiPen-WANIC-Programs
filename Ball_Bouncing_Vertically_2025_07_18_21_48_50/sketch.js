//-------------------------------
//Shyla Agrawal
//6/29/24
//ball bouncing with a counter keeping track
//-------------------------------

let img;
let goingDown = true;
let y = 200;
let start = false;
let bounceNum = 0;
const moveRate = 0.5

function preload() {
  img = loadImage('assets/ballfr.png');  
}

function setup() {
  createCanvas(400, 400);
}

function mousePressed() {
  start = true;
}

function draw() {
  if(start){
    background(0)
    imageMode(CENTER)
    image(img, 200, y, 60, 60)
    fill(0, 208, 255)
    text("Bounces: " + bounceNum, 200, 155)

    if(goingDown){
      y += moveRate * deltaTime;
      if(y > 385){
        goingDown = false;
        bounceNum += 1
      }
    }
  
    else{
      y -= moveRate * deltaTime;
      if(y < 200){
        goingDown = true;
      }
    }  
  }
  
  else{
    background(0);
    imageMode(CENTER)
    image(img, 200, 230, 100, 100)
    fill(225)
    textSize(30)
    textAlign(CENTER)
    text("click screen to start", 200, 175)
  }
}
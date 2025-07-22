//-------------------------------
//Shyla Agrawal
//6/29/24
//ball bouncing off of all walls
//-------------------------------

let img;
let goingDown = true;
let goingRight = true;
let x = 200;
let y = 200;
let start = false;
let moveRateX = 0
let moveRateY = 0


function preload() {
  img = loadImage('assets/ballfr.png');  
}

function setup() {
  createCanvas(400, 400);
  moveRateX = random(2)
  moveRateY = random(2)
}

function mousePressed() {
  start = true;
}

function draw() {
  if(start){
    background(0)
    imageMode(CENTER)
    image(img, x, y, 60, 60)

    if(goingDown){
      y += moveRateY * deltaTime;
      if(y > 385){
        goingDown = false;
      }
    }
  
    else{
      y -= moveRateY * deltaTime;
      if(y < 15){
        goingDown = true;
      }
    }  
    
    if(goingRight){
      x += moveRateX * deltaTime;
      if(x > 385){
        goingRight = false;
      }
    }
  
    else{
      x -= moveRateX * deltaTime;
      if(x < 15){
        goingRight = true;
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
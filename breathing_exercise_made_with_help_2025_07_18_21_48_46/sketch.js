// Shyla Agrawal
// 6/28/24
// Breathing exercise

//global variables
let diameter = 50;
let shrinking = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  let growthRate = 0.075
  background(220);
  //set color to red
  fill(200, 50, 50);
  circle(200, 200, diameter)
  
  
  //check if we are shrinking or growing
  if ( shrinking ) {
    diameter -= growthRate * deltaTime;
    if(diameter < 50)
      shrinking = false;
  }
  
  else{
    diameter += growthRate * deltaTime;
    if(diameter > 375){
      shrinking = true;
    }
  }
  
}
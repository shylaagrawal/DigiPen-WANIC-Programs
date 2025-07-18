//------------------------------------
// Shyla Agrawal
// 6/28/24
// This program will tell you your fortune
//------------------------------------

//global variables
let randNum = 0;
let clicked = false;

function setup() {
  createCanvas(400, 400);
}

//randomizing what the fortune will be when mouse is clicked
function mousePressed() {
  clicked = true;
  randNum = Math.floor(random(5))
}

//after the click
function draw() {
  if(clicked){
    //setting background color
    background(0);

    //slip of paper design
    fill(225);
    stroke(16, 97, 40);
    strokeWeight(5);
    rect(70, 57.5, 260, 60)
  
     //cookie design
    fill(255, 190, 38);
    stroke(0);
    strokeWeight(1);
    circle(200, 250, 175)
    fill(0);
    triangle(200, 265, 100, 150, 300, 150);
  
    //text on paper design
    fill(225);
    stroke(0);
    textSize(20)
    strokeWeight(3);
    textAlign(CENTER);
  
    //system for which fortune is printed based on random number
    if(randNum == 0) {
      text("Look behind you..", 200, 95);
    }
    else if(randNum == 1) {
      text("Next year you'll be an", 200, 85);
      text("academic weapon trust", 200, 105);
    }
    else if(randNum == 2) {
      text("All your y/n wattpad", 200, 85);
      text("dreams will come true", 200, 105);
    }
    else if(randNum == 3) {
      text("Lol you're probably", 200, 85);
      text("going to die", 200, 105);
    }
    else if(randNum == 4) {
      text("Fortune? What fortune?", 200, 85);
      text("This is just a cookie", 200, 105);
    }
  }
  
  else{
    background(0);
  }
}
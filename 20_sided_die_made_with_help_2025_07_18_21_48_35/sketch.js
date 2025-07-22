//------------------------------------
// Shyla Agrawal
// 6/28/24
// rolling a d20 HUZZAH
//------------------------------------

let randNum = 20;
let rolled = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(225);
  circle(200, 187, 75);
  
  
  fill(225);
  textAlign(CENTER);
  textSize(32);
  stroke(16, 97, 40);
  strokeWeight(5);
  text(randNum, 200, 200);
  if(rolled){
    if(randNum == 20 && rolled) {
      text("YAYY YOU GOT A 20", 200, 300)
    }
    else if(randNum >= 15) {
      text("dang thats a high number", 200, 300)
    }
    else if(randNum >= 10){
      text("pretty good roll :D", 200, 300)
    }
    else if(randNum >= 5){
      text("not bad but not good", 200, 300)
    }
    else if(randNum > 1){
      text("you can do better", 200, 300)
    }
    else{
      text("oof", 200, 300)
    }
  }
}

function mousePressed() {
  console.log("press detected :D");
  randNum = Math.floor(random(20)) + 1;
  rolled = true;
  
}
//---------------------------------------------------------------
// Shyla Agrawal
// 7/8/24
// racing game
//---------------------------------------------------------------

let bkg;
let npcFast;
let npcSlow;
const fastRate = 2
const slowRate = 0.75
let moveRate = 0.2
let x1 = 15;
let x2 = 15;
let x3 = 15;
let won;
let lost;


function preload() {
  bkg = loadImage('assets/racebkg.png');
  npcFast = loadImage('assets/donutcar.png');
  npcSlow = loadImage('assets/cookiecar.png');
  carPlayer = loadImage('assets/wafflecar.png');
}

function setup() {
  createCanvas(400, 400);
}

function mousePressed(){
  moveRate += 0.25
}

function draw() {
  background(220);
  imageMode(CENTER);
  image(bkg, 200, 200, 400, 400);
  image(npcFast, x1, 170, 50, 50);
  image(npcSlow, x2, 220, 60, 60);
  image(carPlayer, x3, 273, 50, 50);
  
  x1 += fastRate
  x2 += slowRate
  x3 += moveRate
  
  if (!lost) {
    if(x3 > 390){
      clear()
      background(0)
      fill(0);
      textAlign(CENTER);
      textSize(50);
      strokeWeight(3)
      stroke(0, 225, 0);
      text("you won!", 200, 200);
      won = true;
    }
  }
  
  if (!won) {
    if(x1 > 390 || x2 > 390){
      clear()
      background(0)
      fill(0);
      textAlign(CENTER);
      textSize(50);
      strokeWeight(3)
      stroke(225, 0, 0);
      text("you lost!", 200, 200);
      lost = true;
    }
  }
  
}
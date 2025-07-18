//----------------------------------------------------
// Shyla Agrawal
// 6-29-24
// geese raining from the sky
//----------------------------------------------------

let img;
let img2;
let y = 10;
let y2 = 10;
let y3 = 10;
let y4 = 10;
let y5 = 10;
const moveRate = 4
let firstTime;
let secondTime;
let thirdTime;
let fourthTime;

function setup() {
  createCanvas(400, 400);
  firstTime = true;
  secondTime = true;
  thirdTime = true;
  fourthTime = true;  
}

function preload() {
  img = loadImage('assets/goosefr.png'); 
}

function draw() {
  background(0);
  imageMode(CENTER)
  y += moveRate
  image(img, 50, y, 70, 70)
  
  if(firstTime) {
    if(y >= 150){
      firstTime = false;
    }     
  }
  
  if(secondTime){
    if(y2 >= 180){
      secondTime = false;
    } 
  }  
  
  if(thirdTime){
    if(y3 >= 200){
      thirdTime = false;
    } 
  }  
  
  if(fourthTime){
    if(y4 >= 230){
      fourthTime = false;
    } 
  }
  
  if(!firstTime) {
    image(img, 110, y2, 70, 70)
    y2 += moveRate
  }
  
  if(!secondTime){
    image(img, 200, y3, 70, 70)
    y3 += moveRate
  }
  
  if(!thirdTime) {
    image(img, 290, y2, 70, 70)
    y4 += moveRate
  }
  
  if(!fourthTime){
    image(img, 350, y3, 70, 70)
    y5 += moveRate
  }
  
  if(y > 390){
    y = 10
  }
  
  if(y2 > 390){
    y2 = 10
  }
  
  if(y3 > 390){
    y3 = 10
  }  
  
  if(y4 > 390){
    y4 = 10
  } 
  
  if(y5 > 390){
    y5 = 10
  }
}
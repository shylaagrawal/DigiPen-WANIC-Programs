//---------------------------------------------------------------
// Shyla Agrawal
// 7/6/24
// calculating the number pie
//---------------------------------------------------------------

//global variables
let i = 0;
let total = 0;
let font;

function preload() {
  //preloading in my pie pic and the fpnt
  font = loadFont('assets/PlaywriteDEGrund-VariableFont_wght.ttf');
  pie = loadImage('assets/pie.png');
}

function setup() {
  //creating canvas with extra variable for 3d
  createCanvas(600, 600, WEBGL);
  
  //calculating pie
  let numerator = 1
  for(let i = 1; i <= 10000; i += 2){
    total += numerator/i
    numerator = numerator * -1
    }  
  total *= 4
}

function draw() {
  //refreshing background every frame
  background(0);

  // Rotating the image and text
  rotateY(i += 0.01);
  textFont(font);
  textSize(50)
  text(total, 0 ,0);
  image(pie, 0, 0, 200, 200)
}
//Name: shyla
//Date: 7/15/2024
//Desc: Caesar Cipher

//global variables
let inp; 
let out = ''
//setting up canvas and input box
function setup() {
  createCanvas(400, 400);
  inp = createInput()
  inp.position(120, 150)
  inp.input(cipher)
}

function cipher(){
  var og = inp.value().toLowerCase().replace(/[^a-z]/g, '');
  out  = ''
  for (let num = 0; num < og.length; num++){
    let singleLetter = og.charCodeAt(num) + 3
    if(singleLetter > 122){
      singleLetter -= 26
    }
    out += String.fromCharCode(singleLetter)
  }
}

function draw() {
  background(220);
  textAlign(CENTER)
  fill(0, 0, 225)
  text(out, 200,200)
}
//-----------------------------------------------------------
// Shyla Agrawal
// 7/8/24
// fibonacchi sequence 
//----------------------------------------------------------- 

//global variables
let n;
let inp; 
let fibNum = 0;
let sequence;

function setup() {
  createCanvas(400, 400);
  //making the input box
  inp = createInput("0", "number")
  inp.position(115, 200)
  inp.input(update)
}

function update(){
  //changing the input to a useable variable
  let n = inp.value()
  //creating an array
  sequence = [0, 1]
  
  //loop for calculating the number every time the n updates
  for(let k = 2; k <= n; k++){
    sequence.push(sequence[k-1] + sequence[k-2])
    fibNum = sequence[k]
  }
}

function draw() {
  //how the screen looks
  background(0)
  textAlign(CENTER)
  fill(50, 225, 50)
  text("the Fibonacci number: " + fibNum, 200, 150)
  fill(225)
  text("your n value:", 200, 190)
}
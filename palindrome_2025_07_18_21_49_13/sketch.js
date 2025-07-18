//---------------------------------------------------------------
//Shyla
//7/15/2024
//Palidrome Checker
//---------------------------------------------------------------

//declaring global variables
let inp;

//creating an input
function setup() {
  createCanvas(400, 400);
  background(0, 0, 0)
  inp = createInput()
  inp.position(120, 200)
  inp.changed(checker)
}

//no special characters
function filterLettersAndNumbers(inputString){
  return inputString.replace(/[^a-zA-Z0-9]/g, '')
}

//reverses word and checks if palidrome or not
function checker(){
  var word = filterLettersAndNumbers(inp.value().toLowerCase())
  var reversedword = word.split("").reverse().join("")
  
  //if a palindrome
  if (word == reversedword){
    background(0, 255, 0)
  }
  
  //if not a palidrome
  else if (word != reversedword){
    background(255, 0 ,0)
  }

}
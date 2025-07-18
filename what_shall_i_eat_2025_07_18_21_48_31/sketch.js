//---------------------------------------------------------------
// Shyla Agrawal 
// 6/28/24
// This program helps you decide what to eat
//---------------------------------------------------------------

function setup() {

  //Dessert?
  var dessert = true;
  
  //Frozen?
  var frozen = false;
  //Icing?
  var icing = true;
  
  //Cold?
  var cold = true;
  //Healthy?
  var healthy = true;

  
  if(dessert)
    {
      if(frozen)
        {
          console.log("Ice Cream duh");
        }
      else if(icing)
        {
          console.log("Cake!");
        }
      else
        {
          console.log("PiePiePie");
        }
    }
  else 
    {
      if(cold)
        {
          console.log("Salad yumyum");
        }
      else if(healthy)
        {
          console.log("Pasta :D");
        }
      else
        {
          console.log("Borgor");
        }
    }
  
  
}
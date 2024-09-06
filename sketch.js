function setup() {
    createCanvas(400, 400);
  background("blue");
  }
  
  function draw() {
    
    stroke("white")
    fill("purple");
    
   // console.log(mouseIsPressed);
    
    if(mouseIsPressed){
   rect( mouseX, mouseY, 20, 35);
    }
  }
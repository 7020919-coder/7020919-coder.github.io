// Mouse, text and scope
// Dara Bejide
// Sept 15, 2026

//Global Variables
let x = 100; let y = 100;
let c = "green"; 

async function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  mouseReport();
  updateSquare();
}

function mouseReport(){
  textSize(40);
  //mouse-related system variables (managed)
  let mouseInfo = mouseIsPressed + " "
                    + mouseButton.left + " "
                    + mouseButton.center + " "
                    + mouseButton.right;
  text(mouseInfo, mouseX, mouseY);
}

function updateSquare(){
  //movement code here
  //keyCode is LAST PRESSED CODE.
  // if(keyCode===40 && keyIsPressed){
  //   y+=2;
  // }
  //use keyIsDown() to handle multiple key presses
  if(keyIsDown(LEFT_ARROW)){
    x-= 5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    x+= 5;
  }
  if(keyIsDown(UP_ARROW)){
    y-=5;
  }
  if(keyIsDown(DOWN_ARROW)){
    y+=5;
  }
  
  
  
  //draw our character (a square) on the screen.
  fill(c);
  square(x,y,50);
}

function keyPressed() {
  //this function calls automatically
  // - for single press captures
  print(key + " " + keyCode);

  if(key==="a"){
    c = "red";
  }
  else if(keyCode===32){ //space 
    c = "yellow";
  }

  //for interest sake 
}
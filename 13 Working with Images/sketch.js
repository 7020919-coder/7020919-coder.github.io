// 13 Working with Images
// Dara Bejide
// Oct 30th, 2026.
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let lionL, lionR;
let dir = "left";

let pinImages = [];
let pinIndex = 0;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  //lion images
  lionL = await loadImage("assets/lion-left.png");
  lionR = await loadImage("assets/lion-right.png");

  //pinwheel images
  for(let i = 0; i < 9; i++){
    pinImages.push(await loadImage("assets/pin-0" + i + ".png"));

  }

}

function draw() {
  background(220);
  drawLion();
  drawpin();
}

function drawpin(){
  image(pinImages[pinIndex], width/2, height*0.75);
  if(frameCount % 3 === 0){
    pinIndex++;
    if(pinIndex > 8) pinIndex = 0;
  }
 
}

function drawLion() {
  //updated direction
  if(movedX > 0){
    dir = "right";
  }
  else if(movedX < 0){
    dir = "left";
  }


  //Lion COde
  switch (dir) {
  case "left": image(lionL, mouseX, mouseY, lionL.width / 2, lionL.height / 2);
    break;

  case "right": image(lionR, mouseX, mouseY, lionR.width / 2, lionR.height / 2);
    break;
  }
}


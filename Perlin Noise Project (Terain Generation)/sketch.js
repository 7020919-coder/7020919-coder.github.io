// Perlin Noise Project (Terrain Generation)
// Dara Bejide
// Oct 1, 2026.
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Global Variables
let w = 5;
let h;
let xTime = 5; 
let xSpeed = 0.01;
let xStart = xTime;
let flagX;
let flagY;
let SUM_HEIGHT;
let NUM_HEIGHT;
let mean;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //basic detup
  background(220);
  fill(0);

  //pan effect
  xTime = xStart;
  xStart += xSpeed;

  // Generates environment, and avg height metre
  generateTerrain();
  drawFlag();
  avgHeight();
}

function keyPressed(){
  if(keyCode === 37){ //Left Arrow reduce width
    if(w>=2){
      w -= 1;
    }
  }
  else if(keyCode === 39){ //Right Arrow increase width
    if(w<20){
      w += 1;
    }
  }
}

function generateTerrain(){
  let tallest = -1; //resets each frame's values
  SUM_HEIGHT = 0;
  NUM_HEIGHT = 0;


  for(let x = 0; x < width; x+= w){  //draws terrain to fill screen
    h = noise(xTime); 
    h = map(h, 0, 1, 0, height);
    xTime += xSpeed;
    rect(x, height, w, h*-1);

    if(tallest < h){ //Constantly updates highest point.
      tallest = h;
      flagY = height - (tallest+40);
      flagX = x;
    }

    SUM_HEIGHT +=  h; //updates each frame's values
    NUM_HEIGHT += 1;
    
  }

}

function drawFlag(){ //draws flag
  rect(flagX, flagY, 2, 40);
  fill("red");
  triangle(flagX+2, flagY, flagX+2, flagY+20, flagX+25, flagY+10);
  fill("black");
}

function avgHeight(){ //calculates avg height and draws measuring line
  noStroke();
  mean = SUM_HEIGHT/NUM_HEIGHT;
  fill("red");
  rect(0, height - mean, width, 5);
  print (SUM_HEIGHT + " / " + NUM_HEIGHT + " = "+ mean); //debug stuff
}


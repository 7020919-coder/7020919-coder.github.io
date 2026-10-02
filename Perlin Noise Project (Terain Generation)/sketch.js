// Perlin Noise Project (Terrain Generation)
// Dara Bejide
// Oct 1, 2026.
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Global Variables
let w = 10;
let h;
let xTime = 5; 
let xSpeed = 0.01;
let xStart = xTime;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  // noLoop();
}

function draw() {
  background(220);
  fill(0);
  xTime = xStart;
  xStart += xSpeed;
  generateTerrain();
}

function keyPressed(){
  if(keyCode === 37){
    if(w>4){
      w -= 2;
    }
  }
  else if(keyCode === 39){
    if(w<20){
      w += 2;
    }
  }
}

function generateTerrain(){
//  w = 2;
  for(let x = 0; x < width; x+= w){
    h = noise(xTime); //0-1
    h = map(h, 0, 1, 0, width);
    xTime += xSpeed;
    rect(x, height, w, h*-1);
   
  }
}

// function drawFlag(){

// }

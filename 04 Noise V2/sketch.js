// Noise V2
// Dara Bejide
// Oct 1, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global variables
let xTime = 5; let xSpeed = 0.02;
let xStart = xTime;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
}

function draw() {
  background(245);
  xTime = xStart;
  xStart += xSpeed;
  tower();
}


function tower(){
  //create a tower of circles of different y positions.
  //X position will be randomly selected/

  //Perlin noise code
  for(let y = 0; y < height; y+= 20){
    let x = noise(xTime); //0-1
    x = map(x, 0, 1, 0, width);
    xTime += xSpeed;
    
    circle(x, y, 20);
  }
}
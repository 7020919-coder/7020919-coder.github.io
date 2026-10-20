// Traffic Simulator (Cars Cars Cars!)
// Dara Bejide
// Sept 20th, 2026.
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let vehicleArray = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawRoad();
}


function drawRoad(){
  let roadX = 0;
  let roadY = height/2;
  let roadW = width*2;
  let roadH = height*0.5;


  //main road
  fill(0);
  rectMode(CENTER);
  rect(roadX, roadY, roadW, roadH);

  //lines
  fill(255);
  for(let lineX = 25; lineX < width; lineX += 100){
    rect(lineX, roadY, 50, 5);
  }
  fill(0);
}

class vehicle{
  //1. Constructor
  constructor(){
    this.type = random(0,1);
    this.c = color(random(255), random(255), random(255));
    this.x = 0;
    this.y = 23;
    this.direction = random(0,1);
    this.xSpeed;
  }

  //2. Class Functions
  display(){
    if(this.type < 1){
      rect(15, random(height*0.25, height*0.5), 30, 10);
    }
  }

  // move(){

  // }

  // speedUp(){

  // }

  // speedDown(){

  // }

  // changeColor(){

  // }

  // action(){

  // }
}


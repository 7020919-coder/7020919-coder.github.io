// Traffic Simulator (Cars Cars Cars!)
// Dara Bejide
// Sept 20th, 2026.
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let vehicleArray = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);
  // test = new vehicle(0, 0, 3);
}

function draw() {
  background(220);
  drawRoad();
  for(n of vehicleArray){
    n.action();
  }
}


function drawRoad() {
  let roadX = 0;
  let roadY = height / 2;
  let roadW = width * 2;
  let roadH = height * 0.5;

  //main road
  fill(0);
  rectMode(CENTER);
  rect(roadX, roadY, roadW, roadH);

  //lines
  fill(255, 255, 0);
  for (let lineX = 25; lineX < width; lineX += 50) {
    rect(lineX, roadY, 25, 5);
  }
  fill(0);
}

function mousePressed(){
  if(mouseButton.left){
    if(keyIsDown("shift")){
      vehicleArray.push(new vehicle(0, 0, 10));
    }
    else{
      vehicleArray.push(new vehicle(0, 1, 10));
    }
  }
}

class vehicle {
  //1. Constructor
  constructor(type, direction, xSpeed) {
    this.type = type;
    this.c = color(random(255), random(255), random(255));
    this.direction = direction;
    if (direction === 0) {
      this.x = width - 15;
      this.y = random(8 + height * 0.25, -8 + height * 0.5);
      this.xSpeed = -xSpeed;
    }
    else if (direction === 1) {
      this.x = 17.5;
      this.y = random(8 + height * 0.5, -8 +height * 0.75);
      this.xSpeed = xSpeed;
    }
  }

  //2. Class Functions
  display() {
    fill(this.c);
    if (this.type === 0) {
      rect(this.x, this.y, 35, 15);
      fill(255);
      rect(this.x - 10, this.y + 10, 10, 4);
      rect(this.x + 10, this.y + 10, 10, 4);
      rect(this.x - 10, this.y - 10, 10, 4);
      rect(this.x + 10, this.y - 10, 10, 4);
      // fill(this.c);
    }
    else if (this.type === 1) {
      rect(this.x, this.y, 40, 30);
      rect(this.x+20, this.y, 10, 30);
    }
  }

  move(){
    this.x += this.xSpeed;
    if(this.x > width){
      this.x = 0;
    }
    else if(this.x < 0){
      this.x = width;
    }
  }

  speedUp(){
    if(this.xSpeed < 1){
      this.xSpeed -= 5;
    }
    else{
      this.xSpeed += 5;
    }
  }

  speedDown(){
    if(this.xSpeed < 1){
      this.xSpeed += 5;
    }
    else{
      this.xSpeed -= 5;
    }
  }

  changeColor(){
    let chance = random(100);
    if(chance < 1){
      this.c = color(random(255), random(255), random(255));
    }
  }

  action(){
    this.move();
    this.changeColor();
    this.display();
  }
}


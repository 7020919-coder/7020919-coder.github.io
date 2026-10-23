// Traffic Simulator (Cars Cars Cars!)
// Dara Bejide
// Sept 20th, 2026.
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let vehicleArray = [];
let typeChoices = [0, 1];
let chance;


async function setup() {
  createCanvas(windowWidth, windowHeight);
  // test = new vehicle(0, 0, 3);
}

function draw() {
  background(220);
  drawRoad();
  for (n of vehicleArray) {
    n.action();
  }
  // frameRate(10);
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

function mousePressed() {
  // if(mouseButton.left){
  if (keyIsDown(SHIFT)) {
    vehicleArray.push(new vehicle(random(typeChoices), 0, 6));
  }
  else {
    vehicleArray.push(new vehicle(random(typeChoices), 1, 6));
  }
  // }
}

function keyPressed() {
  if (keyCode === 32) {
    freeze = true;
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
      this.y = random(10 + height * 0.25, -20 + height * 0.5);
      this.xSpeed = -xSpeed;
    }
    else if (direction === 1) {
      this.x = 17.5;
      this.y = random(10 + height * 0.5, -20 + height * 0.75);
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
      if (this.direction === 0) {
        rect(this.x - 30, this.y, 10, 30);
      }
      else {
        rect(this.x + 30, this.y, 10, 30);
      }
    }
  }

  move() {
    this.x += this.xSpeed;
    if (this.x > width) {
      this.x = 0;
    }
    else if (this.x < 0) {
      this.x = width;
    }
  }

  speedUp() {
    if (this.direction === 0 && this.xSpeed > -15) {
      this.xSpeed -= 2;
    }
    else if (this.direction === 1 && this.xSpeed < 15) {
      this.xSpeed += 2;
    }
  }

  speedDown() {
    if (this.direction === 0 && this.xSpeed < 0) {
      this.xSpeed += 1;
    }
    else if (this.direction === 1 && this.xSpeed > 0) {
      this.xSpeed -= 1;
    }
  }

  changeColor() {
    this.c = color(random(255), random(255), random(255));
  }

  action() {
    if (!freeze) {
      this.move();
      chance = random(100);
      if (chance < 1) {
        this.speedUp();
      }
      chance = random(100);
      if (chance < 1) {
        this.speedDown();
      }
      chance = random(100);
      if (chance < 1) {
        this.changeColor();
      }
    }
    this.display();
  }
}

class TrafficLight {
  display() {
    if (freeze) {
      fill("red");
    }
    else {
      fill("green");
    }
    circle(50, 50, 100);
  }
}

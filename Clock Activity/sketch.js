// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


async function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

let spin = 0;

function draw() {
  background(220);
  push();
  translate(200, 200);
  circle(0, 0, 250);
  pop();

  for(let i = 0; i < 60; i++){
    push();
    translate(200, 200);
    rotate(spin);
    rect(0,-120,5, 15);
    pop();
    spin += 10;
  }
  
}



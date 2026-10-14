// Simple Objects and Arrays
// Dara Bejide
// Oct 7, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ball;
let ballArray = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);
  // ball = { //object notation. Inside the brackets set up several property: value pairs
  //   x: 300, 
  //   y: 400, 
  //   size: 20,
  //   c: color(random(255), random(255), random(255)),
  //   xSpeed: 5, 
  //   ySpeed: 4};
}

function generateBall(x,y){
  //create and RETUR a ball object
  //initial position x,y
  let b = {
    x: x,
    y: y,
    size: 20,
    c: color(random(255), random(255), random(255)),
    xSpeed: random(-6, 6),
    ySpeed: random(-6,6),
  };
  return b;
}

function initObjects(n){
  //create n ball objects in our array
  for(let i = 0; i < n; i++){
    ballArray.push(generateBall(mouseX, mouseY));
  }
}

function keyPressed(){
  initObjects(10);
}


function moveBall(b){
  //b -> Ball type object
  // update position and draw the ball

  //update
  b.x = b.x + b.xSpeed;
  b.y += b.ySpeed;

  //walls
  if(b.x < 0 || b.x > width){
    b.xSpeed *= -1;
  }
  if(b.y < 0 || b.y > height){
    b.ySpeed *= -1;
  }

  //draw
  fill(b.c);
  circle(b.x, b.y, b.size);
}

function draw() {
  background(220);
  //traverse (loop through) an array.
  for(let i = 0; i < ballArray.length; i++){
    let b = ballArray[i];
    moveBall(b);
  }
  
  //add via mouse
  if(mouseIsPressed){
    ballArray.push(generateBall(mouseX, mouseY));
  }
}

// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//Global Variables / Definitions
let minSize = 5; let maxSize = 200;
let x1; let y1; // declare first
let x2; let y2;
//for noise
let noiseTime = 10; //current coordinate on graph
let noiseSpeed = 0.01; // rate at which we move down the graph

async function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = width * 0.3; //initialize second
  y1 = height / 2;
  x2 = width * 0.7;
  y2 = height / 2;
  let x3 = 400; let y3 = 200;
}

function draw() {
  background(220);
  // randomSeed(5); //use random seed to stabilize random()
  randomCircle();
  noiseCircle();
}

function moveCircle() {
  //CHALLENGE: using perlin noise(), draw a 40px circle
}

function noiseCircle() {
  //another circle, this time the diametre is generated using noise(), smoothly.
  fill(255, 50, 150);
  let d = noise(noiseTime);
  d = map(d, 0, 1, minSize, maxSize);
  noiseTime += noiseSpeed;
  circle(x2, y2, d);
}

function randomCircle() {
  //draw a fixed position circe with randomly changing diametre
  fill(50, 150, 250);
  let d = random(minSize, maxSize);
  circle(x1, y1, d);
}
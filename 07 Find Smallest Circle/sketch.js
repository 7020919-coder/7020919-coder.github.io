// Find the smallest circle
// Dara Bejide
// Oct 5th, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const NUM_CIRCLES = 100;
let seed;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = random(100);
}

function draw() {
  randomSeed(seed);
  background(220);
  drawCircles();
}

function drawCircles(){
  let smallDIametre = Infinity;
  let smallX = -1;
  let smallY = -1;

  noFill();

  for(let i = 0; i <  NUM_CIRCLES; i++){
    let x = random(0, width);
    let y = random(0, height);
    let d = random(20, 60);
    circle(x, y, d);

    if(d < smallDIametre){
      smallDIametre = d;
      smallX = x;
      smallY = y;
    }
  }
  fill("orange");
  circle(smallX, smallY, smallDIametre);
}
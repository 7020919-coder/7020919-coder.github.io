// Interactive Scene Assignment
// Dara Bejide
// Sept 21, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//
var groundX = 1;
var groundY = 420;
var groundWidth = 1000;
var groundHeight = 100;

async function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(225, 148, 72);
  
  //Floor
  let g = color(95, 70, 44);
  fill (g);
  noStroke();
  rect(groundX, groundY, groundWidth, groundHeight);

  // sun/moon
  let s = color(236, 43, 43);
  fill(s);
  noStroke();
  
}

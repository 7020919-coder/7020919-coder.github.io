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

var circleX = 70;
var circleY = 70;
var circleR = 100;

var houseX = 500;
var houseY = 240;
var houseWidth = 230;
var houseHeight = 200;

var tx1 = 500;
var ty1 = 240;
var tx2 = 610;
var ty2 = 100;
var tx3 = 730;
var ty3 = 240;

var bushX = 50;
var bushY = 470;
var bushR = 200;

function bushes(){
  circle(bushX, bushY, bushR);
  circle(bushX+150, bushY, bushR);
  circle(bushX+300, bushY, bushR);
  circle(bushX+450, bushY, bushR);
  circle(bushX+600, bushY, bushR);
  circle(bushX+750, bushY, bushR);
}

async function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(141, 196, 252);
  
  //Floor
  let g = color(95, 70, 44);
  fill (g);
  noStroke();
  rect(groundX, groundY, groundWidth, groundHeight);

  // sun/moon
  let s = color(250, 241, 161);
  fill(s);
  noStroke();
  circle(circleX, circleY, circleR);
  
  // House
  let h = color(247, 147, 247);
  fill(h);
  noStroke();
  rect(houseX, houseY, houseWidth, houseHeight);

  let r = color(75, 60, 75);
  fill(r);
  triangle(tx1, ty1, tx2, ty2, tx3, ty3);
  rect(houseX+75, houseY+50, houseWidth/3, houseHeight-20)

  //bushes
  let b = color(21, 131, 25);
  fill(b);
  bushes();
  
}

function ghost(){
  let g = color(255,255,255);
  fill(g);
  noStroke();
  circle(2,2,60);
}
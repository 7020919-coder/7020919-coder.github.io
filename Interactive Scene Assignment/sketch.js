// Interactive Scene Assignment
// Dara Bejide
// Sept 21, 2026
//
// Extra for Experts:
// [ALT][SHIFT][F] - Auto format

//Global variables
let dayNight = 0;

// let groundX = 0;
// let groundY = height-100;
// let groundWidth = width;
// let groundHeight = 100;

let circleX;
let circleY;
let circleR;

let houseX;
let houseY;
let houseWidth;
let houseHeight;

let tx1;
let ty1;
let tx2;
let ty2;
let tx3;
let ty3;

let NUM_CIRCLES;
let bushY;
let bushR;

let doorWidth;


async function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //bushes
  NUM_CIRCLES = width / 100;
  bushY = height - height/20;
  bushR = width/5;

  //house
  houseX = width - width/2.5;
  houseY = height - height/3;
  houseWidth = width/4;
  houseHeight = width/4;
  doorWidth = houseWidth/2;

  //Roof
  tx1 = houseX;
  ty1 = houseY;
  tx3 = houseX + houseWidth;
  ty3 = houseY;
  tx2 = (tx1+tx3)/2;
  ty2 = height*0.5;

  //sun/moon
  circleX = width/12;
  circleY = height/12;
  circleR = width/10;


}

function bushes() {
  let bushX = 0;
  for (let i = 0; i < width; i++) {
    circle(bushX, bushY, bushR);
    bushX += bushR*0.75;
  }
}

function draw() {
  if (dayNight === 0){
    background(141, 196, 252);
  }
  else if (dayNight === 1){
    background(235, 165, 86);
  }
  else if (dayNight === 2){
    background(235, 165, 86);
  }

  ghost();

  //Floor
  let g = color(95, 70, 44);
  fill(g);
  noStroke();
  rect(0, height - height/12, width, height/10);

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
  rect(tx2-(doorWidth/3.2), houseY + 50, houseWidth / 3, houseHeight - 20)

  //bushes
  let b = color(21, 131, 25);
  fill(b);
  bushes();

  fill(g)
  text('Dara', width-40, height-20);
  
}

function ghost() {
  let g = color(255, 255, 255);
  let ghostR = 80;
  fill(g);
  noStroke();
  circle(mouseX, mouseY, ghostR);
  rect(mouseX-(ghostR/2), mouseY, ghostR, ghostR/2);
  
  rect(mouseX-(ghostR/2), mouseY, 5, ghostR);
  rect(mouseX+(ghostR/2)-5, mouseY, 5, ghostR);

  let e = color(0,0,0);
  fill(e);
  circle(mouseX-(ghostR/4), mouseY, 10);
  circle(mouseX+(ghostR/4), mouseY, 10);
  rect(mouseX-(ghostR/4), mouseY+(ghostR/4), ghostR/2, 5);
}

// function colorPatern() {
//   switch (dayNight) {
//     case 0:
//       background(141, 196, 252);
//       break;
//     case 1:
//       background();
//       break;
//     case 2:
//       background();
//       break;
//   }
// }
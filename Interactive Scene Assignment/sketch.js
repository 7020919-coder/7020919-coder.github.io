// Interactive Scene Assignment
// Dara Bejide
// Sept 21, 2026
//
// Extra for Experts:
// [ALT][SHIFT][F] - Auto format

//Gloabal variables
let dayNight = 0;

// let groundX = 0;
// let groundY = height-100;
// let groundWidth = width;
// let groundHeight = 100;

let circleX = 70;
let circleY = 70;
let circleR = 100;

let houseX = 500;
let houseY = 240;
let houseWidth = 230;
let houseHeight = 200;

let tx1 = 500;
let ty1 = 240;
let tx2 = 610;
let ty2 = 100;
let tx3 = 730;
let ty3 = 240;

let NUM_CIRCLES;
let bushY;
let bushR = 200;


function bushes() {
  let bushX = 50;
  for (let i = 0; i < NUM_CIRCLES; i++) {
    circle(bushX, bushY, bushR);
    bushX += 150;
  }
}

async function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //bushes
  NUM_CIRCLES = width / 100;
  bushY = height - 50;

  //house
  let houseX = 500;
  let houseY = 240;
  let houseWidth = 230;
  let houseHeight = 200;
}

function draw() {
  background(141, 196, 252);

  //Floor
  let g = color(95, 70, 44);
  fill(g);
  noStroke();
  rect(0, height - 100, width, 100);

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
  rect(houseX + 75, houseY + 50, houseWidth / 3, houseHeight - 20)

  //bushes
  let b = color(21, 131, 25);
  fill(b);
  bushes();

}

function ghost() {
  let g = color(255, 255, 255);
  fill(g);
  noStroke();
  circle(2, 2, 60);
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
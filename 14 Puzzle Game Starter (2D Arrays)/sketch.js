// 2D Arrays (Puzzle Arrays)
// Dara Bejide
// Nov 3rd, 2026

// grid sized 6 x 5
// 0 (black)    255 (white)

// let gridChoices = random([0, 255]);
let flipChoice = 0;
let win = false;

let grid = [
  [0, 255, 0, 255, 0, 255],
  [255, 0, 255, 0, 255, 0],
  [255, 255, 255, 255, 255, 255],
  [0, 0, 0, 0, 0, 0],
  [255, 255, 0, 255, 255, 0],
];

let rows = grid.length;
let columns = grid[0].length;
const tileSize = 60;


async function setup() {
  randomiseStart();
  createCanvas(columns * tileSize, rows * tileSize);
}

function randomiseStart(){
  //runs through grid values and randomly redefines each value 0 or 255
  for (let y = 0; y < rows; y++) {//y: 01234
    for (let x = 0; x < columns; x++) {//x: 012345
      grid[y][x] = random([0,255]);
    }
  }
}

function draw() {
  background(220);    
  renderGrid();
  checkWinner();
}

function getCurrentX() {
  //determine current col position of mouse
  let constrainedX = constrain(mouseX, 0, width - 1);
  return int(constrainedX / tileSize);
}

function getCurrentY() {
  //determine current col position of mouse
  let constrainedY = constrain(mouseY, 0, height - 1);
  return int(constrainedY / tileSize);
}

function flip(x, y) {
  //flip the tile at position (x, y)
  if (grid[y][x] === 255) {
    grid[y][x] = 0;
  }
  else {
    grid[y][x] = 255;
  }
}

function colouredOverlay() {
  if (mouseX < width && mouseY < height) {
    let a = getCurrentX();
    let b = getCurrentY();

    let checkColour = color(153, 255, 153, 80);
    fill(checkColour);
    square(a * tileSize, b * tileSize, tileSize);

    if (flipChoice === 0 && !keyIsDown(SHIFT)) {//cross option
      square((a + 1) * tileSize, b * tileSize, tileSize);
      square((a - 1) * tileSize, b * tileSize, tileSize);
      square(a * tileSize, (b - 1) * tileSize, tileSize);
      square(a * tileSize, (b + 1) * tileSize, tileSize);
    }
    else if (flipChoice === 1 && !keyIsDown(SHIFT)) { //square option
      square(a * tileSize, (b + 1) * tileSize, tileSize);
      square((a + 1) * tileSize, b * tileSize, tileSize);
      square((a + 1) * tileSize, (b + 1) * tileSize, tileSize);
    }
  }
}

function mousePressed() {
  //only do a flip if mouse is on the cavas
  if (mouseX < width && mouseY < height) {
    let x = getCurrentX();
    let y = getCurrentY();

    //ALWAYS:
    flip(x, y);

    //IF THEY EXIST:
    if (!keyIsDown(SHIFT)) {
      
      if (flipChoice === 0) { //Cross Flip (NSEW)
        if (x - 1 >= 0) {
          flip(x - 1, y);
        }
        if (y - 1 >= 0) {
          flip(x, y - 1);
        }
        if (x < 5) {
          flip(x + 1, y);
        }
        if (y < 4) {
          flip(x, y + 1);
        }
      } 

      else if (flipChoice === 1) { //Square Flip
        if (x < 5) {
          flip(x + 1, y);
        }
        if (y < 4) {
          flip(x, y + 1);
        }
        if (x < 5 && y < 4) {
          flip(x + 1, y + 1);
        }
      }
    }
  }


}

function keyPressed(){
  //toggle cross fip and square flip with spacebar
  if(keyCode === 32){ 
    if(flipChoice === 0){
      flipChoice = 1;
    }
    else{
      flipChoice = 0;
    }
  }
}

function checkWinner() {
  //counts black and white tiles to check if the total number of one colour tile is the the
  //same number as the total count of tiles on screen.
  let black = 0;
  let white = 0;
  for (let y = 0; y < rows; y++) {//y: 01234
    for (let x = 0; x < columns; x++) {//x: 012345
      if (grid[y][x] === 0) {
        black += 1;
      }
      else {
        white += 1;
      }
    }
  }
  //checks if win condition is met, then displays "You Win" in green.
  if (black === 30 || white === 30) { 
    win === true;
    textAlign(CENTER, CENTER);
    textSize(60);
    fill("green");
    text("You Win!", width / 2, height / 2);
  }
}

function renderGrid() {
  // interpretes the data stored in 2D array and draws a matrix of squares to reflect it
  for (let y = 0; y < rows; y++) {//y: 01234
    for (let x = 0; x < columns; x++) {//x: 012345
      let fillColour = grid[y][x];
      fill(fillColour);
      square(x * tileSize, y * tileSize, tileSize);
    }
  }
  colouredOverlay();
}

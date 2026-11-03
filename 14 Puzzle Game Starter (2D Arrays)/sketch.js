// 2D Arrays (Puzzle Arrays)
// Dara Bejide
// Nov 3rd, 2026

// grid sized 6 x 5
// 0 (black)    255 (white)

let grid = [
  [0,    255,  0,    255,  0,  255],
  [255,  0,    255,  0,    255,  0],
  [255,  255,  255,  255,  255,  255],
  [0,    0,    0,    0,    0,    0],
  [255,  255,  0,    255,  255,  0],
];

let rows = grid.length;
let columns = grid[0].length;
const tileSize = 60;

async function setup() {
  createCanvas(columns*tileSize, rows*tileSize);
}

function draw() {
  background(220);
  renderGrid();
}

function renderGrid(){
  // interpretes the data stored in 2D array and draws a matrix of squares to reflect it
  for(let y = 0; y < rows; y++){//y: 01234
    for(let x = 0; x < columns; x++){//x: 012345
      let fillColour = grid[y][x];
      fill(fillColour);
      square(x*tileSize, y*tileSize, tileSize);
    }
  }
}

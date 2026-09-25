// Drawing with Single Loops
// Dara Bejide
// Sept 25th, 2026
// 
//houseX = width-(width/5)

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function worm(y,size){
  //use this fnction to draw a line of circles
  // y -> (number) height at which to draw line
  // size -> (number) diametre of each circle
  for(let x = size/2; x < width; x+= size){
    circle(x,y,size);
  }
}

function gradientBackground(){
  //create a gradient to use as background
  noStroke();
  let h = 1; //rectangle height

  //could use FOR or WHILE loop here...
  let y = 0;
  while (y < height){
    let mappedY = map(y, 0, height, 0, 255);

    fill(mappedY,mouseX/5,100);
    rect(0, y, width, h);
    y += h;
  }
}

function challenge(){
  //top
  let diametre = width/11;
  let start = 0;
  for(let x = 0; x < 12; x ++){
    circle(start,0,40);
    start += diametre;
  }
  //bottom
  start = 0;
  for(let x = 0; x < 12; x ++){
    circle(start,height,40);
    start += diametre;
  }
  //left
  start = 0;
  for(let x = 0; x < 12; x ++){
    circle(0,start,40);
    start += diametre;
  }
  //right
  start = 0;
  for(let x = 0; x < 12; x ++){
    circle(width,start,40);
    start += diametre;
  }
  //
  line()

}

function draw() {
  background(220);
  challenge();
//   gradientBackground();
//   worm(height/2,70);
  
// 
}

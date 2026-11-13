// Image Manipulation Demo
// Dara Bejide
// Nov 10th, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let pilot, chip;
let myVideo;

async function loadAssets() {
  pilot = await loadImage("/assets/aviator.png");
  chip = await loadImage("/assets/chip.jpg");
}

async function setup() {
  await loadAssets();
  // createCanvas(pilot.width, pilot.height);
  createCanvas(640,480);
  myVideo = createCapture(VIDEO);
  pixelDensity(1);
}

function draw() {
  background(220);
  image(myVideo, 0, 0);
  loadPixels(); //load all pixels on Canvas
  pixels[0] = 255;


  //between loadPixels() and updatePixels() run some code to modify pixels array
  // boost();

  // greyScale();
  background(0);
  textEffect();

  //to update the screen to reflect new pixels[], call updatePixels()
  // updatePixels();
}

function textEffect(){
  fill(255);
  let scaleAmount = 5;
  textSize(scaleAmount);

  for(let x = 0; x < width; x+= scaleAmount){
    for(let y = 0; y < height; y+= scaleAmount){
      let avg = getAvg(x,y);
      if(avg > 200){
        text("&", x, y);
      }
      else if(avg > 120){
        text("x", x, y);
      }
      else if(avg > 50){
        text("-", x, y);
      }
      else if(avg > 30){
        text(".", x, y);
      }
    }
  }
}

function greyScale(){
  //use the avg intensity of each pixel to represent it as a shade of grey
  for(let x = 0; x < width; x++){
    for(let y = 0; y < height; y++){
      let avg = getAvg(x,y);
      setPixel(x,y,avg,avg,avg);
      //set the pixel at (x,y) to (avg,avg,avg)
    }
  }
}

function boost() {
  //brightening filter
  //"dumb" filter => same effect to each pixel
  //can use a single loop

  let boostAmount = map(mouseX, 0, width, -50, 50);
  for (let i = 0; i < pixels.length; i += 4) {
    let r = pixels[i] + boostAmount;
    let g = pixels[i + 1] + boostAmount;
    let b = pixels[i + 2] + boostAmount;
    setPixelOneD(i, r, g, b);

  }
}

function setPixelOneD(pos, r, g, b) {
  //pos -> 1D location of pixel's red component
  //r,g,b -> new colour values (0-255) for that pixel
  pixels[pos] = r;
  pixels[pos + 1] = g;
  pixels[pos + 2] = b;
}

function setPixel(x,y,r,g,b){
  //(x,y) -> pixel location
  //r,g,b -> color values
  let index = (y * width + x) * 4;
  setPixelOneD(index,r,g,b);

}

function getAvg(x, y) {
  //return avg intensity of rgb values as (x,y)
  let index = (y * width + x) * 4;
  let r = pixels[index];
  let g = pixels[index+1];
  let b = pixels[index+2];
  return int((r+g+b)/3);
}

function getRed(x,y){
  //return red component at an x,y coordinate
  let index = (y * width + x)*4;
  return pixels[index];
}

function getGreen(x,y){
  //return green component at an x,y coordinate
  let index = (y * width + x)*4;
  return pixels[index+1];
}

function getBlue(x,y){
  //return blue component at an x,y coordinate
  let index = (y * width + x)*4;
  return pixels[index+2];
}
// Vectors Demo
// Dara Bejide
// Oct 27th, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let objects = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if(mouseIsPressed){
    objects.push(new ball(mouseX, mouseY));
  }

  //process objects
  for(let o of objects){
    if(keyIsDown(' ')){
      o.move();
    }
    o.display();
  }
}

class ball{
  constructor(x, y){
    this.pos = createVector(x, y);
    this.vel = createVector(random(0, 5), -5);
    this.grav = createVector(0, 0.2);
    this.force = createVector(0, 0);
  }

  calcMouse(){
    //mouse vector "attractor" calculations
    this.force = createVector(mouseX, mouseY);
    this.force.sub(this.pos);
    this.force.normalize(); //sets hyp to 1
    this.force.mult(2); //scales by factor of 2
  }

  move(){
    if(false){
      this.calcMouse();
      this.vel.add(this.force);
      this.vel.limit(20);
    }
    else{
      this.vel.add(this.grav); //apply grav
    }
    this.pos.add(this.vel);

    //wall bounce
    if(this.pos.x < 0 || this.pos.x > width){
      this.vel.x *= -1;
    }
    //floor bounce
    if(this.pos.y > height){
      this.vel.y *= -0.9;

    }
  }
  display(){
    //display the ball
    circle(this.pos.x, this.pos.y, 20);

    //display the vectors
    if(true){
      stroke(255, 0, 0);
      line(0,0,this.pos.x,this.pos.y);
    
      let endX = this.pos.x + this.vel.x;
      let endY = this.pos.y + this.vel.y;

      stroke(0,0,255);
      line(this.pos.x, this.pos.y, endX, endY);

      stroke(0,255,0);
      line(endX, endY, endX+this.force.x, endY+this.force.y);
    }
  }
}
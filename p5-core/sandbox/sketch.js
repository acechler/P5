
class Human{
  constructor(position, velocity){
    this.position = position;
    this.velocity = velocity;
    let movementQueue = new PositionQueue(position, velocity);
    // Although default, I really want to know the state of these.
    movementQueue.enableShape(false);
    movementQueue.enableTrail(false);
  }

  draw(){
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(this.position.x, this.position.y, PositionQueue.SHAPE_SIZE, PositionQueue.SHAPE_SIZE);
  }
}

let testHuman;

function setup() {
  createCanvas(400, 200);
  testHuman = new Human(25,25,40);
}

function draw() {
  background(255);
  testHuman.draw();
}


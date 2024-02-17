
class Human{
  constructor(position, velocity){
    this.position = position;
    this.velocity = velocity;
    movementQueue = new PositionQueue()
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



function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(255);
}


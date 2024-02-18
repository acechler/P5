class Human {

  constructor(position, velocity) {

    this.position = createVector(position, position); 
    this.velocity = createVector(velocity, velocity); // Creating vectors for position & velocity
    
    this.size = 8;

    this.movementQueue = new PositionQueue(this.position, this.velocity); // Now a property of Human
    this.movementQueue.enableShape(false);
    this.movementQueue.enableTrail(false);
    this.movementQueue.enableWrappedEdges(true);
  }


  debug(flag){
    if(flag === false){
      this.movementQueue.enableTrail(false)
      this.movementQueue.enableDrawPositionText(false);
      return;
    } else {
      this.movementQueue.enableTrail(true)
      this.movementQueue.enableDrawPositionText(true);
    }
  }

  draw() {

    this.movementQueue.draw();
    fill(1);
    rect(this.position.x-(this.size/2), this.position.y-(this.size/2), this.size, this.size);
  }
}

let testHuman;

function setup() {
  createCanvas(800, 800);
  testHuman = new Human(); 
  testHuman.debug(true);
}

function draw() {
  background(255);
  testHuman.draw();
}
function mousePressed() {
  testHuman.movementQueue.addPosition({x: mouseX, y: mouseY});
}
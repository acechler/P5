class Human {
  constructor(position, velocity) {
    // Assuming position and velocity should be vectors
    this.position = createVector(position, position); // Corrected for demonstration
    this.velocity = createVector(velocity, velocity); // Creating vectors for position & velocity
    
    this.movementQueue = new PositionQueue(this.position, this.velocity); // Now a property of Human
    this.movementQueue.enableShape(true);
    this.movementQueue.enableTrail(false);
  }

  draw() {
    // Corrected to use properties of the Human class
    rect(this.position.x, this.position.y, 50, 50); // Corrected to use Human's position
  }
}

let testHuman;

function setup() {
  createCanvas(400, 200);
  // Create a Human instance correctly. Assuming the parameters are intended to be initial positions.
  testHuman = new Human(25, 25); // Corrected to match Human constructor
}

function draw() {
  background(255);
  testHuman.movementQueue.draw();
}
function mousePressed() {
  testHuman.movementQueue.addPosition({x: mouseX, y: mouseY});
}
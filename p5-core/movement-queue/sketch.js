class Human {

    constructor(position, velocity) {
      // Assuming position and velocity should be vectors
      this.position = createVector(position, position); // Corrected for demonstration
      this.velocity = createVector(velocity, velocity); // Creating vectors for position & velocity
      
      this.size = 8;
  
      this.movementQueue = new PositionQueue(this.position, this.velocity); // Now a property of Human
      this.movementQueue.enableShape(false);
      this.movementQueue.enableTrail(false);
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
      // Corrected to use properties of the Human class
      this.movementQueue.draw();
      fill(1);
      rect(this.position.x-(this.size/2), this.position.y-(this.size/2), this.size, this.size); // Corrected to use Human's position
    }
  }
  
  let testHuman;
  
  function setup() {
    createCanvas(800, 800);
    // Create a Human instance correctly. Assuming the parameters are intended to be initial positions.
    testHuman = new Human(); // Corrected to match Human constructor
    testHuman.debug(true);
  }
  
  function draw() {
    background(255);
    testHuman.draw();
  }
  function mousePressed() {
    testHuman.movementQueue.addPosition({x: mouseX, y: mouseY});
  }
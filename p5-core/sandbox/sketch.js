class PositionQueue {

  // Size of guide shape
  static SHAPE_SIZE = 8;

  constructor(position, velocity) {
    this.position = position;
    this.velocity = velocity;
    this.shapeEnabled = false; 
    this.trailEnabled = false;
    this.textPositionEnabled = false;
    this.targets = [];
    
  }

  addPosition(newPosition) {
    this.targets.push(newPosition);
  }

  enableShape(flag) { 
    this.shapeEnabled = flag; 
  }

  enableTrail(flag){
    this.trailEnabled = flag;
  }

  enableDrawPositionText(flag){
    this.textPositionEnabled = flag;
  }

  #processMovement() {
    if (this.targets.length === 0) return; // Guard clause to prevent errors if no targets

    let target = createVector(this.targets[0].x, this.targets[0].y);
    let direction = p5.Vector.sub(target, this.position);
    
    if (direction.mag() > 1) {
      direction.setMag(2);
      this.position.add(direction);
    } else {
      this.targets.shift();
    }
  }

  #drawPositionText() {
    if (this.targets.length === 0) return; // Guard clause to prevent errors if no targets
    
    let lastElement = this.targets[this.targets.length - 1];
    text(`${lastElement.x}, ${lastElement.y}`, 100, 50);
  }

  #drawShape() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(this.position.x, this.position.y, PositionQueue.SHAPE_SIZE, PositionQueue.SHAPE_SIZE);
  }

  #drawTrail() {
    stroke(100, 100, 250, 100);
    beginShape();
    vertex(this.position.x, this.position.y);
    for (let target of this.targets) {
      vertex(target.x, target.y);
    }
    endShape();
  }

  draw() {
    if (this.targets.length > 0) {
      if(this.textPositionEnabled){
        this.#drawPositionText();
      }
      
      this.#processMovement();
    }

    if (this.shapeEnabled) {
      this.#drawShape();
    }
    if (this.trailEnabled){
      this.#drawTrail();
    }
  }
}

let moveQueue;

function setup() {
  createCanvas(640, 360);
  background(255);
  let position = createVector(100, 100);
  let velocity = createVector(0, 0);
  moveQueue = new PositionQueue(position, velocity); 
  moveQueue.enableShape(true); 
  moveQueue.enableTrail(true);
  moveQueue.enableDrawPositionText(true);
  frameRate(60);

  textSize(15);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);
  moveQueue.draw();
}

function mousePressed() {
  moveQueue.addPosition({x: mouseX, y: mouseY});
}

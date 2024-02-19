class PositionQueue {
  static SHAPE_SIZE = 8;

  constructor(position, velocity) {
    this.position = position;
    this.velocity = velocity;
    this.shapeEnabled = false;
    this.trailEnabled = false;
    this.textPositionEnabled = false;
    this.wrapEdgesEnabled = false;
    this.targets = [];
  }

  addPosition(newPosition) {
    this.targets.push(newPosition);
  }

  enableShape(flag) {
    this.shapeEnabled = flag;
  }

  enableTrail(flag) {
    this.trailEnabled = flag;
  }

  enableDrawPositionText(flag) {
    this.textPositionEnabled = flag;
  }

  enableWrappedEdges(flag){
    this.wrapEdgesEnabled = flag;
  }

  // Edge wrapping prevents the ants from traveling out of the canvas view area.
  #wrapEdges() {
    if (this.position.x > width) {
      this.position.x = 0;
      this.targets.shift();
    }
    if (this.position.x < 0) {
      this.position.x = width;
      this.targets.shift();
    }  
    if (this.position.y > height) { 
      this.position.y = 0;
      this.targets.shift();
    }
    if (this.position.y < 0) { 
      this.position.y = height;
      this.targets.shift();
    }
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
    if(this.wrapEdgesEnabled){
      this.#wrapEdges();
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
      if (this.textPositionEnabled) {
        this.#drawPositionText();
      }

      this.#processMovement();
    }

    if (this.shapeEnabled) {
      this.#drawShape();
    }
    if (this.trailEnabled) {
      this.#drawTrail();
    }
  }
}
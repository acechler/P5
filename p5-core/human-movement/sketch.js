class Human {
  static currentCount = 0; // total amount spawned
  static MAX_AMOUNT = 50; // max limit of humans

  constructor(position, velocity) {
    if (Human.currentCount < Human.MAX_AMOUNT) {
      this.position = createVector(position.x, position.y); // Assuming position is an object {x, y}
      this.velocity = createVector(velocity.x, velocity.y); // Assuming velocity is an object {x, y}
      this.size = 8;
      this.movementQueue = new PositionQueue(this.position, this.velocity);
      this.movementQueue.enableShape(false);
      this.movementQueue.enableTrail(false);
      this.movementQueue.enableWrappedEdges(true);
      Human.currentCount++; // Increment the count correctly
    } else {
      console.log('Maximum number of humans reached');
    }
  }

  debug(flag) {
    if (flag === false) {
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
    rect(this.position.x - (this.size / 2), this.position.y - (this.size / 2), this.size, this.size);
  }
}


class HumanManager {
  static humans = [];
  static currentSpeedFactor = 1;


  static resetHumans() {
    HumanManager.humans = []; // Clear the array of humans
    Human.currentCount = 0; // Reset human count to 0;
  }

  // Correct method names and loop variable names
  static updateSpeed(factor) {
    HumanManager.currentSpeedFactor = factor;
    for (let human of HumanManager.humans) {
      human.velocity.setMag(random(0.5, 2) * factor);
    }
  }

  static enableDebug() {
    for (let human of HumanManager.humans) {
      human.debug(true);
    }
  }

  static disableDebug() {
    for (let human of HumanManager.humans) {
      human.debug(false);
    }
  }

  static addHuman(position = null, velocity = null) {
    if (Human.currentCount < Human.MAX_AMOUNT) {
      // Generate random position and velocity if not provided
      position = position || { x: random(width), y: random(height) };
      velocity = velocity || { x: random(-2, 2), y: random(-2, 2) };
      let human = new Human(position, velocity);
      HumanManager.humans.push(human);
      Human.currentCount += 1; // Ensure this is the only place currentCount is incremented for a new human
      return true;
    }
    console.log('Maximum number of humans reached');
    return false;
  }
  
}

class UI_Human {

  constructor() {
    // BUTTONS
    this.addButton = createButton('Add Human');
    this.addButton.mousePressed(() => HumanManager.addHuman());
    this.resetButton = createButton('Reset Canvas');
    this.resetButton.mousePressed(() => HumanManager.resetHumans());
    this.debugButton = createButton('Enable Debug');
    this.debugButton.mousePressed(() => HumanManager.enableDebug());
    this.disableDebugButton = createButton('Disable Debug');
    this.disableDebugButton.mousePressed(() => HumanManager.disableDebug());
    //// SELECTORS

    // Speed
    this.speedSelector = createSelect();
    this.speedSelector.option('Normal Speed');
    this.speedSelector.option('Double Speed');
    this.speedSelector.option('Half Speed');
    this.speedSelector.changed(() => this.updateHumanSpeed());

  }

  // Add methods here that update the UI based on the state of the simulation
  updateHumanSpeed() {
    const speed = this.speedSelector.value();
    switch (speed) {
      case 'Normal Speed':
        HumanManager.updateSpeed(1); // Normal speed
        break;
      case 'Double Speed':
        HumanManager.updateSpeed(2); // Double speed
        break;
      case 'Half Speed':
        HumanManager.updateSpeed(0.5); // Half speed
        break;
    }
  }

}

let testHuman;

function setup() {
  createCanvas(800, 800);
  let ui = new UI_Human();

  for (let i = 0; i < Human.MAX_AMOUNT; i++) {
    let startPosition = { x: 100, y: 200 };
    let startVelocity = { x: 2, y: -2 };

    HumanManager.addHuman(startPosition, startVelocity);
  }
}

function draw() {
  background(255);
  for (let human of HumanManager.humans) {
    human.draw();
  }
}
function mousePressed() {
  for (let human of HumanManager.humans) {
    human.movementQueue.addPosition({ x: mouseX, y: mouseY });
  }
}
Route Command Code

this shows a shape traveling to a queue of positions.

```js

let position;
let velocity;
let targets = []; // Queue to store target points

function setup() {
  createCanvas(640, 360);
  background(255);
  position = createVector(100, 100); // Starting position
  velocity = createVector(0, 0); // Initial velocity is zero
  
  frameRate(60);
  
  textSize(30);
  textAlign(CENTER, CENTER);
}
function draw() {
  background(255);
  
  if (targets.length > 0) {
    let lastElement = targets[targets.length - 1];
    // Display the last target's X coordinate only if there is at least one target
    text(`${lastElement.x}, ${lastElement.y}`, 100, 50);

    let target = createVector(targets[0].x, targets[0].y); // Current target is the first item in the queue
    let direction = p5.Vector.sub(target, position); // Calculate direction towards the target
    
    if (direction.mag() > 1) {
      direction.setMag(2); // Control the speed of movement
      position.add(direction); // Move towards the target
    } else {
      targets.shift(); // Remove the reached target from the queue
    }
  }
  
  // Display the shape at the current position
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(position.x, position.y, 48, 48);
  
  // Optionally, draw lines to all targets in the queue
  stroke(100, 100, 250, 100); // Light blue with some transparency
  beginShape();
  vertex(position.x, position.y);
  for (let target of targets) {
    vertex(target.x, target.y);
  }
  endShape();
}

function mousePressed() {
  targets.push({ x: mouseX, y: mouseY }); // Add a new target point to the queue
}


```
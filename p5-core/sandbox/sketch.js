

  // Function to calculate distance from another point
  function distanceFrom(xOther, yOther) {
    return Math.sqrt((xOther - x) ** 2 + (yOther - y) ** 2);
  }

  // Function to update the coordinates
  function updateCoords(newX, newY) {
    x = newX;
    y = newY;
  }

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Example 1-2: Bouncing Ball, with p5.Vector!
let position;
let velocity;
let target;
function setup() {
  createCanvas(640, 360);
  background(255);
  position = createVector(100, 100);
  velocity = createVector(2.5, 5);
  target = createVector(0,0);
}

function draw() {
  background(255);

  // Add the current speed to the position.
  position.add(velocity);

  if ((position.x > width) || (position.x < 0)) {
    velocity.x = velocity.x * -1;
  }
  if ((position.y > height) || (position.y < 0)) {
    velocity.y = velocity.y * -1;
  }

  line(position.x, position.y, target.x, target.y);

  // Display circle at x position
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(position.x, position.y, 48, 48);
}

function mousePressed(){
  target.x = mouseX;
  target.y = mouseY;
}
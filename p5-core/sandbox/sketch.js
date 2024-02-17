

  // Function to calculate distance from another point
  function distanceFrom(xOther, yOther) {
    return Math.sqrt((xOther - x) ** 2 + (yOther - y) ** 2);
  }

  // Function to update the coordinates
  function updateCoords(newX, newY) {
    x = newX;
    y = newY;
  }
  function setup() {
    createCanvas(640, 360);
    background(255);
    position = createVector(100, 100); // Starting position
    velocity = createVector(0, 0); // Initial velocity is zero
    target = position.copy(); // Initialize target at starting position
  }
  
  function draw() {
    background(255);
    
    let direction = p5.Vector.sub(target, position); // Calculate direction towards target
    if (direction.mag() > 1) { // Check if the shape is close to the target
      direction.setMag(2); // Set the magnitude of the direction to control speed
      velocity = direction; // Update velocity to move towards the target
      position.add(velocity); // Add the velocity to the position
    } else {
      velocity.set(0, 0); // Stop the movement when close to the target
    }
  
    if ((position.x > width) || (position.x < 0)) {
      velocity.x = velocity.x * -1;
    }
    if ((position.y > height) || (position.y < 0)) {
      velocity.y = velocity.y * -1;
    }
  
    // Display circle at the current position
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(position.x, position.y, 48, 48);
  }
  
  function mousePressed() {
    target.set(mouseX, mouseY); // Update target to mouse position
  }
  
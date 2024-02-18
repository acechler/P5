'use strict'

// Define a Timer class
class Timer {
  constructor(duration) {
    this.duration = duration; // Duration in milliseconds
    this.startTime = null; // When the timer starts
    this.isRunning = false; // Timer state
  }

  // Start the timer
  start() {
    if (!this.isRunning) {
      this.startTime = millis();
      this.isRunning = true;
    }
  }

  // Check if the timer is done
  isFinished() {
    if (!this.isRunning) {
      return false;
    }

    const elapsed = millis() - this.startTime;
    if (elapsed >= this.duration) {
      this.isRunning = false; // Reset the timer state
      return true;
    }

    return false;
  }

  // Optional: Restart the timer
  restart() {
    this.isRunning = false;
    this.start();
  }
}
let myTimer;
let x;
let y;
let z;
// draw a spinning box
// with width, height and depth of 50
function setup() {
  createCanvas(400, 400, WEBGL);
  describe('a white box rotating in 3D space');
  x = 25;
  y = 25;
  z = 25;
}

function draw() {
  background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);


  box(50);
}
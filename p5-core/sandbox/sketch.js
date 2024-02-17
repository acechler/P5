

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

# How to create custom shapes

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Rectangle
  rect(50, 50, 100, 75);
  
  // Circle
  circle(200, 200, 50);
  
  // Custom Shape
  beginShape();
  vertex(300, 100);
  vertex(350, 150);
  vertex(300, 200);
  vertex(250, 150);
  endShape(CLOSE);
}

```
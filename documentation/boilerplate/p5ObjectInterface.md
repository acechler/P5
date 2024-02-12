# Object Interface

Example of UI system for interacting.


```js
// Setup function to initialize the canvas and UI elements
function setup() {
  createCanvas(600, 400);
  squareUI = new SquareUI(); // Initialize UI elements for square manipulation
}

// Draw function to render the square
function draw() {
  background(220);
  squareUI.display();
}

// SquareUI class for managing UI elements and interactions
class SquareUI {
  constructor() {
    this.square = {
      x: width / 2 - 50,
      y: height / 2 - 50,
      size: 100
    };

    // UI for adjusting the square's width and height
    this.widthInput = createInput(this.square.size.toString());
    this.widthInput.position(20, 20);
    this.widthInput.input(() => this.updateSquareSize());

    // UI for adjusting the square's position
    this.xPositionInput = createInput(this.square.x.toString());
    this.xPositionInput.position(20, 50);
    this.xPositionInput.input(() => this.updateSquarePosition('x'));

    this.yPositionInput = createInput(this.square.y.toString());
    this.yPositionInput.position(20, 80);
    this.yPositionInput.input(() => this.updateSquarePosition('y'));
  }

  updateSquareSize() {
    this.square.size = parseInt(this.widthInput.value());
  }

  updateSquarePosition(axis) {
    if (axis === 'x') {
      this.square.x = parseInt(this.xPositionInput.value());
    } else if (axis === 'y') {
      this.square.y = parseInt(this.yPositionInput.value());
    }
  }

  display() {
    rect(this.square.x, this.square.y, this.square.size, this.square.size);
  }
}

```
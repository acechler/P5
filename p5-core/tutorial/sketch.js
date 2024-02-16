function getCoords(x, y) {
  // Function to calculate distance from another point
  function distanceFrom(xOther, yOther) {
    return Math.sqrt(Math.pow(xOther - x, 2) + Math.pow(yOther - y, 2));
  }

  // Function to update the coordinates
  function updateCoords(newX, newY) {
    x = newX;
    y = newY;
  }

  // Return the coordinates along with the built-in functions
  return {
    _x: x,
    _y: y,
    distanceFrom: distanceFrom,
    updateCoords: updateCoords
  };
}

function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(220);
  
  let numCols = 50;
  let numRows = 20;
  let spacing = width / numCols;
  
  for (let row = 0; row < numRows; row++) {
    let y = row * spacing + spacing / 2;
    for (let col = 0; col < numCols; col++) {
      let x = col * spacing + spacing / 2;
      let coords = getCoords(x, y); // Use coords for drawing circles
      let diameter = spacing - row;
      
      //fill(100, 100, 200, 150);
      rect(coords._x, coords._y, coords.distanceFrom(x,y), coords.distanceFrom(y,x)); // Use diameter for both width and height for consistency
    }
  }
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
      this.#initWidthInput();

      // UI for adjusting the square's position
      this.#initXPositionInput();
      this.#initYPositionInput();
    }
  
    #initWidthInput(){
        
      // UI for adjusting the square's width and height
      this.widthInput = createInput(this.square.size.toString());
      this.widthInput.position(20, 20);
      this.widthInput.input(() => this.updateSquareSize());
  
    }

    #initXPositionInput(){
      // UI for adjusting the square's position
      this.xPositionInput = createInput(this.square.x.toString());
      this.xPositionInput.position(20, 50);
      this.xPositionInput.input(() => this.updateSquarePosition('x'));
    }

    #initYPositionInput(){
        
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
  
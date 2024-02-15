function getCoords(x, y){
  return{
    _x: x,
    _y: y
  };
}

// Setup function to initialize the canvas and UI elements
function setup() {
  createCanvas(800, 800);
  //squareUI = new SquareUI(); // Initialize UI elements for square manipulation
}

let coords1 = getCoords(20, 20);
let coords2 = getCoords(20, 20);

function draw() {
  background(220);
  //squareUI.display();
  stroke(0); // Set stroke color once, applicable to all shapes drawn in this frame
  for(let i = 0; i < 50; i++){
    coords1._x += Math.sin(coords1._y);
    coords1._y += Math.sin(coords1._x);
    rect(coords1._x * i, coords1._y * i, 8, 8);
    
    for(let j = 0; j < 25; j++){
      coords2._x += Math.sin(coords2._y);
      coords2._y += Math.sin(coords2._x);
      rect(coords2._x * j, coords2._y* j, 8, 8);
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
  
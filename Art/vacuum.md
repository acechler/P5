# Vacuum

Abstract Vacuum. Shows pixels going through a sine / cylinder.

```js
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
```
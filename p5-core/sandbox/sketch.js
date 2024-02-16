function getCoords(x, y) {
  // Function to calculate distance from another point
  function distanceFrom(xOther, yOther) {
    return Math.sqrt((xOther - x) ** 2 + (yOther - y) ** 2);
  }

  // Function to update the coordinates
  function updateCoords(newX, newY) {
    x = newX;
    y = newY;
  }

  return {
    get x() {
      return x;
    },
    get y() {
      return y;
    },
    distanceFrom,
    updateCoords
  };
}

function setup() {
  createCanvas(800, 800);
  //noLoop();
}

let coords1 = getCoords(20, 20);
let coords2 = getCoords(50, 5);

function draw() {
  background(220);
    stroke(0); // This is more efficient outside the loops if it doesn't change
    // Custom Shape
    
    
    for(let i = 0; i < 2; i++){
      beginShape();
      vertex(coords1.x - i, coords1.y - i);
      vertex(coords2.x - i, coords2.y - i);
      endShape(CLOSE);
      coords1.updateCoords(Math.sin(coords1.x+i),Math.sin(coords1.y+i))
      coords2.updateCoords(coords2.x+i,coords2.y+i)
    }
}

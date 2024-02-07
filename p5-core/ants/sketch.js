function setup() {
  createCanvas(600, 400);
  let ui = new UI_ant(); // Initialize UI elements
  // Initial population of ants
  for (let i = 0; i < Ant.MAX_AMOUNT; i++) {
    AntManager.addAnt();
  }
}

function draw() {
  background(220);
  noStroke();
  for (let ant of AntManager.ants) {
    ant.move();
    ant.display();
  }
}

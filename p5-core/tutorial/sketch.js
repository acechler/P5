let sineWaveGenerator;

function setup() {
  createCanvas(400, 200);
}

function draw() {
  let mySineWave = new SineWave(50, 1, 0); // Example: amplitude 50, frequency 1, phase 0
  mySineWave.display();
}


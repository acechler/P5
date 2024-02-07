let sineWaveGenerator;
  
function setup() {
  sineWaveGenerator = new SineWaveGenerator(1, 0.5, 1, 1);
  sineWaveGenerator.setup();
}

function draw() {
  sineWaveGenerator.draw();
}

function keyReleased() {
  if (key === ' ') {
    sineWaveGenerator.toggleTrace();
  }
}


class SineWave {
    constructor(amplitude, frequency, phase) {
      this.amplitude = amplitude;
      this.frequency = frequency;
      this.phase = phase;
    }
  
    display() {
      beginShape();
      noFill();
      for (let x = 0; x < width; x += 10) {
        let angle = TWO_PI * this.frequency * (x / width) + this.phase;
        let y = height / 2 + this.amplitude * sin(angle);
        vertex(x, y);
      }
      endShape();
    }
  }
  
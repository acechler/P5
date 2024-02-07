class SineWaveGenerator {
    constructor(numSines = 5, fund = 0.005, ratio = 1, alpha = 50) {
      this.numSines = numSines;
      this.sines = new Array(this.numSines).fill(PI); // Start all sines facing NORTH
      this.fund = fund; // Speed of the central sine
      this.ratio = ratio; // Multiplier for speed of each additional sine
      this.alpha = alpha; // Opacity of the tracing system
      this.trace = false; // Are we tracing?
      this.rad = 0; // Initial radius value for the central sine, to be set in setup
    }
  
    setup() {
      createCanvas(710, 400);
      this.rad = height / 4; // Compute radius for central circle
      background(204); // Clear the screen
    }
  
    draw() {
      if (!this.trace) {
        background(204); // Clear screen if showing geometry
        stroke(0, 255); // Black pen
        noFill(); // Don't fill
      }
  
      push(); // Start a transformation matrix
      translate(width / 2, height / 2); // Move to middle of screen
  
      for (let i = 0; i < this.sines.length; i++) {
        let erad = 0; // Radius for small "point" within circle... this is the 'pen' when tracing
        if (this.trace) {
          stroke(0, 0, 255 * (float(i) / this.sines.length), this.alpha); // Blue
          fill(0, 0, 255, this.alpha / 2); // Also blue
          erad = 5.0 * (1.0 - float(i) / this.sines.length); // Pen width will be related to which sine
        }
        let radius = this.rad / (i + 1); // Radius for circle itself
        rotate(this.sines[i]); // Rotate circle
        if (!this.trace) ellipse(0, 0, radius * 2, radius * 2); // If we're simulating, draw the sine
        push(); // Go up one level
        translate(0, radius); // Move to sine edge
        if (!this.trace) ellipse(0, 0, 5, 5); // Draw a little circle
        if (this.trace) ellipse(0, 0, erad, erad); // Draw with erad if tracing
        pop(); // Go down one level
        this.sines[i] = (this.sines[i] + (this.fund + (this.fund * i * this.ratio))) % TWO_PI; // Update angle based on fundamental
      }
  
      pop(); // Pop down final transformation
    }
  
    toggleTrace() {
      this.trace = !this.trace;
      if (this.trace) {
        background(255);
      } else {
        background(204);
      }
    }
  }
  
  
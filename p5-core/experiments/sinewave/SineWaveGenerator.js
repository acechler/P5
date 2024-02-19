class SineWaveGenerator {
  constructor(options = {}) {
    // Default values
    const defaults = {
      numSines: 5,
      fund: 0.005, // The speed of the central sine
      ratio: 1, // Multiplier for speed is each additional sine
      alpha: 50, // Opacity of the tracing system
      canvasWidth: 710,
      canvasHeight: 400,
      strokeColor: 0, // Color of the stroke (black)
      fillColor: [0, 0, 255], // Color of the fill (blue)
      strokeWidth: 1,
      trace: false,
    };

    // Apply any provided options over the defaults
    Object.assign(this, defaults, options);

    // Setup dependent properties
    this.sines = new Array(this.numSines).fill(Math.PI);
    this.rad = 0; // To be defined in setup based on canvas height
  }

  setup() {
    createCanvas(this.canvasWidth, this.canvasHeight);
    this.rad = height / 4; // Compute radius for central circle based on canvas height
    background(204); // Clear the screen
  }

  draw() {
    if (!this.trace) {
      background(204); // Clear screen if not tracing
      strokeWeight(this.strokeWidth);
    }

    push(); // Start a transformation matrix
    translate(width / 2, height / 2); // Move to middle of screen

    for (let i = 0; i < this.sines.length; i++) {
      const erad = this.trace ? 5.0 * (1.0 - i / this.sines.length) : 5; // Adjust erad based on tracing
      const radius = this.rad / (i + 1); // Adjust radius based on i
      rotate(this.sines[i]); // Rotate circle

      if (this.trace) {
        stroke(...this.fillColor, this.alpha);
        fill(...this.fillColor, this.alpha / 2);
      } else {
        noFill();
        stroke(this.strokeColor);
      }

      if (!this.trace || i === 0) { // Draw the sine only if not tracing or for the first sine
        ellipse(0, 0, radius * 2, radius * 2);
      }

      push();
      translate(0, radius); // Move to sine edge
      ellipse(0, 0, erad, erad); // Draw with erad
      pop();

      // Update angle based on fundamental frequency
      this.sines[i] = (this.sines[i] + (this.fund + (this.fund * i * this.ratio))) % TWO_PI;
    }

    pop(); // Pop down final transformation
  }

  toggleTrace() {
    this.trace = !this.trace;
    background(this.trace ? 255 : 204);
  }

  // Method to update properties dynamically
  updateProperties(options = {}) {
    Object.assign(this, options);
    if (options.canvasWidth || options.canvasHeight) {
      // Re-setup canvas if size changes
      resizeCanvas(this.canvasWidth, this.canvasHeight);
      this.setup();
    }
  }
}

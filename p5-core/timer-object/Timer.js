// Define a Timer class
class Timer {
    constructor(duration) {
      this.duration = duration; // Duration in milliseconds
      this.startTime = null; // When the timer starts
      this.isRunning = false; // Timer state
    }
  
    // Start the timer
    start() {
      if (!this.isRunning) {
        this.startTime = millis();
        this.isRunning = true;
      }
    }
  
    // Check if the timer is done
    isFinished() {
      if (!this.isRunning) {
        return false;
      }
  
      const elapsed = millis() - this.startTime;
      if (elapsed >= this.duration) {
        this.isRunning = false; // Reset the timer state
        return true;
      }
  
      return false;
    }
  
    // Optional: Restart the timer
    restart() {
      this.isRunning = false;
      this.start();
    }
  }
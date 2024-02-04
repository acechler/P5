class AntManager {
    static ants = [];
    static currentSpeedFactor = 1; // Default speed factor

    static addAnt() {
      if (Ant.currentCount < Ant.MAX_AMOUNT) {
        let ant = new Ant();
        if (ant) {
          AntManager.ants.push(ant);
          return true;
        }
      }
      return false;
    }
  
    static resetAnts() {
      AntManager.ants = []; // Clear the array of ants
      Ant.currentCount = 0; // Reset the count to 0
    }
  
    // Any additional methods for managing ants can be added here
    static updateSpeed(factor) {
        AntManager.currentSpeedFactor = factor;
        for (let ant of AntManager.ants) {
            ant.velocity.setMag(random(0.5, 2) * factor);
        }
    }
  }
  
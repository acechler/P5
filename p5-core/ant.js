

class Ant{
    static currentCount = 0; // Static property to track the number of ants
    static MAX_AMOUNT = 50;  // Maximum number of ants allowed
  
    constructor() {
      if (Ant.currentCount < Ant.MAX_AMOUNT) {
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(0.5, 2));
        Ant.currentCount++; // Increment the count only if a new ant is successfully created
      } else {
        // Handle the case when the max amount is reached
        // For example, you might not create the ant, or you could replace an existing one.
        console.log('Maximum number of ants reached');
        return null; // Indicate that no new ant was created
      }
    }


    /// Private method to handle edge wrapping
    // Edge wrapping prevents the ants from traveling out of the canvas view area.
    #wrapEdges() {
        if (this.position.x > width) this.position.x = 0;
        if (this.position.x < 0) this.position.x = width;
        if (this.position.y > height) this.position.y = 0;
        if (this.position.y < 0) this.position.y = height;
      }
    move(){
        this.position.add(this.velocity);
        this.#wrapEdges();
    }
    display() {
        stroke(0);
        fill(0);
        circle(this.position.x, this.position.y, 5);
    }


}

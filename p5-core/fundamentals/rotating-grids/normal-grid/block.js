
class Block {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.angle = 0;
    }

    draw() {
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        rect(0, 0, blockSize, blockSize);
        pop();
    }


    move() {
        let distance;

        // Prevents continues rotation of block when mouse is hovering
        if (pmouseX - mouseX != 0 || pmouseY - mouseY != 0) {
            distance = dist(mouseX, mouseY, this.x, this.y);
            if (distance < distMouse) {
                this.angle += 1;
            }
        }

        // Rotates square to 90 degrees and stops.
        if (this.angle > 0 && this.angle < 90) {
            this.angle += 1;
        } else {
            this.angle = 0;
        }

    }

}
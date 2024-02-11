# Circle object

Custom circle object that starts on (0,0) and travels diagonally down the canvas.


```js

class Circle{
    constructor(x,y, size){
        this.x = x;
        this.y = y;
        this.size = size;
    }

    resetPosition(){
        this.x = 0;
        this.y = 0;
    }

    draw(){
        circle(this.x,this.y,this.size);
        this.x = this.x + 5;
        this.y = this.y + 5;        
    }
}

// Declaration of Object
const mycircle = new Circle(0,0,64);

function setup() {
    createCanvas(400, 400);
    background(0);
}

function mousePressed(){
    mycircle.resetPosition();
}

function draw(){
    background(0);
    noStroke();
    fill(255);
    mycircle.draw();
}

```
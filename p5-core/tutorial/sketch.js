

let circleX = 100;
let circleY = 100;


function setup() {
    createCanvas(400, 400);
    background(0);
}

function mousePressed(){
    circleX = 0;
    circleY = 0;
}

function draw(){
    background(0);
    noStroke();
    fill(255);
    circle(circleX, circleY, 64);

    circleX = circleX + 5;
    circleY = circleY + 5;
}

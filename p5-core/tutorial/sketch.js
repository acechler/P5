

function setup() {
    createCanvas(400, 400);
    background(0);
}


function draw(){

    noStroke();
    fill(255);
    circle(mouseX, mouseY, 24);
   
}
// Clear the canvas
function mousePressed(){
    background(0);
}
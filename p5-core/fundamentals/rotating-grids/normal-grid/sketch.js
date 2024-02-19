// Following Tutorial: https://www.youtube.com/watch?v=o5t7PxRJSXk&list=LL&index=1&t=234s
let distMouse = 50;
let cols; let rows;
let blockSize = 50;
let blocks = [];

function getFrameCountRate(){
    return frameCount * 0.01;
}

function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
    angleMode(DEGREES);
    cols = width/blockSize;
    rows = height/blockSize;
    for(let i = 0; i < cols; i++){
        blocks[i] = [];
        for(let j = 0; j < rows; j++){
            blocks[i][j] = new Block(blockSize/2 + i*blockSize, blockSize/2 + j*blockSize);
        }
    }

}
  
function draw() {
    background(220);
    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){
            blocks[i][j].move();
            blocks[i][j].draw();
        }
    }
}
  
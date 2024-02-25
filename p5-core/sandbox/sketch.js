'use strict'

let distMouse = 50;
let cols; let rows;
let blockSize = 10;
let blockOffset = 4;
let blocks = [];
let blocksColor = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'white', 'black'];

function getFrameCountRate(){
    return frameCount * 0.01;
}

function setup() {
    createCanvas(800, 800);
    rectMode(CENTER);
    angleMode(DEGREES);
    cols = width/blockSize;
    rows = height/blockSize;
    for(let i = 0; i < cols; i++){
        blocks[i] = [];
        for(let j = 0; j < rows; j++){
            blocks[i][j] = new Block(blockSize/2 + i*blockSize, blockSize/2 + j*blockSize);
            let color = blocksColor[int(random(0, blocksColor.length))];
            blocks[i][j].setColor(color);
        }
    }

}
  
function draw() {
    background(0);
    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){
            blocks[i][j].move();
            blocks[i][j].draw();
        }
    }
}
  



function setup() {
    createCanvas(400, 200);
}
  
function draw() {
    background(0);

    for(let x = 0; x < 25; x++){

        rect(30+x, 20+x*2, 60, 60); // x y w h
    }
}
  
  
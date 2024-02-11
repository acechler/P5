


function setup() {
    createCanvas(400, 200);
}
  
function draw() {
    background(0);

    for(let x = 0; x < 25; x++){
        rect(30+x, 30+x, 60+x, 60+x); // x y w h
    }

}
  
  
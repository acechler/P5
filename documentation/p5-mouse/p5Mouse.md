# Using mouse in P5.js

This shows an example of a mouse interacting with the p5.js canvas

```js

function setup() {
    createCanvas(400, 400);
}


function draw(){
    background(100);
    noStroke();

    fill(255);
    ellipse(mouseX, mouseY, 75, 75);
   

}
```
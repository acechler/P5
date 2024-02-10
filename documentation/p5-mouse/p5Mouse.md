# Using mouse in P5.js

This shows an example of a mouse interacting with the p5.js canvas

```js

function setup() {
    createCanvas(400, 400);
    background(0);
}


function draw(){
    noStroke();
    fill(255);
    circle(mouseX, mouseY, 24);

}
```
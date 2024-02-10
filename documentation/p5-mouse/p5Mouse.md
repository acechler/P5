# Using mouse in P5.js

This shows an example of a mouse interacting with the p5.js canvas

Source tutorial: https://youtu.be/7A5tKW9HGoM?si=rGDsBr_iO_qkcXgP

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


Clear the canvas on mouse press.

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

// Clear the canvas
function mousePressed(){
    background(0);
}

```
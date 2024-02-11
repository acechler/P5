# Calling Mouse


This shows an example of using the mouse cursor position inside the p5 canvas.

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
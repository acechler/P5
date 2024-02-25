// create a bouncing ball
let ball = {
    x: 100,
    y: 100,
    diameter: 50,
    xSpeed: 3,
    ySpeed: 2
};

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);

    // Draw the ball
    fill(255);
    noStroke();
    ellipse(ball.x, ball.y, ball.diameter, ball.diameter);

    // Update the ball's position
    ball.x += ball.xSpeed;
    ball.y += ball.ySpeed;

    // Check for bouncing
    if (ball.x < ball.diameter / 2 || ball.x > width - ball.diameter / 2) {
        ball.xSpeed *= -1;
    }
    if (ball.y < ball.diameter / 2 || ball.y > height - ball.diameter / 2) {
        ball.ySpeed *= -1;
    }
}
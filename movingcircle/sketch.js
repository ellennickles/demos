let x = 0;
let y = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  circle(x, y, 50);

  x += 1;
  y += 1;
}

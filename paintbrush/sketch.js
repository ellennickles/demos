let r = 0;
let g = 0;
let b = 0;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  noStroke();
  fill(r, g, b)
  circle(mouseX, mouseY, 50)
}

function mousePressed() {
  r = random(255);
  b = random(255);
  g = random(255);
}
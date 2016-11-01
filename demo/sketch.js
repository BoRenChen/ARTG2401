var x, y;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  x = width/2;
  y = height/2;
  
  
}

function draw() {
  background(0);
  ellipse(x, y, 20, 20);
  x = x + random(-5,5);
  y = y + random(-3,3);
}
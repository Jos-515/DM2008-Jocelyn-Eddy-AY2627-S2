function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#a48daa");

  drawCat(80, 200, 0.7);   
  drawCat(200, 200, 1.2);  
  drawCat(320, 200, 0.5); 
}

function drawCat(x, y, s) {
  push();
  translate(x, y);
  scale(s);

  fill(0, 0, 0);
  noStroke();
  rect(-50, -50, 100, 100);
  triangle(-50, -50, -38, -75, -25, -50);
  triangle(25, -50, 38, -75, 50, -50);

  fill(255, 255, 255);
  rect(-30, -13, 15, 15);
  rect(17, -13, 15, 15);
  triangle(-8, 14, 12, 14, 2, 23);

  fill("#a48daa");
  triangle(-50, 40, -40, 50, -50, 50);
  triangle(50, 40, 50, 50, 40, 50);

  pop();
}
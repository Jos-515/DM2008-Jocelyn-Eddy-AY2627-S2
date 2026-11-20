let agents = [];
const NUM_START = 12;

function setup() {
  createCanvas(600, 400);
  noStroke();

  for (let i = 0; i < NUM_START; i++) {
    let sz = random(12, 36);
    let x = random(sz / 2, width - sz / 2);
    let y = random(sz / 2, height - sz / 2);
    let speedX = random(-2, 2);
    let speedY = random(-2, 2);
    agents.push(new Agent(x, y, sz, speedX, speedY));
  }
}

function draw() {
  background(255);

  for (let i = 0; i < agents.length; i++) {
    agents[i].update();
    agents[i].show();
  }
}

function mousePressed() {
  let sz = random(16, 40);
  let speedX = random(-2, 2);
  let speedY = random(-2, 2);
  let startX = constrain(mouseX, sz / 2, width - sz / 2);
  let startY = constrain(mouseY, sz / 2, height - sz / 2);
  agents.push(new Agent(startX, startY, sz, speedX, speedY));
}

function keyPressed() {
  if (key == "C" || key == "c") {
    agents = [];
  }
}

class Agent {
  constructor(x, y, sz, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.sz = sz;
    this.dx = speedX;
    this.dy = speedY;
    this.col = 0;
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.col < 255) {
      this.col += 0.5;
    }

    let radius = this.sz / 2;

    if (this.x + radius > width) {
      this.x = width - radius;
      this.dx *= -1;
    } else if (this.x - radius < 0) {
      this.x = radius;
      this.dx *= -1;
    }

    if (this.y + radius > height) {
      this.y = height - radius;
      this.dy *= -1;
    } else if (this.y - radius < 0) {
      this.y = radius;
      this.dy *= -1;
    }
  }

  show() {
    fill(this.col);
    ellipse(this.x, this.y, this.sz);
  }
}
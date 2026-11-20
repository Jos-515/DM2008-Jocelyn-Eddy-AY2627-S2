// DM2008 — Activity 5a [Guided]
// Colliding Circles (30 min)

let balls = [];
let minRadius = 6;

function setup() {
  createCanvas(400, 400);
  balls.push(new Ball(100, 200, 40));
  balls.push(new Ball(300, 200, 40));
}

function draw() {
  background(230);

  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].show();
  }

  for (let i = 0; i < balls.length; i++) {
    for (let j = i + 1; j < balls.length; j++) {
      let b1 = balls[i];
      let b2 = balls[j];

      if (b1.immuneTimer > 0 || b2.immuneTimer > 0) continue;

      let d = dist(b1.pos.x, b1.pos.y, b2.pos.x, b2.pos.y);

      if (d < b1.r + b2.r) {
        handleSplit(i, j);
        return; 
      }
    }
  }
}

function handleSplit(index1, index2) {
  let b2 = balls.splice(index2, 1)[0];
  let b1 = balls.splice(index1, 1)[0];

  spawnChildren(b1);
  spawnChildren(b2);
}

function spawnChildren(parent) {
  let newR = parent.r * 0.65;

  if (newR >= minRadius) {
    let angle = random(TWO_PI);
    let speed = random(1.5, 3);

    let child1 = new Ball(parent.pos.x, parent.pos.y, newR);
    child1.vel = p5.Vector.fromAngle(angle).mult(speed);

    let child2 = new Ball(parent.pos.x, parent.pos.y, newR);
    child2.vel = p5.Vector.fromAngle(angle + PI).mult(speed);

    balls.push(child1, child2);
  } else {
    parent.immuneTimer = 30;
    balls.push(parent);
  }
}

class Ball {
  constructor(x, y, r = 30) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.r = r;
    this.immuneTimer = 25;
  }

  move() {
    this.pos.add(this.vel);

    if (this.immuneTimer > 0) {
      this.immuneTimer--;
    }

    if (this.pos.x > width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x < this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }

    if (this.pos.y > height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    } else if (this.pos.y < this.r) {
      this.pos.y = this.r;
      this.vel.y *= -1;
    }
  }

  show() {
    if (this.immuneTimer > 0) {
      fill(200, 150, 240);
    } else {
      fill(140, 60, 210);
    }
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
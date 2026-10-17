// DM2008 — Mini Project
// FLAPPY BIRD (Starter Scaffold)

// Alice's Adventures as Flappy Bird
// Jocelyn Eddy

// Stretch: add a start screen, a high score, or a difficulty curve.   

/* ----------------- Globals ----------------- */
let bird;
let pipes = [];
let score = 0;
let spawnCounter = 0;
let backgroundImage;
let aliceFont;
let BGMusic;
let buttonImage;
let AliceFlappyBird;
let brickImage;

const SPAWN_RATE = 90;
const PIPE_SPEED = 2.5;
const PIPE_GAP = 160;
const PIPE_W = 60;



// Game states: "playing" or "gameover" — add more if you need them
let gameState = "home";

/* ----------------- Setup & Draw ----------------- */
async function setup() {
  createCanvas(480, 640);
  noStroke();

  AliceFlappyBird = await loadImage("Assets/AliceFlappyBird.png")
  bird = new Bird(20, height / 2, AliceFlappyBird);
  pipes.push(new Pipe(width + 40));
  backgroundImage = await loadImage("Assets/background.jpg");
  buttonImage = await loadImage("Assets/button.png");
  brickImage = await loadImage("Assets/brick.png");
  aliceFont = await loadFont("Assets/Alice.ttf");
  // Music for Playing and Home States
  BGMusic = new Audio("Assets/BGMusic.mp3");
  BGMusic.loop = true;
  BGMusic.volume = 0.4;
  // Music for GameOver States
  gameOverMusic = new Audio("Assets/gameOverMusic.mp3");
  gameOverMusic.loop = true;
  gameOverMusic.volume = 0.4;
}

function draw() {
  if (backgroundImage) {
    image(backgroundImage, 0, 0, width, height);
  } else {
    background(18, 22, 28);
  }

  if (gameState === "home") { 
    BGMusic.play();
    textFont(aliceFont);
    textSize(60);
    text("Alice's Adventures", width / 2, height / 2 - 40);
    text("As Flappy Bird", width / 2, height / 2 );
    textAlign(CENTER);

    image(buttonImage, width / 2-75, height / 2 + 100, 150, 60);
    textSize(36);
    text("begin!", width / 2, height / 2 +140);
    
  }

  if (gameState === "playing") {
    BGMusic.play();
    bird.update();
    fill(0,0,0)
    textFont(aliceFont);
    textSize(24);
    textAlign(CENTER);
    text("Score: " + score, 60, 40); 

    // Spawn a new pipe every SPAWN_RATE frames, then reset the counter
    spawnCounter++;
    if (spawnCounter >= SPAWN_RATE) {
       pipes.push(new Pipe(width + 40));
       spawnCounter = 0;
    }

    for (let i = pipes.length - 1; i >= 0; i--) {
      pipes[i].update();
      pipes[i].show();

      // When the bird hits a pipe, trigger game over
      if (pipes[i].hits(bird)) {
        gameState = "gameover";
      }

      
      if (!pipes[i].passed && pipes[i].x + pipes[i].w < bird.pos.x) {
        score = score + 1;
        pipes[i].passed = true;
      }

      if (pipes[i].offscreen()) {
        pipes.splice(i, 1);
      }
    }

    bird.show();  
  }

  if (gameState === "gameover") {
    gameOverMusic.play();
    textAlign(CENTER);

    fill(0, 0, 0);
    textSize(60);
    text("Game Over", width / 2, height / 2 - 40);
    textSize(36);
    text("Score: " + score, width / 2, height / 2 + 20)  
  }

}

/* ----------------- Input ----------------- */
function keyPressed() {
  if (gameState === "playing") space = bird.flap();
}

function mousePressed() {
  // This adds functionality to the "begin!" button for the home scene. By checking that the mouse is clicked within the button parameters.
  if (gameState === "home" && mouseX > width / 2 -75 && mouseX < width / 2+75 && mouseY > height / 2 +100 && mouseY < height / 2 +160) {
    gameState = "playing";
  } 
}

/* ----------------- Classes ----------------- */
class Bird {
  constructor(x, y, img) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.r = 30;
    this.img = img;
    this.gravity = 0.45;
    this.flapStrength = -8.0;
  }

  applyForce(fy) {
    this.acc.y += fy;
  }

  flap() {
    // A negative y velocity moves the bird upward
    this.vel.y = this.flapStrength;
  }

  update() {
    this.applyForce(this.gravity);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    // Keep the bird within the canvas vertically
    if (this.pos.y < this.r) {
      this.pos.y = this.r;
      this.vel.y = 0;
    }

    // Touching the ground is game over — same as hitting a pipe
    if (this.pos.y > height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y = 0;
    }
  }

  show() {
    imageMode(CENTER);
    image(this.img, this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    imageMode(CORNER);
  }
}

class Pipe {
  constructor(x) {
    this.x = x;
    this.w = PIPE_W;
    this.speed = PIPE_SPEED;

    const margin = 40;
    const gapY = random(margin, height - margin - PIPE_GAP);
    this.top = gapY;
    this.bottom = gapY + PIPE_GAP;

    this.passed = false;
  }

  update() {
    this.x -= this.speed;
  }

  show() {
    fill(120, 200, 160);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, this.bottom, this.w, height - this.bottom);

    this.showBricks(this.x, 0, this.w, this.top);
    this.showBricks(this.x, this.bottom, this.w, height - this.bottom);
  }

  showBricks(x, y, w, h) {
    drawingContext.save();
    drawingContext.beginPath();
    drawingContext.rect(x, y, w, h);
    drawingContext.clip();

    for (let i = y; i < y + h; i += w) {
  
        image(brickImage, x, i, w, w);

    }

    drawingContext.restore();
  }
    

  offscreen() {
    return this.x + this.w < 0;
  }

  hits(bird) {
     const withinX = (bird.pos.x + bird.r > this.x) && (bird.pos.x - bird.r < this.x + this.w);
     const aboveGap = bird.pos.y - bird.r < this.top;
     const belowGap = bird.pos.y + bird.r > this.bottom;
    return withinX && (aboveGap || belowGap);
  }
} 

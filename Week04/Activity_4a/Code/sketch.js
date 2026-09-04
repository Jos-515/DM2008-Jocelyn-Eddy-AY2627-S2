// DM2008 — Activity 4a [Guided]
// Bake a Cookie (30 min)
//
// A class is a blueprint — Cookie describes what every cookie has and can do.
// Your job is to complete the class, then add movement and a flavour randomiser.
//
// Suggested order:
// 3. Implement move() and randomFlavor()
// 4. Wire them up in keyPressed() and mousePressed()
//
// Stretch: add a second cookie with different starting values.

let cookie;

function setup() {
  createCanvas(400, 400);
  noStroke();
  cookie = new Cookie("chocolate", 200, width / 2, height / 2);
}

function draw() {
  background(230);
  cookie.show();
}

class Cookie {
  constructor(flavour, sz, x, y) {
    // this. binds each value to this specific cookie object
    // Add the missing properties below
    this.flavor = flavour;
    this.sz = sz;
    this.x = x;
    this.y = y;
  }

  show() {
    switch (this.flavour) {
      case "chocolate":
        fill(196, 146, 96);
        break;
      case "vanilla":
        fill(255, 223, 150);
        break;
      case "red velvet":
        fill(127, 42, 60);
        break;
      default:
        fill(220, 180, 120);
    }
    ellipse(this.x, this.y, this.sz);

    const s = this.sz * 0.1;
    fill(60);
    ellipse(this.x - this.sz*0.12, this.y - this.sz*0.12, s);
    ellipse(this.x + this.sz*0.24, this.y - this.sz*0.24, s);
    ellipse(this.x - this.sz*0.30, this.y + this.sz*0.30, s);
    ellipse(this.x + this.sz*0.20, this.y + this.sz*0.18, s);
    ellipse(this.x + this.sz*0.02, this.y + this.sz*0.12, s);
    ellipse(this.x + this.sz*0.07, this.y - this.sz*0.12, s);
    ellipse(this.x - this.sz*0.30, this.y + this.sz*0.0, s);
  }

  move() {
     if (keyCode === 37) { // Left arrow key
    this.x = this.x - 5;
  } else if (keyCode === 39) { // Right arrow key
    this.x = this.x + 5;
  } else if (keyCode === 38) { // Up arrow key
    this.y = this.y -5;
  } else if (keyCode === 40) { // Down arrow key
    this.y = this.y +5;
  }
}
  

  randomFlavour() {
    let cookie_flavours = ["vanilla", "chocolate", "red velvet"]
    this.flavour = (random(cookie_flavours))
  }
}


  
function keyPressed() {
  cookie.move()
}

function mousePressed() {
  cookie.randomFlavour()

}
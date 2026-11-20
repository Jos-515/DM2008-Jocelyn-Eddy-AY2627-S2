// DM2008 — Activity 2b: Pattern Making

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(240);

  // Red and blue swap when the user presses the mouse.
  let topColor = mouseIsPressed ? color(255, 50, 50) : color(0, 100, 255);
  let bottomColor = mouseIsPressed ? color(0, 100, 255) : color(255, 50, 50);

  for (let y = 80; y <= height; y += 120) {

    for (let i = 0; i < width + 50; i += 50) {
      
      let wave = 0;
      if (mouseIsPressed) {
        wave = sin(frameCount * 0.1 + i * 0.05) * 15;
      }

      fill(topColor); 
      ellipse(i + wave, y - 40, 20);

      fill(255); 
      ellipse(i + 25, y, 40);

      fill(bottomColor); 
      ellipse(i - wave, y + 40, 20);
    }
  }
}
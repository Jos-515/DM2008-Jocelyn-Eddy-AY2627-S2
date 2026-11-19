// DM2008 — Activity 2a
// Mode Switch (20 min)
//
// Use keys 1, 2, 3 to switch between at least 3 modes.
// Each mode should change more than just the background — think fill, size, or motion.
// 
// Stretch: add a 4th mode, or make the ellipse change shape between modes.

let x = 0;       // ellipse x-position
let size = 50;   // ellipse size
let bgColor;     // background colour, changed by key presses

function setup() {
  createCanvas(400, 400);
  bgColor = color(220);
}

function draw() {
  background(bgColor);

  circle_color = color(0)

  fill(circle_color);
  ellipse(x, height / 2, size);

  x += 2;

  if (x > width + size / 2) {
    x = 0;
  }
}

green_shades = ["#4f7a28", "#77bb41", "#96d35f", "#b1dd8c"]

// Keys 1, 2, 3 change the background colour
function keyPressed() {
  switch (key) {
    case "1":
      bgColor = color(200, 100, 100);
      circle_color = color(200,100,100);
      size = 50;
      break; // red background
    case "2":
      bgColor = random(green_shades);
      break; // a random shade of green 
      size = 50;
    case "3":
      bgColor = color(100, 100, 200);
      size = 100;
      break; // background turns blue, and circle expands

    case "4":
      
      break;
    default:
      bgColor = color(220); // grey
  }
}

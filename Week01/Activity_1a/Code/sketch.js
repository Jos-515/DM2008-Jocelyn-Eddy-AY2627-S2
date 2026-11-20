// DM2008 — Activity 1a
// Simple Creatures (20 min)

// Run the sketch, then click on the preview to enable keyboard
// Use the 'Option' ('Alt' on Windows) key to view or hide the grid
// Use the 'Shift' key to change overlays between black & white
// Write the code for your creature within the space provided

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);
  
  fill(0,0,0)
  noStroke()
  rect(150, 250, 100, 100);
  triangle(150, 250, 162, 225, 175, 250)
  triangle(225, 250, 238, 225, 250, 250)

  fill(255,255,255)
  rect(170, 287, 15, 15)
  rect(217, 287, 15, 15)
  triangle(192, 314, 212, 314, 202, 323)
  triangle(150, 340, 160, 350, 150, 350)
  triangle(250, 340, 250, 350, 240, 350)

  helperGrid(); 
}

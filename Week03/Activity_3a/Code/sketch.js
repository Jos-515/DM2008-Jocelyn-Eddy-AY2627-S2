// DM2008 — Activity 3a [Guided]
// Array Sampler (25 min)
//
// An array stores a list of values — here it's colors, but it could be
// sizes, positions, or anything else.
// Press any key to cycle through the array one item at a time.

// - Loop through the whole array to draw all items at once.
//
// Stretch: visualize all items in the array simultaneously instead of one at a time.

let currentIndex = 0;
let x = 350;
let y = 50;

let positions = [
//350

{x:350, y:100}, {x:350, y:150}, {x:350, y:200}, {x:350, y:250}, {x:350, y:300},
  
//300
                 
{x:300, y:50}, {x:300, y:100}, {x:300, y:150}, {x:300, y:200}, {x:300, y:250}, {x:300, y:300},

//250

{x:250, y:50}, {x:250, y:100}, {x:250, y:150}, {x:250, y:200}, {x:250, y:250}, {x:250, y:300},
 
//200
                 
{x:200, y:50}, {x:200, y:100}, {x:200, y:150}, {x:200, y:200}, {x:200, y:250}, {x:200, y:300},
                 
//150                
{x:150, y:50}, {x:150, y:100}, {x:150, y:150}, {x:150, y:200}, {x:150, y:250}, {x:150, y:300},

//100

{x:100, y:50}, {x:100, y:100}, {x:100, y:150}, {x:100, y:200}, {x:100, y:200}, {x:100, y:300},
 
//50
{x: 50, y: 50}]

positions.push({x:50, y:100}, {x:50, y:150}, {x:50, y:200}, {x:50, y:250}, {x:50, y:300});

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);
  fill('#74a7fe');
  ellipse(x, y, 30, 45);
  // I made it small and blue to look like a raindrop, emphasised by the splattering effect as it iterates through the positions in the array. 
}

// Advance to the next colour each time a key is pressed
function mousePressed() {
  currentIndex++; // shorthand for currentIndex += 1

  // Wrap back to the start when we reach the end
  if (currentIndex >= positions.length) {
    currentIndex = 0;
  }
  x = positions[currentIndex].x;
  y = positions[currentIndex].y;
  // This updates the x & y values of the ellipse so that the position changes. 
  

  console.log("Current index:", currentIndex, "→", positions[currentIndex]);
}

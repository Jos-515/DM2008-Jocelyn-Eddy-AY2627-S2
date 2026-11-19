// DM2008 — Activity 1b [Georg Nees]
// Learning By Making (30 min)

let x;
let y;
let w;

function setup() {
  createCanvas(800, 800)
  background(240);
}

function draw() {
  
  x = random(width);
  y = random(height);
  d = random(10, 80);


  var colour_Array = ["#d4b57c","#f2bea8","#dc8a65","#ab473d","#5f2412","#743722","#524533","#34432e","#243350"]
  
  // background(240,40);
  
  stroke(0);
  strokeWeight(random(0.5, 2));
  fill(random(colour_Array));
  circle(x, y, d);
  
}

function keyPressed() {
    saveCanvas("activity1b-image", "jpg");
}
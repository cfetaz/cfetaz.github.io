// Chanel Fetaz
// wk11 hw pt 2
// p5js assignment with an interaction

// setting for image variable and call to file
var canyon;
function preload() {
  canyon = loadImage("Grand_Canyon.jpg");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  // call to load only pixels of image
  canyon.loadPixels();
  background(0);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  // create text instructions
  push();
  noStroke();
  fill(255);
  text("Move your mouse to reveal the art.", width/2, height/2);
  pop();

  // test image display
  // image(canyon, 0, 0, canyon.width/2, canyon.height/2);

  // create square 'brush' to paint the image pixels
  fill(canyon.get(mouseX, mouseY));
  rect(mouseX, mouseY, 50, 50);
}

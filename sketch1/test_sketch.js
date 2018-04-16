

function setup() {

  createCanvas(windowWidth,windowHeight);

}

function draw() {

  background (0);
  translate(width / 2, height / 2);
  fill(random(255), random(255), random(255));
  rect(30,30,70,70);

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}

function mousePressed () {
var fs = fullscreen();
  fullscreen(!fs);
}

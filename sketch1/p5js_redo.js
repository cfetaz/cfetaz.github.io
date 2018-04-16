// Chanel Fetaz
// wk11 hw pt 1
// p5js assignment to re-do a previous processing project




// setup program variables
var input, button, instruction;

function setup() {

  // create canvas
  createCanvas(windowWidth, windowHeight);
  noLoop();

  input = createInput();
  input.position(20, 65);

  // create button using p5.dom library 
  button = createButton('Share');
  button.position(input.x + input.width, 65);
  button.mousePressed(response);

  // create instructions to be displayed above the button
  instruction = createElement('h2', 'What are you most proud of?');
  instruction.position(20, 5);

  // settings for text
  textAlign(CENTER);
  textSize(50);
}

// create settings for the response text to be displayed
function response() {

  // create the answer variable based on input button
  var answer = input.value();
  input.value('');

  // create a for loop to display answer text randomly on window screen
  for (var i=0; i< 1; i++) {
    push();
    fill(124);
    text(answer, random(windowWidth), random(windowHeight));
    pop();
  }
}

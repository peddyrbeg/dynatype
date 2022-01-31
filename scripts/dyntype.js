let textArea;
let charStart = 0;
let charSpeed = 0;
let newTxt;
let fonts = [];
let first = false;

function preload () {

  fonts[0] = loadFont("assets/ITCBLKAD.TTF");
  fonts[1] = loadFont("assets/BKANT.TTF");
  fonts[2] = loadFont("assets/Gabriola.ttf");
  fonts[3] = loadFont("assets/calibri.ttf");
  
}

function setup() {
  
  createCanvas(400, 400);
  textArea = createInput("");
  textArea.position(0, height);
  textArea.style("color", "white");
  textArea.style("border", "white");
  textArea.style("font-size", "20px");
  textArea.style("outline", "none")
  textArea.style("pointer-events", "none");
  textArea.elt.focus();
  textArea.attribute("spellcheck", "false");
  
  charTarget = floor(random(3,10));

  textFont(fonts[0]);
  
}

function keyPressed () {
  
  if (!first) {
    first = true;
    charStart = frameCount;
  }
  else {
    charSpeed = frameCount - charStart;
    typeSpeed();
    first = false;
  }
  
}

function typeSpeed () {

  if (charSpeed < 20) textFont(fonts[0]);
  else if (charSpeed >=20 && charSpeed <= 30) textFont(fonts[1]);
  else if (charSpeed >= 31 && charSpeed <= 40) textFont(fonts[2]);
  else if (charSpeed >= 41 && charSpeed <= 50) textFont(fonts[3]);
  
}

function draw() {
  
  background(255);
  fill(0);
  textSize(40);
  text(textArea.elt.value, 0, 0, 400, 400);
  
}
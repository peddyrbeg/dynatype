let cnv;
let textArea;
let charStart = 0;
let charLast = 0;
let charSpeed = 0;
let fonts = [];
let first = true;
let dispChars = [];
let index = -1;
let s = 0;
let check = /[a-z\s]/i
let caps;

function preload () {

  fonts[0] = loadFont("assets/ITCBLKAD.TTF");
  fonts[1] = loadFont("assets/BKANT.TTF");
  fonts[2] = loadFont("assets/calibri.ttf");

}

function setup() {
  
  if (displayWidth <= 480) cnv = createCanvas(displayWidth, displayHeight-(displayHeight*0.151));
  else cnv = createCanvas(320, displayHeight-(displayHeight*0.151));
  var x = (displayWidth - width) / 2;
  cnv.position(x);

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

function keyPressed (e, l) {

  let keynum;

  if(window.event) { // IE                  
    keynum = e.keyCode;
  } else if(e.which){ // Netscape/Firefox/Opera                 
    keynum = e.which;
  }

  if (e.shiftKey) caps = true;
  else caps = false;

  l = String.fromCharCode(keynum);

  if (check.test(l)) {
    if (first) {
      first = false;
      charLast = frameCount;
      charSpeed = 0;
    }
    else {
      charStart = charLast;
      charLast = frameCount;
      charSpeed = charLast - charStart;
    }
    typeSpeed(charSpeed, l);
  }

  if (keynum == 190) typeSpeed(0, ".");
  else if (keynum == 188) typeSpeed(0, ",");

  if (keynum == 8) {
    dispChars.splice(dispChars.length-1, 1);
    xCount--;
  }
  
}

function typeSpeed (c, l) {

  s = 0;

  if (c < 15) s = 0;
  else if (c >= 16 && charSpeed <= 25) s = 1;
  else s = 2;

  setChars(s, l);
  
}

function setChars (s, l) {

  index++;
  dispChars.push(new Char(l, 30, 40, s));

}

function draw() {
  
  background(255);
  fill(0);
  textSize(20);

  dispChars.forEach(element => element.display());

}

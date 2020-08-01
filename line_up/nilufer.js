var canvas;
var textCanvas;

let textCanvasPixels;
let simplex;
let img;
let song;
var loopCounter;

var xOff;
var yOff;
var curIndex = 0;
var bandName;

var sTempo;
var sEnergy;
var sMode; // 0hor 1var
var sStroke;
var rectBool; // 0el 1rect
var yDistance;
var xDistance;
var rectHeight;
var rectWidth;
var mulVar;
var volmul;
var bandTextSize;
var bandBG;
var bandTextColor;


function preload() {
  myFont = loadFont("/assets/larish.otf");
  song = loadSound('/line_up/assets/nilufer_yanya.mp3');
  bandName = "nilufer_yanya";

}

function setup() {
  // create main canvas
  // canvas = createCanvas(800, 800);
  canvas = createCanvas(windowWidth, windowHeight);

  background(150);
  frameRate(30);

  simplex = new SimplexNoise();
  loopCounter = 0;

  // create text canvas
  setupTextCanvas();

  applyVolumeSetup();

  setupBandData();

}

function draw() {
  background(bandBG);

  updateText();
  noiseLineVars();

}

function toggle_info(){
  if ($(".band_info").is(":visible")){
    $(".band_info").hide("fast");
    $(".close_button").attr("src","/line_up/open_button.svg");
  }else{
   $(".band_info").show("fast");
    $(".close_button").attr("src","/line_up/close_button.svg");
  }
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // captureCanvas.resize(windowWidth, windowHeight);
}

function applyVolumeSetup() {
  //   // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();
  //   // Patch the input to an volume analyzer
  analyzer.setInput(song);
}

function playSong(){
  if (song.isPlaying()){
    song.pause();
    $(".play_button").val("/play");  
  }
  else{
    song.loop();
    $(".play_button").val("/pause");

  }
}

function updateText() {

  let char = bandName.substring(curIndex, curIndex + 1);
  xOff = random(100) * (loopCounter % bandName.length);
  yOff = random(100) * (loopCounter % bandName.length);

  textCanvas.text(char, xOff, yOff);
  curIndex++;
  if (curIndex > bandName.length) {
    curIndex = 0;
    textCanvas.background(0);
  }
}

function noiseLineVars() {

  let zoom = 200 - sTempo; //makes high tempo more wavy and low tempo less wavy

  loopCounter += 1;


  for (let x = 0; x < width; x += xDistance) {
    for (let y = 0; y < height; y += yDistance) {
      // noise multiplied by energy
      let pnoise = simplex.noise3D(x / zoom, y / zoom, loopCounter / 40) * sEnergy;
      let color = textCanvas.get(x, y);

      color = blackOrWhite(color);

      fill(0, 255, 255); //cyan
      stroke(255, 0, 0); //red

      strokeWeight(sStroke);

      let volume = analyzer.getLevel() / volmul;

      //text manipulation
      if (color) {
        fill(bandTextColor);
        noStroke();
      }
      pnoise = pnoise * volume * 15;

      // drawing
      if (sMode) {
        if (rectBool) {
          rect(x, y + pnoise, rectWidth, rectHeight);
        } else {
          ellipse(x, y + pnoise, rectWidth, rectHeight);
        }
      } else {
        if (rectBool) {
          rect(x + pnoise, y, rectWidth, rectHeight);
        } else {
          ellipse(x + pnoise, y, rectWidth, rectHeight);
        }
      }
    }
  }
}

function setupBandData(){


// Nilufer yanya
   sTempo = 132;
   sEnergy = 151;
   sMode = 1;
   sStroke = 1;
   rectBool = 0; //rect //maybe change to circle
   rectHeight = 1; 
   rectWidth = 8;
   xDistance = 7;
   yDistance = 5;
   mulVar = 5;
   volmul = 6;
   bandTextSize = 300;
   bandBG=100;
     bandTextColor = 0;




 //apply danceability and mode
  if (sMode) {
    yDistance = yDistance * mulVar;
    rectHeight = rectHeight * mulVar;
  } else {
    xDistance = xDistance * mulVar;
    rectWidth = rectWidth * mulVar;
  }

  textCanvas.textSize(bandTextSize);
}


function setupTextCanvas() {
  textCanvas = createGraphics(windowWidth, windowWidth);
  textCanvas.background(0);
  textCanvas.textAlign(LEFT, TOP);
  textCanvas.textSize(400);
  textCanvas.textStyle(BOLD);
  textCanvas.textFont(myFont);
  textCanvas.fill(255);
}

function blackOrWhite(color) {

  if (color[0] + color[1] + color[2] > 0) {
    return true;
  } else {
    return false;
  }
}
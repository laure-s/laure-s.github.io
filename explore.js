let canvas;
var textCanvas;
var imageCanvas;
let captureCanvas;
var capture;

let textCanvasPixels;
let simplex;
let img;
let song;
let mic;
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


var tempo_input;
var key_input;
var mode_input;
var energy_input;
var loud_input;
var dance_input;
var shape_input;

$(document).ready(function(){
    $("input").on("input", function(){
        // Print entered value in a div box
        applyForm();
    });
});

function preload() {
  //glass animals
  // img = loadImage('/glassanimalstext-black.png');

  myFont = loadFont("assets/larish.otf");

  // song = loadSound('/assets/tinarwein.mp3');

}

function setup() {
  // create main canvas
  canvas = createCanvas(windowWidth, windowHeight);
  // canvas.parent(document.getElementById("canvas_container"));
  canvas.position(0, 0);
  background(150);
  frameRate(30);

  simplex = new SimplexNoise();
  loopCounter = 0;

  setupCaptureCanvas();

  applyVolumeSetup();
	setupInputs();


  updateBandData();


}

function draw() {

  background(0);

  captureCanvas.image(capture, 0, 0, windowWidth, windowHeight);
  captureCanvas.filter(THRESHOLD);
        // captureCanvas.filter(INVERT);


  // image(captureCanvas, 0,0);
  noiseLineVars();

  // image(imageCanvas,0,0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // captureCanvas.resize(windowWidth, windowHeight);
}

function setupInputs(){
 tempo_input = document.getElementById("tempo_value");
 key_input = document.getElementById("key_value");
 mode_input = document.getElementById("mode_value");
 energy_input = document.getElementById("energy_value");
 loud_input = document.getElementById("loud_value");
 dance_input = document.getElementById("dance_value");
 shape_input = document.getElementById("shape_value");
}

function applyForm(){

	updateBandData();
}

// function changeColor() {
//   bandTextColor=0;
// }

function applyVolumeSetup() {

  // //   // create a new Amplitude analyzer
  // analyzer = new p5.Amplitude();

  // //   // Patch the input to an volume analyzer
  // analyzer.setInput(song);

  // fft = new p5.FFT(0.8);
  // song.play();

  mic = new p5.AudioIn();
  mic.start();
}

// function playSong(){
//   if (song.isPlaying()){
//     song.pause();
//   }
//   else{
//     song.play();
//   }
// }


function updateText() {

  //     textLeading((mouseY));
  //   // textLeading((mouseX));
  //   xOff = mouseX;
  //   textCanvas.text("young fathers", xOff-100, 0,800,800);

  let char = bandName.substring(curIndex, curIndex + 1);
  xOff = random(100) * (loopCounter % bandName.length);
  yOff = random(100) * (loopCounter % bandName.length);

  // if (xOff>width+100){
  //   xOff=300;
  // }
  // if(yOff>height+100){
  //   yOff-=300;
  // }
  textCanvas.text(char, xOff, yOff);
  // textCanvas.text(
  //   bandName.substring(curIndex, curIndex+1),
  //   100*loopCounter, 100*loopCounter);
  curIndex++;
  if (curIndex > bandName.length) {
    curIndex = 0;
    textCanvas.background(0);
  }
}

function noiseLineVars() {

  //todo: 1. verify all bands are here 3.play around with it 4. update table with final values

  //must stay
  let zoom = 200 - sTempo; //makes high tempo more wavy and low tempo less wavy

  loopCounter += 1;
  // var spectrum = fft.analyze();



  for (let x = 0; x < width; x += xDistance) {
    for (let y = 0; y < height; y += yDistance) {
      // noise multiplied by energy
      let pnoise = simplex.noise3D(x / zoom, y / zoom, loopCounter / 40) * sEnergy;

      // let color = textCanvas.get(x, y);
      // let color = imageCanvas.get(x, y);
      let color = captureCanvas.get(x,y);
      color = blackOrWhite(color);

      // let color = 0;

      // fill(0, 255, 255); //cyan
      // stroke(255, 0, 0);

      // fill(255, 0, 255); //magenta
      // stroke(0, 255, 0);

      // fill(255, 255, 0); //yellow
      // stroke(0, 0, 255);

      fill(0); //red
      stroke(255);
      strokeWeight(1);

      //  fill(0, 255, 0); //green
      // stroke(255, 0, 255);

      //  fill(0, 0, 255); //blue
      // stroke(255, 255, 0);

      // strokeWeight(sStroke);

      // let volume = analyzer.getLevel() / volmul;
      // let volume = fft.getEnergy("mid")/255;
      // let bassVolume = fft.getEnergy("bass");


      // let volume = mic.getLevel()*2;
      // let volume = 0;
      let volume = mic.getLevel() / 5;


      //text manipulation
      if (color) {
        // rectHeight = 10 - rectHeight;
        // rectWidth = 10 - rectWidth;

        fill(255);
        noStroke();

        // noise = noise + (gLoudness * gDance);
        // x = x + volume * gDance;

      }
      pnoise = pnoise * volume * 20;
      // noise = noise * bassVolume * 25;

      // drawing
      if (sMode==1) {
        if (rectBool==1) {
          rect(x, y + pnoise, rectWidth, rectHeight);
        } else {
          ellipse(x, y + pnoise, rectWidth, rectHeight);
        }
      } else {
        if (rectBool==1) {
          rect(x + pnoise, y, rectWidth, rectHeight);
        } else {
          ellipse(x + pnoise, y, rectWidth, rectHeight);
        }
      }
      // `closePath();
    }
  }
}

function updateBandData(){

  //   Tinarwein
  sTempo = tempo_input.value;
  sEnergy = energy_input.value;
  sMode = mode_input.value; //h
  var loud_input_value = loud_input.value;
  var dance_input_value = 10-dance_input.value;

 sStroke = 1;
  // if (loud_input_value > 8){
  //     sStroke = 0;
  // } else if (loud_input_value<6){
  //   sStroke = 2;
  // }else{
  //   sStroke = 1;
  // }
  rectBool = shape_input.value; //rect
  rectHeight = key_input.value;
  rectWidth = loud_input_value;

// yDistance = dance_input.value;
//   xDistance = (yDistance*loud_input_value)/2;

  mulVar = 3;
  // console.log(sMode);

  // tempo_input
  // key_input
  // mode_input
  // energy_input
  // loud_input
  // dance_input
  // shape_input

	if (sMode==1) {
    yDistance = dance_input_value * mulVar;
    rectHeight = rectHeight * mulVar;
    xDistance=round((dance_input_value*loud_input_value)/2);
  } else {
    // xDistance = round(dance_input.value * mulVar) /3;
    xDistance = dance_input_value * mulVar;

    rectWidth = rectWidth * mulVar;
    yDistance=round((dance_input_value*loud_input_value)/2);

  }

//          var key_input;
// var mode_input;
// var energy_input;
// var loud_input;
// var dance_input;
// var shape_input;


 //apply danceability and mode


  // textCanvas.textSize(bandTextSize);
}

function setupImageCanvas() {
  imageCanvas = createGraphics(800, 800);
  // imageCanvas.background(255);
  imageCanvas.image(img, 0, 0, width, height);

  // somplete this. upload image to canvas, centered and full sized and draw it w/ blending modes
}

function setupTextCanvas() {
  textCanvas = createGraphics(canvas.width, canvas.height);
  textCanvas.background(0);
  textCanvas.textAlign(LEFT, TOP);
  textCanvas.textSize(400);

  // textCanvas.textSize(400);
  // textCanvas.textSize(500);

  textCanvas.textStyle(BOLD);
  textCanvas.textFont(myFont);
  textCanvas.fill(255);

  //  setup textCanvasPixels
  // textCanvasPixels = textCanvas.get(250,250); // comes back an [r, g, b, a]
  // console.log(textCanvasPixels);
}

function setupCaptureCanvas(){
	captureCanvas = createGraphics(canvas.width, canvas.height);
  // imageCanvas.background(255);
  capture = createCapture(VIDEO);
  capture.size(canvas.width, canvas.height);
  capture.hide();
  // captureCanvas.filter(GRAY);
  captureCanvas.image(capture, 0, 0, canvas.width, canvas.height);
}

function blackOrWhite(color) {

  if (color[0] + color[1] + color[2] > 0) {
    return true;
  } else {
    return false;
  }
}
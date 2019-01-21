// POP-UP
// When loading the page
//-----------------------

$(document).ready(function() {
  // Show the popup
  $(".popup-welcome").css({ display: "block" });
  // Background is less opaque
  $(".flex-header, .flex-middle").css({ opacity: "0.1" });
});

$(".btn-rules").click(function() {
  $(".popup-welcome").css({ display: "none" });
  $(".popup-rules").css({ display: "block" });
  $(".flex-header, .flex-middle").css({ opacity: "0.1" });
});

$(".btn-play").click(function() {
  $(".popup-welcome").css({ display: "none" });
  $(".popup-rules").css({ display: "none" });
  $(".flex-header, .flex-middle").css({ opacity: "1" });
});

//Once the button is clicked background opacity is back
// $(".btn-rules").click(function() {
//   $(".flex-header, .flex-middle").css({ opacity: "1" });
// });

//Canvas
//---------------

var canvas = document.querySelector(".canvas");
var ctx = canvas.getContext("2d");

//Bins
//-------------------------------
var yellowBinImg = new Image();
yellowBinImg.src = "./images/yellowBin.svg";

var greenBinImg = new Image();
greenBinImg.src = "./images/greenBin.png";

var binImg = [yellowBinImg, greenBinImg];
var currentBinImg = yellowBinImg;

// Function random for the waste
// Need to find where to put the click function with space to change the color
// currentBin = currentBin[Math.floor(Math.random() * zombies.length)];

//Waste
//-------------------------------
//Waste for the yellow bin
var canImg = new Image();
canImg.src = "./images/yellowGarbage/can.svg";

var cartonImg = new Image();
cartonImg.src = "./images/yellowGarbage/carton.svg";

var envelopImg = new Image();
envelopImg.src = "./images/yellowGarbage/envelop.svg";

var newspaperImg = new Image();
newspaperImg.src = "./images/yellowGarbage/newspaper.svg";

var plasticBottleImg = new Image();
plasticBottleImg.src = "./images/yellowGarbage/plasticBottle.svg";

var tinCanImg = new Image();
tinCanImg.src = "./images/yellowGarbage/tinCan.svg";

var toothPasteImg = new Image();
toothPasteImg.src = "./images/yellowGarbage/toothPaste.svg";

//Array of yellow waste
var yellowGarbage = [
  canImg,
  cartonImg,
  envelopImg,
  newspaperImg,
  plasticBottleImg,
  tinCanImg,
  toothPasteImg
];

//Waste for the green bin
var brokenGlassImg = new Image();
brokenGlassImg.src = "./images/greenGarbage/brokenGlass.svg";

var diaperImg = new Image();
diaperImg.src = "./images/greenGarbage/diaper.svg";

// var fishBoneImg = new Image();
// fishBoneImg.src = ".images/greenGarbage.fishBone.svg";

// var bananaPeelImg = new Image();
// bananaPeelImg.src = ".images/greenGarbage/bananaPeel.svg";

// var dirtyTissueImg = new Image();
// dirtyTissueImg.src = ".images/greenGarbage/dirtyTissue.svg";

// var medicinePlasticStripImg = new Image();
// medicinePlasticStripImg.src = ".images/greenGarbage/medicinePlasticStrip.svg";

//Array of green waste
var greenGarbage = [
  brokenGlassImg,
  diaperImg
  // fishBoneImg,
  // bananaPeelImg,
  // dirtyTissueImg,
  // medicinePlasticStripImg
];

//Creating an object for the bins that will help if collision
// group up bin's variables in an object (easier to detect crashes later)
var bin = {
  x: 350,
  y: 350,
  width: 89.59,
  height: 100,
  //to check the color of the bin
  color: "yellow",
  //when the bin is in collision with a waste
  isCrashed: false
};

function drawBin() {
  ctx.drawImage(currentBinImg, bin.x, bin.y, bin.width, bin.height);
}

bin.onload = function() {
  ctx.drawImage(currentBinImg, bin.x, bin.y, bin.width, bin.height);
};

// Call "drawingLoop"
//--------------------

drawingLoop();

function drawingLoop() {
  ctx.clearRect(0, 0, 700, 450);
  drawBin();

  // requestAnimationFrame(function() {
  //   drawingLoop();
  // });
}

//Keydown event
//------------

document.onkeydown = function(event) {
  console.log("keydown OK");
  console.log(event);

  switch (event.keyCode) {
    case 37: // left arrow key
      event.preventDefault();
      bin.x -= 20;
      break;

    case 39: // right arrow key
      event.preventDefault();
      bin.x += 20;
      break;

    case 32: //space key to change the color of the bin
      event.preventDefault();
      if (currentBinImg === yellowBinImg) {
        currentBinImg = greenBinImg;
        bin.color = "green";
      } else if (currentBinImg === greenBinImg) {
        currentBinImg = yellowBinImg;
        bin.color = "yellow";
      }
      break;
  }
};

// Waste falling down
// -------------------
var allGarbage = [];

class Garbage {
  constructor(garbageX, garbageY, garbageWidth, garbageHeight, garbageImg) {
    this.x = garbageX;
    this.y = garbageY;
    this.width = garbageWidth;
    this.height = garbageHeight;
    this.Image = garbageImg;
    // when a garbage crashes it will disappear
    this.isCrashed = false;
  }

  drawRandomGarbage() {
    var index = Math.floor(Math.random() * yellowGarbage.length);
    var xPosition = Math.floor(Math.random() * 700);
    var garbage = new Garbage(xPosition, 0, 30, 30, yellowGarbage[index]);

    ctx.drawImage(
      yellowGarbage[index],
      garbage.x,
      garbage.y,
      garbage.width,
      garbage.height
    );
  }
}

// function drawGarbage() {}

//Collision
//------

// function rectangleCollision(rectA, rectB) {
//   return (
//     // check the positions to see if overlap around the 4 corners
//     //check y & height // check x & width
//     //always true for rectangle collusion
//     rectA.y + rectA.height >= rectB.y &&
//     rectA.y <= rectB.y + rectB.height &&
//     rectA.x + rectA.width >= rectB.x &&
//     rectA.x <= rectB.x + rectB.width
//     // return true or false
//   );
// }

// function checkCrashes() {
//   allPipes.forEach(function(onePipe) {
//     if (rectangleCollision(celine, onePipe)) {
//       // = if rectangleCollision(celine, pipe1) = true do the following
//       // if not, keep going nothing happen
//       celine.isCrashed = true;
//       onePipe.isCrashed = true;
//     }
//   });

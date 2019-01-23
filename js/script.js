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

//Canvas
//---------------

var canvas = document.querySelector(".canvas");
var ctx = canvas.getContext("2d");

//Bins
//-------------------------------
var yellowBinImg = new Image();
yellowBinImg.src = "./images/yellowBin.svg";

var greenBinImg = new Image();
greenBinImg.src = "./images/greenBin.svg";

var currentBinImg = yellowBinImg;

//Waste
//-------------------------------
//Waste for the yellow bin
var canImg = new Image();
canImg.src = "./images/yellowGarbage/can.svg";
canImg.color = "yellow";

var cartonImg = new Image();
cartonImg.src = "./images/yellowGarbage/carton.svg";
cartonImg.color = "yellow";

var envelopImg = new Image();
envelopImg.src = "./images/yellowGarbage/envelop.svg";
envelopImg.color = "yellow";

var newspaperImg = new Image();
newspaperImg.src = "./images/yellowGarbage/newspaper.svg";
newspaperImg.color = "yellow";

var plasticBottleImg = new Image();
plasticBottleImg.src = "./images/yellowGarbage/plasticBottle.svg";
plasticBottleImg.color = "yellow";

var tinCanImg = new Image();
tinCanImg.src = "./images/yellowGarbage/tinCan.svg";
tinCanImg.color = "yellow";

var toothPasteImg = new Image();
toothPasteImg.src = "./images/yellowGarbage/toothPaste.svg";
toothPasteImg.color = "yellow";

//Waste
//-------------------------------
//Waste for the green bin
var brokenGlassImg = new Image();
brokenGlassImg.src = "./images/greenGarbage/brokenGlass.svg";
brokenGlassImg.color = "green";

var diaperImg = new Image();
diaperImg.src = "./images/greenGarbage/diaper.svg";
diaperImg.color = "green";

var fishBoneImg = new Image();
fishBoneImg.src = "./images/greenGarbage/fishBone.svg";
fishBoneImg.color = "green";

var bananaPeelImg = new Image();
bananaPeelImg.src = "./images/greenGarbage/bananaPeel.svg";
bananaPeelImg.color = "green";

var dirtyTissueImg = new Image();
dirtyTissueImg.src = "./images/greenGarbage/dirtyTissue.svg";
dirtyTissueImg.color = "green";

var medicinePlasticStripImg = new Image();
medicinePlasticStripImg.src = "./images/greenGarbage/medicinePlasticStrip.svg";
medicinePlasticStripImg.color = "green";

//BIN
//-----------------
//Creating an object for the bins that will help if collision
// group up bin's variables in an object (easier to detect crashes later)
var bin = {
  x: canvas.width / 2 - 50,
  y: canvas.height - 100,
  width: 100,
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

//KEYDOWN EVENT
//------------

document.onkeydown = function(event) {
  // console.log("keydown OK");
  // console.log(event);

  switch (event.keyCode) {
    case 37: // left arrow key
      event.preventDefault();
      if (bin.x > 0) {
        bin.x -= 20;
      } else {
        bin.x = 0;
      }

      break;

    case 39: // right arrow key
      event.preventDefault();
      if (bin.x < 600) {
        bin.x += 20;
      } else {
        bin.x = 600;
      }
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

var garbageImages = [
  canImg,
  cartonImg,
  envelopImg,
  newspaperImg,
  plasticBottleImg,
  tinCanImg,
  toothPasteImg,
  brokenGlassImg,
  diaperImg,
  fishBoneImg,
  bananaPeelImg,
  dirtyTissueImg,
  medicinePlasticStripImg
];

function Falling(
  garbagePicto,
  garbageX,
  garbageY,
  garbageWidth,
  garbageHeight
) {
  this.picto = garbagePicto;
  this.x = garbageX;
  this.y = garbageY;
  this.width = garbageWidth;
  this.height = garbageHeight;
  // when a garbage crashes on the floor it will disappear
  this.isCrashedFloor = false;
  // when a garbage crashes on a trash it will disappear
  this.isCrashedTrashBin = false;
  this.color = garbagePicto.color;
}

var allGarbage = [];

function arrayGarbage() {
  //create an array with random x position and picto
  //while statement to be modified until win or lose
  while (allGarbage.length < Math.floor(Math.random() * 3) + 1) {
    var itemGarbage = new Falling(
      garbageImages[Math.floor(Math.random() * garbageImages.length)],
      Math.floor(Math.random() * 450),
      -Math.floor(Math.random() * 300),
      100,
      100
    );
    allGarbage.push(itemGarbage);
  }
}

arrayGarbage();

function drawGarbage() {
  // console.log(allGarbage);
  //create an array with random x position and picto
  allGarbage.forEach(function(oneElement, index) {
    if (!oneElement.isCrashedFloor && !oneElement.isCrashedTrashBin) {
      oneElement.y += Math.floor(Math.random() * 4);
    }
    ctx.drawImage(
      oneElement.picto,
      oneElement.x,
      oneElement.y,
      oneElement.width,
      oneElement.height
    );
  });
}

// Call "drawingLoop"
//--------------------

function drawingLoop() {
  ctx.clearRect(0, 0, 700, 450);
  drawBin();
  drawGarbage();
  checkFloorCrash();
  checkTrashBinCrash();
  WinOrLose();
  requestAnimationFrame(function() {
    drawingLoop();
  });
}

drawingLoop();

//Collision
//------

function rectangleCollision(rectA, rectB) {
  return (
    // check the positions to see if overlap around the 4 corners
    //check y & height // check x & width
    //always true for rectangle collusion
    rectA.y + rectA.height >= rectB.y &&
    rectA.y <= rectB.y + rectB.height &&
    rectA.x + rectA.width >= rectB.x &&
    rectA.x <= rectB.x + rectB.width
    // return true or false
  );
}

//Starting point = 0
var totalPoints = 0;
$(".points").html(totalPoints);

function checkFloorCrash() {
  allGarbage.forEach(function(oneElement, index) {
    if (oneElement.y > 450) {
      oneElement.isCrashedFloor = true;
      //remove the trash from the array
      allGarbage.splice(index, 1);
      //recreate a new array
      arrayGarbage();
      //remove 2 points
      totalPoints -= 2;
      $(".points").html(totalPoints);
    }
  });
}

function checkTrashBinCrash() {
  allGarbage.forEach(function(oneElement, index) {
    if (rectangleCollision(bin, oneElement)) {
      bin.isCrashed = true;
      oneElement.isCrashedTrashBin = true;
      //remove the trash from the array
      allGarbage.splice(index, 1);
      //recreate a new array
      arrayGarbage();
      if (oneElement.color === bin.color) {
        //add 1 point if the bin and trash color match
        totalPoints += 1;
        $(".points").html(totalPoints);
        correctBin.play();
        ctx.fillStyle = "#1DA676";
        ctx.font = " 100px Montserrat";
        ctx.fillText("+1", oneElement.x - 10, oneElement.y - 10);
      } else {
        //remove 1 point if the bin and trash color DONT match
        totalPoints -= 1;
        $(".points").html(totalPoints);
        wrongBin.play();
      }
    }
  });
}

var win = new Audio("./music/Audience_Applause-Matthiew11-1206899159.mp3");
var correctBin = new Audio("./music/Blop-Mark_DiAngelo-79054334.mp3");
var wrongBin = new Audio("./music/Music Censor-SoundBible.com-818434396.mp3");

function WinOrLose() {
  if (totalPoints === 20) {
    $(".popup-end-win").css({ display: "block" });
    win.play();
    cancelAnimationFrame();

    $(".btn-play-again").click(function() {
      drawingLoop();
      $(".popup-end-win").css({ display: "none" });
    });
  }
  if (totalPoints === -20) {
    $(".popup-end-lose").css({ display: "block" });

    cancelAnimationFrame();
    $(".btn-play-again").click(function() {
      drawingLoop();
      $(".popup-end-lose").css({ display: "none" });
    });
  }
}

// function scoreWhite() {
//   $(".points").css("color", "white");
// }

// $(".points").css("color", "#1DA676");
// setTimeout(scoreWhite(), 3000);

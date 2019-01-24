//Audio
//-------------------------------
var win = new Audio("./music/Audience_Applause-Matthiew11-1206899159.mp3");
var lose = new Audio("./music/Sad_Trombone-Joe_Lamb-665429450.mp3");
var correctBin = new Audio("./music/Blop-Mark_DiAngelo-79054334.mp3");
var wrongBin = new Audio("./music/Music Censor-SoundBible.com-818434396.mp3");

//Bins
//-------------------------------
var yellowBinImg = new Image();
yellowBinImg.src = "./images/yellowBin.svg";

var greenBinImg = new Image();
greenBinImg.src = "./images/greenBin.svg";

var whiteBinImg = new Image();
whiteBinImg.src = "./images/whiteBin.svg";

var currentBinImg = yellowBinImg;

//Waste
//-------------------------------
//Waste for the yellow bin
var belleIlloiseImg = new Image();
belleIlloiseImg.src = "./images/yellowGarbageOK/belleIlloise.png";
belleIlloiseImg.color = "yellow";

var bonduelleImg = new Image();
bonduelleImg.src = "./images/yellowGarbageOK/bonduelle.png";
bonduelleImg.color = "yellow";

var cokeImg = new Image();
cokeImg.src = "./images/yellowGarbageOK/coke.png";
cokeImg.color = "yellow";

var cristallineImg = new Image();
cristallineImg.src = "./images/yellowGarbageOK/cristalline.png";
cristallineImg.color = "yellow";

var lactelImg = new Image();
lactelImg.src = "./images/yellowGarbageOK/lactel.png";
lactelImg.color = "yellow";

var laysImg = new Image();
laysImg.src = "./images/yellowGarbageOK/lays.png";
laysImg.color = "yellow";

var liebigImg = new Image();
liebigImg.src = "./images/yellowGarbageOK/liebig.png";
liebigImg.color = "yellow";

var lionImg = new Image();
lionImg.src = "./images/yellowGarbageOK/lion.png";
lionImg.color = "yellow";

var shampooImg = new Image();
shampooImg.src = "./images/yellowGarbageOK/shampoo.png";
shampooImg.color = "yellow";

var spriteImg = new Image();
spriteImg.src = "./images/yellowGarbageOK/sprite.png";
spriteImg.color = "yellow";

var toothpasteImg = new Image();
toothpasteImg.src = "./images/yellowGarbageOK/toothpaste.png";
toothpasteImg.color = "yellow";

var yoghurtImg = new Image();
yoghurtImg.src = "./images/yellowGarbageOK/yoghurt.png";
yoghurtImg.color = "yellow";

var capsImg = new Image();
capsImg.src = "./images/yellowGarbageOK/caps.png";
capsImg.color = "yellow";

var coffeeImg = new Image();
coffeeImg.src = "./images/yellowGarbageOK/coffee.png";
coffeeImg.color = "yellow";

var envelopImg = new Image();
envelopImg.src = "./images/yellowGarbageOK/envelop.png";
envelopImg.color = "yellow";

var newspaperImg = new Image();
newspaperImg.src = "./images/yellowGarbageOK/newspaper.png";
newspaperImg.color = "yellow";

var pompotesImg = new Image();
pompotesImg.src = "./images/yellowGarbageOK/pompotes.png";
pompotesImg.color = "yellow";

var plasticBagImg = new Image();
plasticBagImg.src = "./images/yellowGarbageOK/plasticBag.png";
plasticBagImg.color = "yellow";

var doveImg = new Image();
doveImg.src = "./images/yellowGarbageOK/dove.png";
doveImg.color = "yellow";

//Waste
//-------------------------------
//Waste for the green bin

var diaperImg = new Image();
diaperImg.src = "./images/greenGarbageOK/diaper.svg";
diaperImg.color = "green";

var bananaImg = new Image();
bananaImg.src = "./images/greenGarbageOK/banana.png";
bananaImg.color = "green";

var bonesImg = new Image();
bonesImg.src = "./images/greenGarbageOK/bones.png";
bonesImg.color = "green";

var fishImg = new Image();
fishImg.src = "./images/greenGarbageOK/fish.png";
fishImg.color = "green";

var glassWineImg = new Image();
glassWineImg.src = "./images/greenGarbageOK/glassWine.png";
glassWineImg.color = "green";

var plateImg = new Image();
plateImg.src = "./images/greenGarbageOK/plate.png";
plateImg.color = "green";

//Waste
//-------------------------------
//Waste for the white bin

var beerImg = new Image();
beerImg.src = "./images/whiteGarbageOK/beer.png";
beerImg.color = "white";

var glassBottleImg = new Image();
glassBottleImg.src = "./images/whiteGarbageOK/glassBottle.png";
glassBottleImg.color = "white";

var glassGreenImg = new Image();
glassGreenImg.src = "./images/whiteGarbageOK/glassGreen.png";
glassGreenImg.color = "white";

var glassPotImg = new Image();
glassPotImg.src = "./images/whiteGarbageOK/glassPot.png";
glassPotImg.color = "white";

var jarImg = new Image();
jarImg.src = "./images/whiteGarbageOK/jar.png";
jarImg.color = "white";

var perrierImg = new Image();
perrierImg.src = "./images/whiteGarbageOK/perrier.png";
perrierImg.color = "white";

//ARRAY WITH ALL GARBAGE IMAGES

var garbageImages1 = [
  belleIlloiseImg,
  bonduelleImg,
  cokeImg,
  cristallineImg,
  lactelImg,
  laysImg,
  liebigImg,
  lionImg,
  shampooImg,
  spriteImg,
  toothpasteImg,
  yoghurtImg,
  capsImg,
  coffeeImg,
  envelopImg,
  newspaperImg,
  pompotesImg,
  plasticBagImg,
  doveImg,
  diaperImg,
  bananaImg,
  bonesImg,
  fishImg,
  glassWineImg,
  plateImg
];

var garbageImages2 = [
  belleIlloiseImg,
  bonduelleImg,
  cokeImg,
  cristallineImg,
  lactelImg,
  laysImg,
  liebigImg,
  lionImg,
  shampooImg,
  spriteImg,
  toothpasteImg,
  yoghurtImg,
  capsImg,
  coffeeImg,
  envelopImg,
  newspaperImg,
  pompotesImg,
  plasticBagImg,
  doveImg,
  diaperImg,
  bananaImg,
  bonesImg,
  fishImg,
  glassWineImg,
  plateImg,
  beerImg,
  glassBottleImg,
  glassGreenImg,
  glassPotImg,
  jarImg,
  perrierImg,
  beerImg,
  glassBottleImg,
  glassGreenImg,
  glassPotImg,
  jarImg,
  perrierImg
];

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
  arrayGarbage();
  drawingLoop();
});

//Canvas
//---------------

var canvas = document.querySelector(".canvas");
var ctx = canvas.getContext("2d");

var playerLevel = 1;

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
        bin.x -= 30;
      } else {
        bin.x = 0;
      }

      break;

    case 39: // right arrow key
      event.preventDefault();
      if (bin.x < 600) {
        bin.x += 30;
      } else {
        bin.x = 600;
      }
      break;

    case 32: //space key to change the color of the bin
      event.preventDefault();
      if (playerLevel === 1) {
        if (currentBinImg === yellowBinImg) {
          currentBinImg = greenBinImg;
          bin.color = "green";
        } else if (currentBinImg === greenBinImg) {
          currentBinImg = yellowBinImg;
          bin.color = "yellow";
        }
      }
      if (playerLevel === 2) {
        if (currentBinImg === yellowBinImg) {
          currentBinImg = greenBinImg;
          bin.color = "green";
        } else if (currentBinImg === greenBinImg) {
          currentBinImg = whiteBinImg;
          bin.color = "white";
        } else if (currentBinImg === whiteBinImg) {
          currentBinImg = yellowBinImg;
          bin.color = "yellow";
        }
      }
      break;
  }
};

// PICKING RANDOM GARBAGE

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
    if (playerLevel === 1) {
      var garbageImages = garbageImages1;
    } else if (playerLevel === 2) {
      var garbageImages = garbageImages2;
    }
    var itemX = Math.floor(Math.random() * 600);
    var itemGarbage = new Falling(
      garbageImages[Math.floor(Math.random() * garbageImages.length)],
      itemX,
      -Math.floor(Math.random() * 300),
      100,
      100
    );

    //check if this potential new item is overlapping with one of the previous items in the array
    var overlapping = false;

    for (var i = 0; i < allGarbage.length; i++) {
      var otherGarbage = allGarbage[i];
      var distance = Math.abs(itemX - otherGarbage.x);
      if (distance < otherGarbage.width) {
        overlapping = true;
      }
    }

    //if not overlapping, this new item is pushed in the array
    if (!overlapping) {
      allGarbage.push(itemGarbage);
    }
  }
}

function drawGarbage() {
  // console.log(allGarbage);
  //create an array with random x position and picto
  allGarbage.forEach(function(oneElement, index) {
    if (!oneElement.isCrashedFloor && !oneElement.isCrashedTrashBin) {
      oneElement.y += 2;
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

//Starting point = 0
var totalPoints = 0;
$(".points").html(totalPoints);

function drawingLoop() {
  if (totalPoints < 5 && totalPoints > -5) {
    ctx.clearRect(0, 0, 700, 450);
    drawBin();
    drawGarbage();
    checkFloorCrash();
    checkTrashBinCrash();
    requestAnimationFrame(function() {
      drawingLoop();
    });
  }

  if (totalPoints === 5) {
    $(".popup-end-win").css({ display: "block" });
    win.play();
    return;
  }
  if (totalPoints <= -5) {
    $(".popup-end-lose").css({ display: "block" });
    lose.play();
    return;
  }
}

// POP UP AND BUTTON TOP PLAY AGAIN
// ------------------------------

$(".btn-play-again").click(function() {
  $(".popup-end-lose").css({ display: "none" });
  totalPoints = 0;
  $(".points").html(totalPoints);
  currentBinImg = yellowBinImg;
  allGarbage = [];
  arrayGarbage();
  drawingLoop();
});

$(".btn-next-level").click(function() {
  $(".popup-end-win").css({ display: "none" });
  totalPoints = 0;
  $(".points").html(totalPoints);
  currentBinImg = yellowBinImg;
  allGarbage = [];
  arrayGarbage();
  drawingLoop();
  playerLevel = 2;
  $(".level").html("LEVEL 2");
});

// COLLISION
// ------

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
        // ctx.fillStyle = "#1DA676";
        // ctx.font = " 100px Montserrat";
        // ctx.fillText("+1", oneElement.x - 10, oneElement.y - 10);
      } else {
        //remove 1 point if the bin and trash color DONT match
        totalPoints -= 1;
        $(".points").html(totalPoints);
        wrongBin.play();
      }
    }
  });
}

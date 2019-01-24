$(".btn-next-level").click(function() {
  totalPoints = 0;
  allGarbage = [];
  currentBinImg = yellowBinImg;
  $(".level1").css({ display: "none" });
  $(".level2").css({ display: "block" });
  arrayGarbage();
  drawingLoop();
  playerLevel = 2;

  $(".flex-header, .flex-middle").css({ opacity: "1" });
  $(".popup-end-win").css({ display: "none" });

  console.log(playerLevel);


for (i = 0; i < allGarbage.length; i++) {
  if (
    itemX + itemGarbage.width >= allGarbage[i - 1].x &&
    itemX <= allGarbage[i - 1].x + allGarbage[i - 1].width
  ) {
    if (700 > allGarbage[i - 1].x > 350) {
      itemX -= allGarbage[i - 1].width;
      console.log("WRONG");
    }
    if (0 < allGarbage[i - 1].x < 350) {
      itemX += allGarbage[i - 1].width;
      console.log("WRONG BIS");
    }
  }


var nbGarbage = Math.floor(Math.random() * 3);
while (allGarbage.length < nbGarbage) {
  var itemGarbage = new Falling(
    yellowGarbage[Math.floor(Math.random() * yellowGarbage.length)],
    Math.floor(Math.random() * 450),
    0,
    50,
    75
  );
  allGarbage.push(itemGarbage);
}

// Waste falling down
// -------------------

// class Falling {
//   constructor(garbagePicto, garbageX, garbageY, garbageWidth, garbageHeight) {
//     this.picto = garbagePicto;
//     this.x = garbageX;
//     this.y = garbageY;
//     this.width = garbageWidth;
//     this.height = garbageHeight;
//     // when a garbage crashes it will disappear
//     this.isCrashed = false;
//   }
//   drawGarbage() {
//     ctx.drawImage(this.picto, this.x, this.y, this.width, this.height);
//   }
// }






// var index = Math.floor(Math.random() * yellowGarbage.length);

// var allGarbage = [
//   new falling("canImg", 500, 0, 50, 50),
//   new falling("plasticBottleImg", 300, 0, 50, 50)
// ];

// yellowGarbage[index].onload = function() {
//   ctx.drawImage(
//     yellowGarbage[0],
//     garbage.x,
//     garbage.y,
//     garbage.width,
//     garbage.height
//   );
// };
// });

// function drawGarbage() {
//   if (Math.floor(Math.random() * 2) === 0 && lines.length < 100) {
//     lines.push(new textLine());
//   }
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   lines.forEach(function(tl) {
//     ctx.drawImage(tl.text, tl.posX, tl.animate(), 20, 1000);
//   });
//   ctx.drawImage(logo, 100, 155, 400, 70);
// }

// var garbage = {
//   x: 350,
//   y: 0,
//   width: 30,
//   height: 30
//   // isCrashed: false
// };

// function drawCan() {
//   ctx.drawImage(
//     yellowGarbage[index],
//     garbage.x,
//     garbage.y,
//     garbage.width,
//     garbage.height
//   );
//   garbage.y += 0.2;
// }
}
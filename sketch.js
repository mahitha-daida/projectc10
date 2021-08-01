var sea;
var seaimg;
var ship,shipimg;
function preload(){
seaimg=loadImage('sea.png');
shipimg=loadAnimation('ship-1.png','ship-1.png','ship-2.png','ship-1.png');
}


function setup(){
  createCanvas(400,400);
 
  sea=createSprite(400,200);
  sea.addImage(seaimg);
  sea.scale=0.3;
  sea.velocityX=-5;

 ship=createSprite(130,200,30,30);
ship.addAnimation('movingship',shipimg);
ship.scale=0.25;


}

function draw() {
  background("blue");
  if(sea.x<0){
 sea.x=sea.width/8;
  }
 drawSprites();
}

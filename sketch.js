var fixSprite1, fixSprite2, fixSprite3, fixSprite4;
var movingSprite;
var music;

function Preload(){

music=loadSound("music.mp3");

}

function setup(){

    createCanvas(800,600);

    movingSprite=createSprite(random(10,750),300,20,20);
    movingSprite.shapeColour="white";
    movingSprite.velocityX=3;
    movingSprite.velocityY=3;

    fixSprite1=createSprite(100,590,180,20);
    fixSprite1.shapeColour="red";

    fixSprite2=createSprite(300,590,180,20);
    fixSprite2.shapeColour="green";

    fixSprite3=createSprite(500,590,180,20);
    fixSprite3.shapeColour="blue";

    fixSprite1=createSprite(700,590,180,20);
    fixSprite1.shapeColour="yellow";

}

function draw(){

background(rgb(10,10,10));

if(movingSprite.x<0){

    music.stop()

    movingSprite.velocityX=3;

}else if(movingSprite.x>800){

    music.stop()

    movingSprite.velocityX=-3
}

if(isTouching(movingSprite,fixSprite4)){
     
    music.play()

    movingSprite.shapeColour="yellow";

     bounceOff(movingSprite,fixSprite4)

}



if(isTouching(movingSprite,fixSprite3)){
     
    music.play()

    movingSprite.shapeColour="blue";

     bounceOff(movingSprite,fixSprite3)

}


if(isTouching(movingSprite,fixSprite2)){
     
    music.play()

    movingSprite.shapeColour="green";

     bounceOff(movingSprite,fixSprite2)

}

if(isTouching(movingSprite,fixSprite1)){
     
    music.play()

    movingSprite.shapeColour="red";

     bounceOff(movingSprite,fixSprit1)

}

if(movingSprite.y<0){

    music.stop()

    movingSprite.velocityY=3
}

drawSprites()

}


var bg1, bg;
var  sleepImg
var  brushImg;
var  gymImg;
var eatingImg;
var bathImg;
var move;

function preload(){
  bg = loadImage("iss.png");
  brushImg = loadImage("brush.png");
  sleepImg = loadImage("sleep.png");
  gymImg = loadAnimation("gym1.png", "gym2.png");
  eatingImg = loadAnimation("eat1.png", "eat2.png");
  bathImg = loadAnimation("bath1.png", "bath2.png");
  move = loadAnimation("move.png", "move1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
  
  
  sleep = createSprite(600, 200);
  sleep.addImage("sleep", sleepImg);
  sleep.scale = 0.1;
  
   brush = createSprite(350, 350);
  brush.addImage("brush", brushImg);
  brush.addAnimation("gym", gymImg);
  brush.addAnimation("eat", eatingImg);
  brush.addAnimation("bath", bathImg)
  brush.addAnimation("move", move)
  brush.scale = 0.1;
  brush.visible = false;
  
  
}




function draw() {
 background(bg)
  
  createEdgeSprites()
  
  textSize(20);
fill("white");
  text("Instructions:", 10, 20)
  
   textSize(15);
fill("white");
  text("Up Arrow = Brushing", 10, 40)
  
  textSize(15);
fill("white");
  text("Down Arrow = Gymming", 10, 60)
  
  textSize(15);
fill("white");
  text("Left Arrow = Eating", 10, 80)
  
  textSize(15);
fill("white");
  text("Right Arrow = Bathing", 10, 100)
  
  textSize(15);
fill("white");
  text("M = Moving", 10, 120)
  
  
  
  
  
 if(keyDown("UP_ARROW")){
  sleep.visible = false;
  brush.visible = true;
  
    }

  if(keyDown("DOWN_ARROW")){
    
    brush.changeImage('gym')
    
  }
  
  if(keyDown("LEFT_ARROW")){
    brush.changeAnimation('eat');
  }
  
  
  if(keyDown("RIGHT_ARROW")){
    brush.changeAnimation('bath');
  }
  
   
  if(keyDown("M")){
    brush.changeAnimation('move');
    brush.velocityX = 2;
    brush.velocityY = 2;
    
  
  }
  
  
  
  drawSprites();
}

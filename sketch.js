var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(600, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;

  gameObj1 = createSprite(400, 50, 50, 50);
  gameObj1.velocityY = 5;
  gameObj2 = createSprite(600, 50, 50, 50);
  gameObj2.velocityY = 5;
}

function draw() {
  background(0,0,0);
  
  checkBounce(movingRect, gameObj2);
  

  drawSprites();
}



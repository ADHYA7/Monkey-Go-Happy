var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground ;
var survivalTime=0;
function preload(){
  
  
  monkey_running  =      loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png",
                                       "sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
    createCanvas(500,500);
    ground = createSprite(250,450,500,12);
    ground.velocityX = -4;
    ground.x = ground.width/2;
    console.log(ground.x);
    monkey = createSprite(80,420,10,10);
    monkey.addAnimation("moving",monkey_running);
    monkey.scale = 0.1;
    FoodGroup = new Group();
    obstacleGroup = new Group();
  score=0;
}


function draw() {
  background("lightblue")
  if(ground.x<150){
  ground.x=250;    
 }
  if(keyDown("space")&&monkey.y>=164){
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time = "+survivalTime,100,50);
  OBSTACLES();
  BANANAS();
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
  }
  drawSprites();
  }      
function OBSTACLES(){
if(frameCount % 150===0){
   obstacle = createSprite(400,430,10,10);
   obstacle.velocityX = -3;
   obstacle.addImage(obstacleImage)
   obstacle.scale = 0.1;
   obstacleGroup.add(obstacle)
   obstacle.lifetime=200;
}
}
function BANANAS(){
if(frameCount % 150===0){
    banana = createSprite(400,10,10,10);
    banana.x=Math.round(random(150,10))
    banana.velocityY = 6;
    banana.addImage(bananaImage);
    banana.scale=0.1;
    FoodGroup.add(banana)
    
}
  
}



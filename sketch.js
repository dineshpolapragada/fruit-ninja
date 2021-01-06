var PLAY=1;
var END=0;
var gameState=1;
var sword,fruit1,fruitGroup,EnemyGroup,fruitImage,fruit,fruit2Image,Enemy,monster,monsterImage,gameover,song;
var swordImage,alien1Image,alien2Image,fruit1,fruit2,frui3;
function preload(){
  swordImage = loadImage("sword.png");
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  monster1 = loadImage("alien1.png");
  gameover = loadImage("gameover.png");
 
   song = loadSound('gameOver.mp3');
  swordSong = loadSound('knifeSwooshSound.mp3');
}
function setup(){
  createCanvas(600,600);
  
  //creating sword
  sword=createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale = 0.7;
  
  //score variable and groups
  score=0
  fruitGroup=createGroup();
  enemyGroup=createGroup();
}

function draw(){
  
  background("lightblue")
  sword.y =mouseY;
  sword.x =mouseX;
  text("Score= "+ score, 300,30);
  drawSprites();
   fruits();
    enemy();

  
  if(gameState===PLAY){
    
    sword.x = mouseX
    sword.y = mouseY
    sword.addImage(swordImage);
    
    if(sword.isTouching(fruitGroup)){
      swordSong.play();
      fruitGroup.destroyEach();
      score = score +2;
    }
    
    if(sword.isTouching(enemyGroup)){
      gameState=END; 
       song.play();
    }
  }
  
  if(gameState===END){    
    
      fruitGroup.destroyEach();
      enemyGroup.destroyEach();
      fruitGroup.setVelocityXEach(0);
      enemyGroup.setVelocityXEach(0);
      
      sword.addImage(gameover);      
    
      sword.x=200;
      sword.y=200;
    
  }
  

}

function fruits(){
  
  if(World.frameCount%80===0){
    
      fruit=createSprite(400,200,20,20);
      fruit.scale = 0.2;
      r=Math.round(random(1,4));   
    
      if(r==1){
        fruit.addImage(fruit1); 
      }else if (r == 2){
        fruit.addImage(fruit2);
      }else if (r == 3){
        fruit.addImage(fruit3);
      }else{
        fruit.addImage(fruit4);  
      }
    position = Math.round(random(1,2));
    if(position == 1) {
      fruit.x=400;
      fruit.velocityX=-(7+(score/4))
    }else
      {
        if(position == 2) {
        fruit.x=0;
        fruit.velocityX=(7+(score/4))
        }
      }
   // fruit.y=Math.round(random(50,340));
   // fruit.velocityX=-7;
    fruit.Lifetime=100;
    fruitGroup.add(fruit);
  
  
}
 

 
}
function enemy(){
  
 if(World.frameCount%200===0){
  monster=createSprite(400,200,20,20);
  monster.addAnimation("moving",monster1);
  monster.y=Math.round(random(100,300));
  monster.velocityX=-(8+(score/10));
  monster.setLifetime=50;
   enemyGroup.add(monster);
 } 
}

  
  
var trex, trexanim, ground

function preload(){
  trexanim=loadAnimation("trex1.png","trex3.png","trex4.png")
  earth=loadImage("ground2.png")
}

function setup(){
  createCanvas(400,400)
  
  trex = createSprite(200,200,10,10)
  trex.addAnimation("t", trexanim)
  
  ground=createSprite(200,300,400,20)
  ground.addImage("g",earth)
  
  
  ground.velocityX=-10
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}



function draw(){
  background("white")
  
if (ground.x<0){
  ground.x=ground.width/2
}
  
  
  drawSprites()
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ronald_reagen, ronald_reagen2, Trex, Rabbit, Europe, Shoe, Good_job, Cactus
var invisible_wall1, invisible_wall2

function preload(){
    Background = loadImage("download-1 copy.jpg")
    ronald_reagenImage = loadImage("download-2.jpg")
    Treximage = loadImage("download-1.jpg")
    Shoe = loadImage("download-1.png")
    EuropeImage = loadImage("download-3.jpg")
    RabbitImage = loadImage("download.jpg")
    Cactus = loadImage("download.png")
    Good_job_image = loadImage("download copy.jpg")
}

function setup(){
    createCanvas(1000,800);
    Good_job = createSprite(500,350,500,200);
    Good_job.addImage("download-1 copy.jpg",Good_job_image)
    Good_job.visible = false
    ronald_reagen = createSprite(500,350,400,20);
    ronald_reagen.addImage("download-2.jpg",ronald_reagenImage)
    ronald_reagen.scale = 0.5
    ronald_reagen2 = createSprite(500,350,400,20);
    ronald_reagen2.addImage("download-2.jpg",ronald_reagenImage)
    ronald_reagen2.scale = 0.5
    Trex = createSprite(90,650,400,20);
    Trex.addImage("download-1.png",Treximage);
    Trex.scale = 0.4
    Rabbit = createSprite(800,650,400,20);
    Rabbit.addImage("download.jpg",RabbitImage);
    Rabbit.scale = 0.4
    Europe = createSprite(500,50,400,20);
    Europe.addImage("download-3.jpg",EuropeImage);
    Europe.scale = 0.5
    invisible_wall1 = createSprite(10,30,10,1500)
    invisible_wall1.visible = false;
    invisible_wall2 = createSprite(950,30,10,1500)
    invisible_wall2.visible = false;
    engine = Engine.create();
    world = engine.world;
}
    
function draw(){
    background(Background);
    if (keyDown("RIGHT_ARROW")) {
        Trex.x+=50;
      }
      if (keyDown("DOWN_ARROW")) {
        Trex.y+=50;
      }
      if (keyDown("LEFT_ARROW")) {
        Trex.x-=50;
      }
       if (keyDown("SPACE")) {
        Trex.y-=50;
      }
      if (keyDown("A")) {
        Rabbit.x-=50;
      }
      if (keyDown("S")) {
        Rabbit.y+=50;
      }
      if (keyDown("D")) {
        Rabbit.x+=50;
      }
      if (keyDown("W")) {
        Rabbit.y-=50;
      }
      if( Trex.collide(ronald_reagen)){
        Trex.velocityY = 0.0;
        Trex.visible = false;
      }
      if(Trex.collide(ronald_reagen2)){
        Trex.velocityY = 0.0;
        Trex.visible = false;
      }
      if( Rabbit.collide(ronald_reagen)){
        Rabbit.velocityY = 0.0;
        Rabbit.visible = false;
      }
      if(Rabbit.collide(ronald_reagen2)){
        Rabbit.velocityY = 0.0;
        Rabbit.visible = false;
      }
      
      ronald_reagen.velocityX = -50
      ronald_reagen2.velocityX = 50
  if (ronald_reagen.isTouching(invisible_wall1)){
      ronald_reagen.x = 500;
      ronald_reagen.y = 350;
  }
  if(ronald_reagen2.isTouching(invisible_wall2)){
    ronald_reagen2.x = 500;
    ronald_reagen2.y = 350;
  }
  if(Trex.isTouching(Europe)){
    ronald_reagen.x = 0.0
    ronald_reagen.y = 0.0
    ronald_reagen2.x = 0.0
    ronald_reagen2.y = 0.0
    ronald_reagen.visible = false
    ronald_reagen2.visible = false
    Trex.visible = false
    Europe.visible = false
    Rabbit.visible = false
    Good_job.visible = true
  }
  if(Rabbit.isTouching(Europe)){
    ronald_reagen.x = 0.0
    ronald_reagen.y = 0.0
    ronald_reagen2.x = 0.0
    ronald_reagen2.y = 0.0
    ronald_reagen.visible = false
    ronald_reagen2.visible = false
    Trex.visible = false
    Europe.visible = false
    Rabbit.visible = false
    Good_job.visible = true
  }
    Trex.debug = true
    ronald_reagen.debug=true
    drawSprites();
}
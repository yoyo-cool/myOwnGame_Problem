const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var world, engine
var laserGun

function preload(){

}

function setup() {
  createCanvas(1000,700);
  engine = Engine.create()
  world = engine.world

  ground1=new ground(500,650,1000,30)
  ground2=new ground(650,550,1000,30)
  ground3=new ground(650,450,1000,30)
  ground4=new ground(650,350,1000,30)
  ground5=new ground(650,250,1000,30)
  ground6=new ground(650,150,1000,30)
  alien1=new alienMain(900,300,50,50)
  alien2=new alienMain(900,400,50,50)
  alien3=new alienMain(900,500,50,50)
  alien4=new alienMain(900,200,50,50)
  alien5=new alienMain(900,100,50,50)
  alien6=new alienMain(900,600,50,50)
  laserGun1= new LaserGun(100,mouseY,100,100)
  //bullet1=new Bullet(200,180,70,30)
  bullet1 = rect(40, 30, 50, 10);
  Matter.Body.setVelocity(bullet1,{x:5,y:0})


  Engine.run(engine)
}

function draw() {
  background(255,255,255);  
  textSize(25);
  text("Press space to shoot",50 ,50);
  drawSprites();

  ground1.display() 
  //ground2.display() 
  //ground3.display() 
  //ground4.display() 
  //ground5.display()
  //ground6.display() 
  alien1.display()
  alien5.display()
  alien4.display()
  alien3.display()
  alien2.display()
  alien6.display()
  laserGun1.display()
  bullet1.display()
  laserGun();
  laser()
}

function laserGun(){
  Matter.Body.setPosition(laserGun1.body,{x:100,y:mouseY})
}

function laser(){
    Matter.Body.setPosition(bullet1.body,{x:laserGun1.body.x+50,y:laserGun1.body.y})
    Matter.Body.setVelocity(bullet1.body,{x:5,y:0})
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var side1, side2, side3;
var binImg,bin;

function preload(){
    binImg = loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper = new Paper(600,450,10);
	ground = new Ground(width/2,670,width,20);
	side1 = new Side(900,570,20,100);
	side2 = new Side(960,610,100,20);
	side3 = new Side(1010,570,20,100);

  //bin.display();
  bin = createSprite(955,560,20,20);
  bin.addImage(binImg);
  bin.scale = 0.6;
  
	Engine.run(engine);  
}

function draw() {
 
  rectMode(CENTER);
  background(175);
  
  paper.display();
  ground.display();
  side1.display();
  side2.display();
  side3.display();
  //image(binImg,900,850,200,238);
  
  drawSprites();
}


function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:255, y: -245})
  }
}
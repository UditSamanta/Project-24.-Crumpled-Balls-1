
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = createSprite(width/2, height-35, width, 20);
	dustbin = createSprite(740, height-45, 100, 20);
  paper = createSprite(30, height-50, 30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbin.display();
  paper.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed()  {
  if (keyCode === UP_ARROW)
      Matter.Body.applyForce(paper.body, paper.body.position, {x = 60, y = 85});
} 
 if (keyCode === DOWN_ARROW) {
  Matter.Body.applyForce(paper.body, paper.body.position, {x = 740, y = height-45}); 
} 
  
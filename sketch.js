var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	helicopterIMG=loadImage("helicopter.png")
	helicopterIMG2=loadImage("helicopterP.png")
	packageIMG=loadImage("package.png")
}

function setup() {

	createCanvas(windowWidth,windowHeight);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true,velocity: { x: 0, y: 0 }});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  drawSprites();
}

function keyPressed() {
if (keyCode === DOWN_ARROW) {
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:false,position: { x: helicopterSprite.x, y: helicopterSprite.y },velocity: { x: 0, y: 4 }});
	World.add(world, packageBody);
  }

if (keyCode === LEFT_ARROW) {
	helicopterSprite.velocityX=-4;
	helicopterSprite.addImage(helicopterIMG2);
}
if (keyCode === RIGHT_ARROW) {
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.velocityX=4;
}
}
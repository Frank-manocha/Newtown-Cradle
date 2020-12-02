
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var body1,body2
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
constructer(body1,body2,offsetX,offsetY)
{
this.offsetX=offsetX
this.offsetY=offsetY

var options ={
	bodyA:body1,
	bodyB:body2,
	pointB:{x:this.offsetX,y:this.offsetY}
}
// console.log(options);
this.rope=constraint.create(options)
world.add(world,this.rope)
}

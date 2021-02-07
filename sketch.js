var dustbinImg;
var ground,dustbinObj,board2,board3;
var paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  dustbinImg=loadImage("images/dustbingreen.png");
 
}

function setup() {
	createCanvas(1200, 400);
	
    engine = Engine.create();
	  world = engine.world;

	 
	
	paper=new Paper(100,370,20,20);
 
  dustbinObj=new Dustbin(920,360,180,20);
	board2=new Dustbin(1010,280,20,180);
  board3=new Dustbin(840,280,20,180);
  ground=new Ground(600,380,1200,10);
	


    Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground.display();
  dustbinObj.display();
  paper.display();
  
  board2.display();
  board3.display();
  
  image(dustbinImg,925,270,210,210);

  drawSprites();
  
} 
  
function keyPressed(){
	if(keyCode === UP_ARROW){
		
		
		Matter.Body.applyForce(paper.body,paper.body.position,{x:80, y:-80});
	}
}
  
  
 









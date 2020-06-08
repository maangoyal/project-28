
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var paper;
var box1,ground;
var launcher;


function setup() {
	createCanvas(1200, 600);
	
	engine = Engine.create();
	world = engine.world;

    paper = new Paper(600,350,20);
    ground = new Ground(600,590,1200,20);
    box1 = new Dustbin(1000,500,120,160);
    launcher = new Launcher(paper.body,{x:600,y:300})
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
  text(mouseX + "," + mouseY,10,15)

  paper.display();
  ground.display();
  box1.display();
  launcher.display();

  drawSprites();
  }


function mouseDragged(){

  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
             
 }
 
 function mouseReleased(){
 
 launcher.fly()
 
 
     
 }
 
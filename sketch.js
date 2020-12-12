const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var ground1,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var slingshot;
var ball;
var rope;



function setup() {
  var canvas = createCanvas(1200,600);
 
  engine = Engine.create();
    world = engine.world;
  ground =new Ground(600,590,1200,10);

  box1 = new Box(600,580,50,50);
  box2 = new Box(550,580,50,50);
  box3 = new Box(650,580,50,50);
  box4 = new Box(600,530,50,50);
  box5 = new Box(550,530,50,50);
  box6 = new Box(650,530,50,50);
  box7 = new Box(600,480,50,50);
  box8 = new Box(550,430,50,50);
  box9 = new Box(650,380,50,50);
  box10 = new Box(600,330,50,50);
  box11 = new Box(550,280,50,50);
  box12 = new Box(650,230,50,50);
  ball = new Ball();
  rope = new SlingShot(ball.body,{x:300,y:100})




  
}

function draw() {
  background("red")
  Engine.update(engine);
  ground.display();
 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  ball.display();
  rope.display();
  

 
  
  


} 
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


  

function keyPressed(){
  if(keyCode === 32){
      //slingshot.attach(polygon);
  }
}

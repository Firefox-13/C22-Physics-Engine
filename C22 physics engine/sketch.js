//matter.js = library
//Engine, World, Bodies
//NameSpacing

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//setup
/* 1. Create the physics Engine inside a vble called 'engine' using 'Engine.create()'
2. Create a world for the physics Engine inside a variable called 'world' using 'engine.world'
3. Create a rectangular or circular body using 'Bodies.rectangle()/Bodies.circle()' inside a vble
4. Add the bodies to the world using 'World.add(world,body_name)'
5. Give options to the bodies if necessary
//draw
6. Inside the function draw, represent the Bodies.rectangle or Bodies.circle using 'rect' or 'ellipse'*/

var engine; 
var world;
var object;
var ball;

function setup() {
  createCanvas(400,400);
  //1
  engine = Engine.create();

  //2
  world = engine.world;

  //5 (static = rest)
  var objectOptions ={
    isStatic:true   //isStatic:false
  }
  var ballOptions ={
    restitution:1
  }
  
  object = Bodies.rectangle(200,380,400,20,objectOptions);
  World.add(world,object);


  //Bodies.circle(x,y,radius)
  ball = Bodies.circle(200,50,50,ballOptions);
  World.add(world,ball);

}

//objectname.position.x
function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  //make the x and y positions of the rect take the x and y positions of the object
  rect(object.position.x,object.position.y,400,20);
ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50)
  drawSprites();
}